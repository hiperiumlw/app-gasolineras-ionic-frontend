import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { URIS } from '../../models/uris-model';
/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  private URIS:URIS;

  constructor(public http: HttpClient,private events:Events) {
    console.log('Hello AuthenticationServiceProvider Provider');
    this.URIS = new URIS('http://192.168.1.45:3000');
  }

  register(data:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application-json');
    return new Promise((resolve)=>{
      this.http.post(this.URIS.REGISTER,data)
        .map((res:any)=>{ res = res.json()})
        .subscribe(
          (data:any)=>{ resolve(data) },
          (error)=>{ this.events.publish('app:toast',JSON.parse(error.body).message)}
        );
    })
  }

}
