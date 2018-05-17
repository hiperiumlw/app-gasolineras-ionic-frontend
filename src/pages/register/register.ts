import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Validators,FormBuilder,FormGroup } from "@angular/forms";
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public registerForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder
    ,private authService:AuthenticationServiceProvider,private events:Events) {
    this.registerForm = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  createForm():FormGroup{
    return this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      reppassword:['',Validators.required]
    })
  }

  register(){
      this.authService.register(this.registerForm.value)
        .then((data)=>{
          console.log("Usuario registrado -> "+ data);
          this.registerCorrectly();
        })
        .catch(()=>{
          console.log("Ha habido algun error -> AuthService");
        })
      
  }

  registerCorrectly(){
      this.events.publish('app:toast',{message:'Se ha registrado correctamente'});
      this.navCtrl.pop();
  }

  goBack(){
    this.navCtrl.pop();
  }

}
