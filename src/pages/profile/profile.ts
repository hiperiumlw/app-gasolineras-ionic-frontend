import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewServiceProvider } from '../../providers/review-service/review-service';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';
import { FavouritesServiceProvider } from '../../providers/favourites-service/favourites-service';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  option:string = "reviews";
  reviews:any = [];
  favourites:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private reviewService:ReviewServiceProvider
  ,private authService:AuthenticationServiceProvider,private favouritesService:FavouritesServiceProvider) {
  }

  ionViewWillEnter(){
    this.authService.checkIfUserisLogged().then((user:any)=>{
      if (user){
        this.reviewService.getReviewsByUser(user.email).then((result)=>{
            this.reviews = result;
        });
        this.favouritesService.getFavourites().then((data)=>{
            this.favourites = data;
        })
      }
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
