import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { FavouritesServiceProvider } from '../../providers/favourites-service/favourites-service';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';
import { Geolocation } from "@ionic-native/geolocation";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  providers:[LaunchNavigator,Geolocation]
})
export class FavouritesPage {

  favourites: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public favouritesServices: FavouritesServiceProvider,
    private authenticationService: AuthenticationServiceProvider, private events: Events, private alertCtrl: AlertController,
    private geolocation: Geolocation, private launchNavigator:LaunchNavigator) {

  }

  ionViewWillEnter() {
    this.favouritesServices.getFavourites().then((value) => {
      console.log(value);
      (value) ? this.favourites = value : this.favourites = [];
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  deleteFavourite(fuelstation: any) {
    this.favouritesServices.deleteFromLocal(fuelstation);
    this.favourites = this.favourites.filter((fuelstationAux: any) => { return fuelstation.address != fuelstationAux.address });
  }

  deleteAll() {
    this.favouritesServices.deleteAll().then(() => {
      this.favourites = [];
    })
  }

  synchronize() {
    this.events.publish('app:showLoading', 'Se están sincronizando los datos , espere por favor...');
    this.authenticationService.checkIfUserisLogged().then((user: any) => {
      if (user) {
        let favouritesAux = this.favourites.filter((fuelstation: any) => {
          return fuelstation.userEmail = user.email;
        })
        this.favouritesServices.saveFavouriteToServer(favouritesAux).then((data: any) => {
          this.events.publish('app:hideLoading');
          this.events.publish('app:toast', data.message);
        })
      } else {
        this.showLoginAlert();
      }
    })
  }

  showLoginAlert() {
    this.events.publish('app:hideLoading');
    const confirm = this.alertCtrl.create({
      title: '¡Vaya, no ha iniciado sesión!',
      message: '¿Desea iniciar sesión para sincronizar los datos con su cuenta?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Iniciar Sesión',
          handler: () => {
            console.log('Agree clicked');
            this.events.publish('app:showLoginPage');
          }
        }
      ],
      cssClass: 'alertCustomClass'
    });
    confirm.present();
  }

  openGoogleMaps(positionDestination: any, name: string) {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((positionDeparture) => {
      let departure: string = positionDeparture.coords.latitude + "," + positionDeparture.coords.longitude;
      let options: LaunchNavigatorOptions = {
        start: departure,
        destinationName: name
      };
      console.log(name);
      console.log(options);
      let destination: string = positionDestination.lat + "," + positionDestination.lng;
      this.launchNavigator.navigate(destination, options)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    })

  }
}
