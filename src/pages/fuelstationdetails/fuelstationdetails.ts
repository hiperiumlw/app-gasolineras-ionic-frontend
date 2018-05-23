import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

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
  providers: [GoogleMaps]
})
export class FuelstationdetailsPage {
  public marker: any;
  public map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform
    , private googleMaps: GoogleMaps) {
    this.marker = navParams.get('marker');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuelstationdetailsPage');
    this.platform.ready().then(() => {
      this.map = this.googleMaps.create('map_canvas', {
        controls: {
          'compass': true,
          'indoorPicker': true,
          'zoom': true,
        },
        gestures:{
          rotate:false,
          tilt:false,
          scroll:false
        }
      });

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        //Centrar el mapa dependiendo de nuestra localización
        this.map.moveCamera({ target: this.marker.position, zoom: 17 }).then(()=>{
          this.map.addMarker({position:this.marker.position});
        })
      })
    })
  }
}
