import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
/*
  Generated class for the FavouritesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavouritesServiceProvider {

  public favourites:any;

  constructor(public http: HttpClient,private storage:Storage,private events: Events) {
    console.log('Hello FavouritesServiceProvider Provider');
  }

  checkIfAlreadyInFavourites(marker:any){
    return new Promise((resolve)=>{
      this.storage.get('favourites-fuelstations').then((value)=>{
        let exists:boolean = false;
        if (value){
          value.forEach((fuelstation)=>{
              if (fuelstation.address === marker.address)  exists=true ;
          })
        }
        resolve(exists);
      });
    })
  }

  saveFavouriteLocally(marker:any){
    this.storage.get('favourites-fuelstations').then((value)=>{
      (value) ? this.favourites = value : this.favourites = [];
      this.favourites.push(marker);
      this.storage.set('favourites-fuelstations',this.favourites).then(()=>{
        this.events.publish('app:toast','Se ha añadido la gasolinera a favoritos correctamente!');
      })
    })
  }

  deleteFromLocal(marker:any){
    this.storage.get('favourites-fuelstations').then((value)=>{
      this.favourites = value.filter((fuelstation:any)=> {return fuelstation.address != marker.address});
      this.storage.set('favourites-fuelstations',this.favourites).then(()=>{
          this.events.publish('app:toast','Se ha eliminado la gasolinera de los favoritos!');
      })
    })
  }

  getFavourites(){
    return new Promise((resolve)=>{
      this.storage.get('favourites-fuelstations').then((value)=>{
          resolve(value);
      })
    })
  }

}
