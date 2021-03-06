import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapPage } from "../pages/map/map";
import { FavouritesPage } from "../pages/favourites/favourites";
import { LoginPage } from "../pages/login/login";
import { PreferencesPage } from "../pages/preferences/preferences";
import { PreferencesServiceProvider } from '../providers/preferences-service/preferences-service';
import { AdminpanelPage } from "../pages/adminpanel/adminpanel";
import { UserModel } from '../models/user-model';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { ProfilePage } from '../pages/profile/profile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MapPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  login: any;
  logout: any;
  adminpanel: any;
  profile: any;

  user: UserModel;

  loading: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    , private preferenceService: PreferencesServiceProvider,
    private events: Events, private toastCtrl: ToastController,
    private authService: AuthenticationServiceProvider, private loadingCtrl: LoadingController) {
    this.initializeApp();
    this.initializeEvents();
    this.pages = [
      { title: 'Mapa', component: MapPage, icon: 'map' },
      { title: 'Favoritos', component: FavouritesPage, icon: 'star' },
      { title: 'Preferencias', component: PreferencesPage, icon: 'settings' },
    ];

    this.login = { title: 'Iniciar Sesión', component: LoginPage, icon: 'person' };
    this.logout = { title: 'Cerrar Sesión', icon: 'log-out' };
    this.adminpanel = { title: 'Admin Panel', component: AdminpanelPage, icon: 'open' };
    this.profile = { title: 'Profile', component: ProfilePage, icon: 'person' };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.preferenceService.defaultPreferences();
      this.checkIfUserIsLogged();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeEvents() {
    this.events.subscribe('app:toast', (message) => {
      this.showToast(message);
    });

    this.events.subscribe('app:login', (user) => {
      this.handleLogin(user);
    });

    this.events.subscribe('app:loginFacebook', (user) => {
      this.handleLogin(user);
    });

    this.events.subscribe('app:showLoading', (message) => {
      this.showLoading(message);
    });

    this.events.subscribe('app:hideLoading', () => {
      this.hideLoading();
    });

    this.events.subscribe('app:showLoginPage',()=>{
      this.openPage(this.login);
    })
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    })

    toast.present();
  }

  handleLogin(user) {
    this.user = user;
    this.authService.saveUserLocally(user);
    this.nav.setRoot(MapPage);
  }

  showLoading(message) {
    this.loading = this.loadingCtrl.create({
      content: message
    });

    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  logoutUser() {
    this.user = null;
    this.authService.removeUserLocally();
    this.authService.checkFacebook();
  }

  checkIfUserIsLogged() {
    this.authService.checkIfUserisLogged().then((value: any) => {
      if (value) {
        this.user = value;
      }
    })
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
