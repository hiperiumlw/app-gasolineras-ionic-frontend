import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { URIS } from '../../models/uris-model';
/*
  Generated class for the FavouritesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavouritesServiceProvider {

  public favourites: any = [];
  public URIS: URIS;
  constructor(public http: HttpClient, private storage: Storage, private events: Events) {
    console.log('Hello FavouritesServiceProvider Provider');
    this.URIS = new URIS('https://192.168.1.99:3000');
  }

  checkIfAlreadyInFavourites(marker: any) {
    return new Promise((resolve) => {
      this.storage.get('favourites-fuelstations').then((value) => {
        let exists: boolean = false;
        if (value) {
          value.forEach((fuelstation) => {
            if (fuelstation.address === marker.address) exists = true;
          })
        }
        resolve(exists);
      });
    })
  }

  saveFavouriteLocally(marker: any) {
    this.storage.get('favourites-fuelstations').then((value) => {
      (value) ? this.favourites = value : this.favourites = [];
      this.favourites.push(marker);
      this.storage.set('favourites-fuelstations', this.favourites).then(() => {
        this.events.publish('app:toast', 'Se ha añadido la gasolinera a favoritos correctamente!');
      })
    })
  };

  saveFavouriteToServer(favouritesAux: any) {
    return new Promise ((resolve)=>{
        this.http.post(this.URIS.SAVE_FAVOURITE_TO_SERVER,favouritesAux).subscribe((data)=>{
          resolve(data);
        },(error)=>{
          this.events.publish('app:toast', error.error.message);
        })
    });
  }

  deleteFromLocal(marker: any) {
    this.storage.get('favourites-fuelstations').then((value) => {
      this.favourites = value.filter((fuelstation: any) => { return fuelstation.address != marker.address });
      this.storage.set('favourites-fuelstations', this.favourites).then(() => {
        this.events.publish('app:toast', 'Se ha eliminado la gasolinera de los favoritos!');
      })
    })
  }

  getFavourites() {
    return new Promise((resolve) => {
      this.storage.get('favourites-fuelstations').then((value) => {
        resolve(value);
      })
    })
  };

  getFavouritesFromServer(){
    return new Promise((resolve)=>{
      this.http.get(this.URIS.GET_REVIEWS_BY_USER).subscribe((data)=>{
        
      },(error)=>{
        console.log(error);
      })
    });
  }

  deleteAll() {
    return new Promise((resolve) => {
      this.storage.remove('favourites-fuelstations').then(() => {
        this.events.publish('app:toast', 'Se han eliminado todos los favoritos!');
        resolve();
      })
    })
  }

}
