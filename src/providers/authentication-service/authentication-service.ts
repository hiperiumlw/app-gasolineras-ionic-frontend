import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Events } from 'ionic-angular';
import { Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { URIS } from '../../models/uris-model';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  private URIS:URIS;

  constructor(public http: HttpClient,private events:Events,private storage:Storage) {
    console.log('Hello AuthenticationServiceProvider Provider');
    this.URIS = new URIS('http://localhost:3000');
  }

  register(data:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application-json');
    return new Promise((resolve)=>{
      this.http.post(this.URIS.REGISTER,data)
        .subscribe(
          (data:any)=>{resolve(data)},
          (error)=>{
            this.events.publish('app:toast',error.error.message
          )}
        );
    })
  }

  login(data:any){
      let headers = new HttpHeaders();
      headers.append('Content-Type','application-json');
      return new Promise((resolve)=>{
        this.http.post(this.URIS.LOGIN,data)
          .subscribe(
            (data:any)=>{
                resolve(data);
            },
            (error)=>{
                this.events.publish('app:toast',error.error.message);
            }
          )
      })
  }

  saveUserLocally(user){
    this.storage.set('user-logged',user);
  }

}
