import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavouritesServiceProvider } from '../../providers/favourites-service/favourites-service';
/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public favouritesServices:FavouritesServiceProvider) {
  
  }

  ionViewWillEnter(){
    this.favouritesServices.getFavourites().then((value)=>{
        console.log(value);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  deleteFavourite(fuelstation:any){
    this.favouritesServices.deleteFromLocal(fuelstation);
  }

  deleteAll(){
    this.favouritesServices.deleteAll();
  }

}
