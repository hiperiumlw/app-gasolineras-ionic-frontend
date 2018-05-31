import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { URIS } from '../../models/uris-model';
import { Storage } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  private URIS: URIS;

  constructor(public http: HttpClient, private events: Events, private storage: Storage, private facebook: Facebook) {
    console.log('Hello AuthenticationServiceProvider Provider');
    this.URIS = new URIS('https://192.168.0.103:3000');
  }

  register(data: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application-json');
    return new Promise((resolve) => {
      this.http.post(this.URIS.REGISTER, data)
        .subscribe(
          (data: any) => { resolve(data) },
          (error) => {
            this.events.publish('app:toast', error.error.message
            )
          }
        );
    })
  }

  login(data: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application-json');
    return new Promise((resolve) => {
      this.http.post(this.URIS.LOGIN, data)
        .subscribe(
          (data: any) => {
            this.events.publish('app:showLoading','Iniciando Sesión...');
            resolve(data);
          },
          (error) => {
            this.events.publish('app:toast', error.error.message);
          }
        )
    })
  }

  facebookLogin() {
    return Observable.create((observer) => {
      this.facebook.login(['public_profile', 'user_friends', 'email'])
        .then((response) => {
          console.log(response);
          if (response.status === 'connected') {
            observer.next(true);
            observer.complete();
          }
          observer.next(false);
          observer.complete();
        })
        .catch((error) => {
          console.log(error);
        });
    })
  }

  getFacebookProfile() {
    return Observable.create((observer) => {
      this.facebook.api('/me?fields=name,picture,email',['public_profile'])
        .then((response) => {
          console.log(response);
          observer.next(response);
          observer.complete();
        })
        .catch((error)=>{
          console.log(error);
        })
    })
  }

  checkFacebook(){
    this.facebook.getLoginStatus().then((response)=>{
      if (response.status === 'connected'){
        console.log("Entro en logout")
        this.facebook.logout();
      }
    })
  }

  saveUserLocally(user) {
    this.storage.set('user-logged', user).then(()=>{
      this.events.publish('app:hideLoading');
    })
  }

  removeUserLocally() {
    this.storage.remove('user-logged');
  }

  checkIfUserisLogged(){
    return new Promise((resolve)=>{
      this.storage.get('user-logged').then((value)=>{
        resolve(value);
      })
    })
  }

}
