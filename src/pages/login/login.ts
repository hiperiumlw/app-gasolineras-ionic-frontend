import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators,FormBuilder,FormGroup} from "@angular/forms";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
    this.loginForm = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  createForm():FormGroup{
    return this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    console.log(this.loginForm.value);
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
