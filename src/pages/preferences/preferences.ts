import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreferencesServiceProvider } from '../../providers/preferences-service/preferences-service';
/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {

  public type:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public preferenceService:PreferencesServiceProvider) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
  }

  ionViewWillEnter(){
    this.preferenceService.checkPreferences();
  }

  savePreferences(){
    this.preferenceService.savePreferences(this.type);
  }
}
