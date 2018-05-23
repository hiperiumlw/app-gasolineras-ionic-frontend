import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';

//Components
import { MyApp } from './app.component';
import { MapPage } from "../pages/map/map";
import { FavouritesPage } from "../pages/favourites/favourites";
import { PopoverPage } from "../pages/popover/popover";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { PreferencesPage } from "../pages/preferences/preferences";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapServiceProvider } from '../providers/map-service/map-service';
import { PreferencesServiceProvider } from '../providers/preferences-service/preferences-service';
import { AdminpanelPage } from '../pages/adminpanel/adminpanel';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { Facebook } from '@ionic-native/facebook';
import { FuelstationsPage } from '../pages/fuelstations/fuelstations';
import { FuelstationdetailsPage } from '../pages/fuelstationdetails/fuelstationdetails';
import { FuelstationmapPage } from '../pages/fuelstationmap/fuelstationmap';


@NgModule({
  declarations: [
    MyApp,
    MapPage,
    FavouritesPage,
    PopoverPage,
    LoginPage,
    RegisterPage,
    PreferencesPage,
    AdminpanelPage,
    FuelstationsPage,
    FuelstationdetailsPage,
    FuelstationmapPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    FavouritesPage,
    PopoverPage,
    LoginPage,
    RegisterPage,
    PreferencesPage,
    AdminpanelPage,
    FuelstationsPage,
    FuelstationdetailsPage,
    FuelstationmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MapServiceProvider,
    PreferencesServiceProvider,
    AuthenticationServiceProvider,
    Facebook
  ]
})
export class AppModule {}
