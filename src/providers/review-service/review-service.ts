import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URIS } from '../../models/uris-model';
import { Events } from 'ionic-angular';
/*
  Generated class for the ReviewServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewServiceProvider {

  private URIS: URIS;

  constructor(public http: HttpClient, private events: Events) {
    console.log('Hello ReviewServiceProvider Provider');
    this.URIS = new URIS('https://192.168.0.102:3000');
  }

  addReview(data: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application-json');
    return new Promise((resolve) => {
      this.http.post(this.URIS.ADD_REVIEW, data)
        .subscribe(
          (data: any) => { resolve(data) },
          (error) => {
            this.events.publish('app:toast', error.error.message
            )
          }
        );
    })
  }

  getReviews(value: any) {
    return new Promise(resolve => {
      value = encodeURIComponent(value);
      this.http.get(this.URIS.GET_REVIEWS + value + '')
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }


}
