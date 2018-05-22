import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, PopoverController, Events,ToastController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, Marker, MarkerCluster } from "@ionic-native/google-maps";
import { Geolocation } from "@ionic-native/geolocation";
import { PopoverPage } from "../popover/popover";
import { FuelstationModel } from "../../models/fuelstation-model";
import { MapServiceProvider } from "../../providers/map-service/map-service";
import { PreferencesServiceProvider } from '../../providers/preferences-service/preferences-service';
import { FuelstationsPage } from '../fuelstations/fuelstations';

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
  providers: [GoogleMaps, Geolocation]
})
export class MapPage {

  public map: GoogleMap;
  public watch: any;
  public myTarget: Marker;
  public fuelStations: FuelstationModel[];
  public markerCluster: MarkerCluster;
  public markers:Marker[];

  public firstLoad:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps,
    private platform: Platform, private geolocation: Geolocation, private popoverController: PopoverController,
    public mapService: MapServiceProvider, private preferenceService: PreferencesServiceProvider,
    private events: Events, private toastCtrl:ToastController) {

  }

  ionViewDidEnter(){
    (!this.firstLoad) ? this.map.setDiv('map') : this.firstLoad = false;
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.map = this.googleMaps.create('map', {
        controls: {
          'compass': true,
          'indoorPicker': true,
          'zoom': true
        }
      });
      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        //Centrar el mapa dependiendo de nuestra localización
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((pos) => {
          let miPosicion = new LatLng(pos.coords.latitude, pos.coords.longitude);
          this.map.animateCamera({ target: miPosicion, zoom: 17 });
        });

        this.watch = this.geolocation.watchPosition({ enableHighAccuracy: true });
        this.watch.subscribe((data) => {
          let miPosicion = new LatLng(data.coords.latitude, data.coords.longitude);
          console.log("Entro en subscribe")
          if (this.myTarget != null) {
            this.myTarget.remove();
            this.map.addMarker({ icon: 'assets/imgs/customMarker.jpg', position: miPosicion }).then((marker) => { this.myTarget = marker });
          } else {
            this.map.addMarker({ icon: 'assets/imgs/customMarker.jpg', position: miPosicion }).then((marker) => { this.myTarget = marker });
          }
        })
      }).catch((err) => {
        console.log("Error -> " + err);
      })
    }).catch((err) => {
      console.log("Error ->" + err);
    })
  }

  ionViewWillLeave() {
    //No necesario ya que al quitar el elemento HTML se destruye el mapa.
    //this.watch.unsubscribe();

    this.map.setDiv(null);
  }
  presentPopover(myEvent) {
    let popover = this.popoverController.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  centerCamera() {
    //Centrar el mapa dependiendo de nuestra localización
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((pos) => {
      let miPosicion = new LatLng(pos.coords.latitude, pos.coords.longitude);
      this.map.animateCamera({ target: miPosicion, zoom: 17 });
    })
  }

  addFuelStationsToMap() {
    this.events.publish('app:showLoading', 'Por favor , espere mientras carga...');
    this.preferenceService.getPreferences().then((value: any) => {
      this.mapService.getFuelStation(value.value).then((data: any) => {
        this.events.publish('app:hideLoading');
        this.markers = data;
        this.markerCluster = this.map.addMarkerClusterSync({
          markers: data,
          icons: [
            {
              min: 3, max: 9,
              url: "assets/imgs/markerCluster/m1.png",
              label: { color: "white" }
            },
            {
              min: 10, max:100,
              url: "assets/imgs/markerCluster/m2.png",
              label: { color: "white" }
            },
            {
              min: 101, 
              url: "assets/imgs/markerCluster/m3.png",
              label: { color: "white" }
            }
          ]
        });
        this.markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
          let marker: Marker = params[1];
          marker.setTitle(marker.get("name")+" "+marker.get('price')+"€");
          marker.setSnippet(marker.get("schedule"));
          marker.showInfoWindow();
          marker.addListenerOnce(GoogleMapsEvent.INFO_CLICK).then(()=>{
            console.log(this.map.getVisibleRegion());
          })
        });
      });
    });
  }

  showVisibleFuelStations(){
    let markersAux:Marker[] = [];
    this.markers.forEach((marker:any)=>{
      (this.map.getVisibleRegion().contains(marker.position)) && markersAux.push(marker);
    });
    (markersAux.length === 0) ? this.showToast("No hay gasolineras visibles en esta zona del mapa...") : this.goToFuelStationsPage(markersAux);
  }

  showToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    })

    toast.present();
  }

  goToFuelStationsPage(markersAux:Marker[]){
    this.navCtrl.push(FuelstationsPage,{markersAux});
  }
}
