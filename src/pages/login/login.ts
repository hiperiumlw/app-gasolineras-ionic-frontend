import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { RegisterPage } from "../register/register";
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';

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

  private loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    private authService: AuthenticationServiceProvider, private events: Events) {
    this.loginForm = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.login(this.loginForm.value)
      .then((data) => {
        this.loginCorrectly(data);
      })
      .catch(() => {
        console.log("Ha habido algun error -> AuthService");
      })
  }

  facebookLogin() {
    this.authService.facebookLogin().subscribe((connected) => {
      if (connected) {
        this.authService.getFacebookProfile().subscribe((profile) => {
          this.events.publish('app:loginFacebook',profile);
        }, (error) => { console.log(error) });
      }
    }, (error) => { console.log(error) });
  }

  loginCorrectly(data) {
    this.events.publish('app:login', data.user);
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
