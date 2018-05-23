import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Marker, Spherical } from '@ionic-native/google-maps';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { FuelstationdetailsPage } from '../fuelstationdetails/fuelstationdetails';

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
  providers: [Spherical,LaunchNavigator]
})
export class FuelstationsPage {

  public markers: Marker[];
  public myLocation: any;

  public prueba: string = "Prueba";
  constructor(public navCtrl: NavController, public navParams: NavParams, private spherical: Spherical
    , private launchNavigator: LaunchNavigator) {
    this.markers = navParams.get('markersAux');
    this.myLocation = navParams.get('myLocation');
  }

  ionViewWillEnter() {
    this.markers.forEach((marker: any) => {
      return marker.distance = this.calculateDistance(marker.position) + "km";
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuelstationsPage');
    console.log(this.markers);
  }

  calculateDistance(position: any) {
    let distance = this.spherical.computeDistanceBetween(this.myLocation.latLng, position);
    return Math.ceil(distance / 1000);
  }

  goToDetails(marker:any){
    this.navCtrl.push(FuelstationdetailsPage,{marker});
  }

  openGoogleMaps(position:any,name:string) {
    let departure:string = this.myLocation.latLng.lat+","+this.myLocation.latLng.lng;
    let options: LaunchNavigatorOptions = {
      start: departure,
      destinationName:name
    };
    console.log(name);
    console.log(options);
    let destination:string = position.lat+","+position.lng;
    this.launchNavigator.navigate(destination, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

}
