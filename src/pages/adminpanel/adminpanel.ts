import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { ReviewServiceProvider } from '../../providers/review-service/review-service';
/**
 * Generated class for the AdminpanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminpanel',
  templateUrl: 'adminpanel.html',
})
export class AdminpanelPage {

  public pendingReviews:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private reviewService: ReviewServiceProvider,
    private events: Events) {
  }

  ionViewWillEnter(){
    this.events.publish('app:showLoading','Por favor , espere mientras carga...');
    this.reviewService.getPendingReviews().then((data)=>{
      this.pendingReviews = data;
      console.log(data);
      this.events.publish('app:hideLoading');
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminpanelPage');
  }

  validateAll(){
    this.reviewService.validateAll(this.pendingReviews).then(()=>{
      this.pendingReviews = [];
    })
  }
}
