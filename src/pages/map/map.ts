import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,PopoverController } from 'ionic-angular';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, Marker} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation";
import {PopoverPage} from "../popover/popover";
import {FuelstationModel} from "../../models/fuelstation-model";
import {MapServiceProvider} from "../../providers/map-service/map-service";
import { PreferencesServiceProvider } from '../../providers/preferences-service/preferences-service';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers:[GoogleMaps,Geolocation]
})
export class MapPage  {

  public map:GoogleMap;
  public watch:any;
  public myTarget: Marker;
  public fuelStations:FuelstationModel[];
  public markers: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public googleMaps:GoogleMaps,
              private platform:Platform,private geolocation:Geolocation,private popoverController:PopoverController,
              public mapService:MapServiceProvider,private preferenceService:PreferencesServiceProvider) {

  }

  ionViewDidLoad() {
    this.platform.ready().then(()=>{
      this.map = this.googleMaps.create('map',{controls: {
          'compass': true,
          'indoorPicker': true,
          'zoom': true
        }});
      this.map.one(GoogleMapsEvent.MAP_READY).then((data:any)=>{
        //Centrar el mapa dependiendo de nuestra localización
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((pos)=>{
           let miPosicion = new LatLng(pos.coords.latitude,pos.coords.longitude);
           this.map.animateCamera({target:miPosicion,zoom:17});
         });

         

        this.watch = this.geolocation.watchPosition({ enableHighAccuracy: true });
        this.watch.subscribe((data)=>{
          let miPosicion = new LatLng(data.coords.latitude,data.coords.longitude);
          console.log("Entro en subscribe")
          if (this.myTarget != null){
            this.myTarget.remove();
            this.map.addMarker({icon:'assets/imgs/customMarker.jpg',position:miPosicion}).then((marker)=>{this.myTarget=marker});
          } else {
            this.map.addMarker({icon:'assets/imgs/customMarker.jpg',position:miPosicion}).then((marker)=>{this.myTarget=marker});
          }
        })
      }).catch((err)=>{
        console.log("Error -> " + err);
      })
    }).catch((err)=>{
      console.log("Error ->" + err);
    })
  }

  /*ionViewDidLeave(){
      console.log("Me salgo")
      this.watch.unsubscribe();
  }*/

  ionViewWillLeave(){
    this.watch.unsubscribe();
  }
  presentPopover(myEvent) {
    let popover = this.popoverController.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  centerCamera(){
    //Centrar el mapa dependiendo de nuestra localización
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((pos)=>{
      let miPosicion = new LatLng(pos.coords.latitude,pos.coords.longitude);
      this.map.animateCamera({target:miPosicion,zoom:17});
    })
  }

  addFuelStationsToMap(){
    console.log(this.markers);
    this.preferenceService.getPreferences().then((value:any)=>{
      this.mapService.getFuelStation(value.value).then((data:any)=>{
        data.forEach((marker)=>{
          let latitud = (marker['Latitud']).replace(',','.');
          let longitud = (marker['Longitud (WGS84)']).replace(',','.');
          let location = new LatLng(parseFloat(latitud),parseFloat(longitud));
          console.log(location);
          this.map.addMarker({icon:'assets/imgs/customMarker.jpg',position:location});
        })
      });
    });
    /*this.mapService.getFuelStation().then((data:any)=>{
      data.forEach((marker)=>{
        let miPosicion = new LatLng(marker['Latitud'],marker['Longitud (WGS84)']);
        this.markers.push({position:miPosicion});
      })
    });*/

  }
}
