import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/operator/map";

/*
  Generated class for the MapServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MapServiceProvider Provider');
  }

  getFuelStation(value) {
    return new Promise(resolve => {
      value = encodeURI(value);
      this.http.get('https://192.168.2.4:3000/api/fuelstation/' + value + '')
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

}
