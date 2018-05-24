import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController,Events,AlertController  } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';
import { PreferencesServiceProvider } from '../../providers/preferences-service/preferences-service';
import { AddreviewPage } from '../../pages/addreview/addreview';
import { ReviewServiceProvider } from '../../providers/review-service/review-service';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { FavouritesServiceProvider } from '../../providers/favourites-service/favourites-service';
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
  providers: [GoogleMaps,LaunchNavigator]
})
export class FuelstationdetailsPage {
  public marker: any;
  public map: GoogleMap;
  public preference: any = {};
  public reviews: any;
  public anyReviews: boolean = true;
  public myLocation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform
    , private googleMaps: GoogleMaps, private preferenceService: PreferencesServiceProvider,
    public modalCtrl: ModalController, private reviewService: ReviewServiceProvider,
    private authService:AuthenticationServiceProvider, private events: Events,private launchNavigator: LaunchNavigator
    ,private favouritesServices:FavouritesServiceProvider,public alerCtrl: AlertController) {
    this.marker = navParams.get('marker');
    this.myLocation = navParams.get('myLocation');
    console.log(this.marker);
  }

  ionViewWillEnter() {
    this.preferenceService.getPreferences().then((value) => {
      this.preference = value;
      console.log(this.preference);
    });

    this.reviewService.getReviews(this.marker.address).then((data: any) => {
      (data.length === 0) ? this.anyReviews = false : this.reviews = data;
    });
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
        gestures: {
          rotate: false,
          tilt: false,
          scroll: false
        }
      });

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        //Centrar el mapa dependiendo de nuestra localización
        this.map.moveCamera({ target: this.marker.position, zoom: 17 }).then(() => {
          this.map.addMarker({ position: this.marker.position });
        })
      })
    })
  }

  openAddReviewModal() {
    this.authService.checkIfUserisLogged().then((value)=>{
      (value) ? this.createModal() : this.showErrorToast();
    })
  }

  createModal(){
    let modal = this.modalCtrl.create(AddreviewPage, { address: this.marker.address });
    modal.present();
  }

  showErrorToast(){
    this.events.publish('app:toast','Tiene que iniciar sesión para poder crear una review...');
  }

  openGoogleMaps(){
    let departure:string = this.myLocation.latLng.lat+","+this.myLocation.latLng.lng;
    let options: LaunchNavigatorOptions = {
      start: departure,
      destinationName:name
    };
    console.log(name);
    console.log(options);
    let destination:string = this.marker.position.lat+","+this.marker.position.lng;
    this.launchNavigator.navigate(destination, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  saveToFavourites(){
    this.favouritesServices.checkIfAlreadyInFavourites(this.marker).then((value)=>{
      (value) ? this.deleteFromFavourites() : this.favouritesServices.saveFavouriteLocally(this.marker);
    })
  }

  deleteFromFavourites(){
    let confirm = this.alerCtrl.create({
      title: 'Desea borrar la gasolinera de Favoritos?',
      message: 'La gasolinera seleccionada ya esta en favoritos...',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('El usuario ha cancelado el borrado');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Agree clicked');
            this.favouritesServices.deleteFromLocal(this.marker);
          }
        }
      ]
    });
    confirm.present()
  }
}
