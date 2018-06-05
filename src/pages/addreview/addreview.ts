import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { ReviewServiceProvider } from '../../providers/review-service/review-service';

/**
 * Generated class for the AddreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addreview',
  templateUrl: 'addreview.html',
})
export class AddreviewPage {

  public comment: string;
  public score: number;
  public address: string;
  public email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController
    , private reviewService: ReviewServiceProvider, private events: Events) {
    this.address = navParams.get('address');
    this.email = navParams.get('userEmail');
    console.log(this.email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddreviewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addReview() {
    this.reviewService.addReview({ Comentario: this.comment, Puntuacion: this.score, DireccionGasolinera: this.address,EmailUsuario:this.email })
      .then((data) => {
        this.addedReviewCorrectly(data);
      })
      .catch(() => {
        console.log("Ha habido algun error -> ReviewSErvice");
      })
  }

  addedReviewCorrectly(data: any) {
    this.events.publish('app:toast', data.message);
    this.viewCtrl.dismiss();
  }
}
