import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { GoogleMaps,GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

/**
 * Generated class for the FuelstationmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fuelstationmap',
  templateUrl: 'fuelstationmap.html',
  providers: [GoogleMaps]
})
export class FuelstationmapPage {

  @Input() marker:any;

  public map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps
  , private platform:Platform) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad FuelstationmapPage');
    console.log(this.marker);
  }

  ngAfterViewChecked(){
    console.log("Entro");
      /*this.map = this.googleMaps.create('map', {
        controls: {
          'compass': true,
          'indoorPicker': true,
          'zoom': true
        }
      });
      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {   
        this.map.moveCamera({target:this.marker.position,zoom:17});
      })*/
    
  }
}
