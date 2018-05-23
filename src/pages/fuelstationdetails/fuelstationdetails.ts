import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FuelstationdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fuelstationdetails',
  templateUrl: 'fuelstationdetails.html',
})
export class FuelstationdetailsPage {

  public marker:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.marker = navParams.get('marker');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuelstationdetailsPage');
  }

}
