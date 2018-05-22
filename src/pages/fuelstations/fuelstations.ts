import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Marker } from '@ionic-native/google-maps';


/**
 * Generated class for the FuelstationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fuelstations',
  templateUrl: 'fuelstations.html',
})
export class FuelstationsPage {

  public markers:Marker[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.markers = navParams.get('markersAux');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuelstationsPage');
    console.log(this.markers);
  }

}
