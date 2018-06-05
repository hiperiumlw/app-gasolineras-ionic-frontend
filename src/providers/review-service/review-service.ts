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
    this.URIS = new URIS('https://192.168.1.99:3000');
  }

  addReview(data: any) {
    console.log(data);
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

  getReviewsByFuelStation(value: any) {
    return new Promise(resolve => {
      value = encodeURIComponent(value);
      this.http.get(this.URIS.GET_REVIEWS_BY_FUELSTATION + value + '')
        .subscribe((data) => {
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  getReviewsByUser(value: any) {
    return new Promise((resolve) => {
      value = encodeURIComponent(value);
      this.http.get(this.URIS.GET_REVIEWS_BY_USER + value)
        .subscribe((data)=>{
          resolve(data);
        },(error)=>{
          console.log(error);
        })
        
    })
  }

  getPendingReviews() {
    return new Promise(resolve => {
      this.http.get(this.URIS.GET_PENDING_REVIEWS)
        .subscribe((data) => {
          //this.pendingReviews = data;
          resolve(data);
        }, (err) => {
          console.log(err);
        })
    })
  }

  validateAll(data: any) {
    return new Promise(resolve => {
      this.http.post(this.URIS.VALIDATE_ALL_REVIEWS, data)
        .subscribe((data: any) => {
          this.events.publish('app:toast', data.message);
          //this.pendingReviews = [];
          resolve();
        }, (err) => {
          console.log(err);
        })
    })
  }
}
