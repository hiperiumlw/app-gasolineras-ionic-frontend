webpackJsonp([10],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavouritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouritesPage');
    };
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\favourites\favourites.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Favoritos App v1.0\n    </ion-title>\n\n    <ion-buttons end>\n      <!--<button ion-button icon-only (click)="openModal()">-->\n        <!--<ion-icon name="refresh"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelstationdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FuelstationdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FuelstationdetailsPage = /** @class */ (function () {
    function FuelstationdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.marker = navParams.get('marker');
    }
    FuelstationdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuelstationdetailsPage');
    };
    FuelstationdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fuelstationdetails',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstationdetails\fuelstationdetails.html"*/'<!--\n  Generated template for the FuelstationdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>fuelstationdetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n\n        <!--<img src="img/advance-card-map-madison.png">-->\n        <page-fuelstationmap [marker]="marker"></page-fuelstationmap>\n        <!--<ion-fab right top>\n          <button ion-fab>\n            <ion-icon name="pin"></ion-icon>\n          </button>\n        </ion-fab>\n      \n        <ion-item>\n          <ion-icon name="football" item-start large></ion-icon>\n          <h2>Museum of Football</h2>\n          <p>11 N. Way St, Madison, WI 53703</p>\n        </ion-item>\n      \n        <ion-item>\n          <ion-icon name="wine" item-left large ></ion-icon>\n          <h2>Institute of Fine Cocktails</h2>\n          <p>14 S. Hop Avenue, Madison, WI 53703</p>\n        </ion-item>\n      \n        <ion-item>\n          <span item-left>18 min</span>\n          <span item-left>(2.6 mi)</span>\n          <button ion-button icon-left clear item-end>\n            <ion-icon name="navigate"></ion-icon>\n            Start\n          </button>\n        </ion-item>-->\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstationdetails\fuelstationdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FuelstationdetailsPage);
    return FuelstationdetailsPage;
}());

//# sourceMappingURL=fuelstationdetails.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdminpanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminpanelPage = /** @class */ (function () {
    function AdminpanelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminpanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminpanelPage');
    };
    AdminpanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminpanel',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\adminpanel\adminpanel.html"*/'<!--\n  Generated template for the AdminpanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>adminpanel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\adminpanel\adminpanel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminpanelPage);
    return AdminpanelPage;
}());

//# sourceMappingURL=adminpanel.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelstationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuelstationdetails_fuelstationdetails__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FuelstationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FuelstationsPage = /** @class */ (function () {
    function FuelstationsPage(navCtrl, navParams, spherical, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.spherical = spherical;
        this.launchNavigator = launchNavigator;
        this.prueba = "Prueba";
        this.markers = navParams.get('markersAux');
        this.myLocation = navParams.get('myLocation');
    }
    FuelstationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.markers.forEach(function (marker) {
            return marker.distance = _this.calculateDistance(marker.position) + "km";
        });
    };
    FuelstationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuelstationsPage');
        console.log(this.markers);
    };
    FuelstationsPage.prototype.calculateDistance = function (position) {
        var distance = this.spherical.computeDistanceBetween(this.myLocation.latLng, position);
        return Math.ceil(distance / 1000);
    };
    FuelstationsPage.prototype.goToDetails = function (marker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fuelstationdetails_fuelstationdetails__["a" /* FuelstationdetailsPage */], { marker: marker });
    };
    FuelstationsPage.prototype.openGoogleMaps = function (position, name) {
        var departure = this.myLocation.latLng.lat + "," + this.myLocation.latLng.lng;
        var options = {
            start: departure,
            destinationName: name
        };
        console.log(name);
        console.log(options);
        var destination = position.lat + "," + position.lng;
        this.launchNavigator.navigate(destination, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    FuelstationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fuelstations',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstations\fuelstations.html"*/'<!--\n  Generated template for the FuelstationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>FuelStations App v1.0</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let marker of markers">\n  \n    <ion-item>\n      <ion-icon name="pin" item-start large color="danger"></ion-icon>\n      <h2>{{marker.name}}</h2>\n      <p>{{marker.schedule}}</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>{{marker.distance}}</span>\n      <span item-left>{{marker.price}}€/L</span>\n      <button ion-button icon-left outline item-end (click)="goToDetails(marker)">\n        <ion-icon name="information-circle"></ion-icon>\n        Detalles\n      </button>\n      <button ion-button icon-left outline item-end (click)="openGoogleMaps(marker.position,marker.name)">\n        <ion-icon name="navigate"></ion-icon>\n        Llévame\n      </button>\n    </ion-item>\n  \n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstations\fuelstations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["d" /* Spherical */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["d" /* Spherical */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], FuelstationsPage);
    return FuelstationsPage;
}());

//# sourceMappingURL=fuelstations.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, authService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.events = events;
        this.loginForm = this.createForm();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.createForm = function () {
        return this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.value)
            .then(function (data) {
            _this.loginCorrectly(data);
        })
            .catch(function () {
            console.log("Ha habido algun error -> AuthService");
        });
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.authService.facebookLogin().subscribe(function (connected) {
            if (connected) {
                _this.authService.getFacebookProfile().subscribe(function (profile) {
                    _this.events.publish('app:loginFacebook', profile);
                }, function (error) { console.log(error); });
            }
        }, function (error) { console.log(error); });
    };
    LoginPage.prototype.loginCorrectly = function (data) {
        this.events.publish('app:login', data.user);
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Login App v1.0\n    </ion-title>\n\n    <ion-buttons end>\n      <!--<button ion-button icon-only (click)="openModal()">-->\n      <!--<ion-icon name="refresh"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content text-center>\n  <img src="assets/imgs/mobilendo.png" width="270px">\n  <hr>\n  <ion-title>\n    Iniciar Sesión\n  </ion-title>\n  <form padding [formGroup]="loginForm" (ngSubmit)="login()">\n    <ion-item padding-left padding-right>\n      <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input type="mail" formControlName="email" placeholder="Correo Electrónico" ></ion-input>\n    </ion-item>\n    <ion-item padding-left padding-right>\n      <ion-label><ion-icon name="unlock"></ion-icon></ion-label>\n      <ion-input type="password" formControlName="password" placeholder="Contraseña" ></ion-input>\n    </ion-item>\n    <ion-item class="rememberme" padding-left padding-right>\n      <ion-label>Recordarme</ion-label>\n      <ion-checkbox color="danger" checked="true"></ion-checkbox>\n    </ion-item>\n    <button class="submitBoton" ion-button block type="submit" [disabled]="!loginForm.valid">Iniciar Sesión</button>\n  </form>\n  <span>¿No tiene una cuenta? <a href="#" (click)="goToRegister()">Registrarse</a></span><br>\n  <button margin-top ion-button color="dark" outline icon-end (click)="facebookLogin()" >Facebook <ion-icon name="logo-facebook"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, authService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.events = events;
        this.registerForm = this.createForm();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.createForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            reppassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.registerForm.value)
            .then(function (data) {
            _this.registerCorrectly(data);
        })
            .catch(function () {
            console.log("Ha habido algun error -> AuthService");
        });
    };
    RegisterPage.prototype.registerCorrectly = function (data) {
        this.events.publish('app:toast', data.message);
        this.navCtrl.pop();
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar color="danger">\n\n\n    <ion-title>\n      Registrarse App v1.0\n    </ion-title>\n\n    <ion-buttons end>\n      <!--<button ion-button icon-only (click)="openModal()">-->\n      <!--<ion-icon name="refresh"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content text-center>\n  <img src="assets/imgs/mobilendo.png" width="270px">\n  <hr>\n  <ion-title>\n    Registrarse\n  </ion-title>\n  <form padding [formGroup]="registerForm" (ngSubmit)="register()">\n    <ion-item padding-left padding-right>\n      <ion-label><ion-icon name="person"></ion-icon></ion-label>\n      <ion-input type="text" formControlName="name" placeholder="Nombre Completo"></ion-input>\n    </ion-item>\n    <ion-item padding-left padding-right>\n      <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input type="mail" formControlName="email" placeholder="Correo Electrónico"></ion-input>\n    </ion-item>\n    <ion-item padding-left padding-right>\n      <ion-label><ion-icon name="unlock"></ion-icon></ion-label>\n      <ion-input type="password" formControlName="password" placeholder="Contraseña"></ion-input>\n    </ion-item>\n    <ion-item padding-left padding-right>\n      <ion-label><ion-icon name="unlock"></ion-icon></ion-label>\n      <ion-input type="password" formControlName="reppassword" placeholder="Repite la contraseña"></ion-input>\n    </ion-item>\n    <button class="submitBoton" ion-button block type="submit" [disabled]="!registerForm.valid">Registrarse</button>\n  </form>\n  <span>¿Tiene una cuenta ya registrada? <a href="#" (click)="goBack()">Iniciar Sesión</a></span><br>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_map_service_map_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_preferences_service_preferences_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fuelstations_fuelstations__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, googleMaps, platform, geolocation, popoverController, mapService, preferenceService, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.geolocation = geolocation;
        this.popoverController = popoverController;
        this.mapService = mapService;
        this.preferenceService = preferenceService;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.firstLoad = true;
    }
    MapPage.prototype.ionViewDidEnter = function () {
        (!this.firstLoad) ? this.map.setDiv('map') : this.firstLoad = false;
    };
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.map = _this.googleMaps.create('map', {
                controls: {
                    'compass': true,
                    'indoorPicker': true,
                    'zoom': true
                }
            });
            _this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function (data) {
                //Centrar el mapa dependiendo de nuestra localización
                _this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (pos) {
                    var miPosicion = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](pos.coords.latitude, pos.coords.longitude);
                    _this.map.animateCamera({ target: miPosicion, zoom: 17 });
                });
                _this.watch = _this.geolocation.watchPosition({ enableHighAccuracy: true });
                _this.watch.subscribe(function (data) {
                    var miPosicion = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](data.coords.latitude, data.coords.longitude);
                    console.log("Entro en subscribe");
                    if (_this.myTarget != null) {
                        _this.myTarget.remove();
                        _this.map.addMarker({ icon: 'assets/imgs/customMarker.jpg', position: miPosicion }).then(function (marker) { _this.myTarget = marker; });
                    }
                    else {
                        _this.map.addMarker({ icon: 'assets/imgs/customMarker.jpg', position: miPosicion }).then(function (marker) { _this.myTarget = marker; });
                    }
                });
            }).catch(function (err) {
                console.log("Error -> " + err);
            });
        }).catch(function (err) {
            console.log("Error ->" + err);
        });
    };
    MapPage.prototype.ionViewWillLeave = function () {
        if (this.watch) {
            console.log("Existe this.watch");
            this.watch.unsubscribe();
        }
        this.map.setDiv(null);
    };
    MapPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverController.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    MapPage.prototype.centerCamera = function () {
        var _this = this;
        //Centrar el mapa dependiendo de nuestra localización
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (pos) {
            var miPosicion = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](pos.coords.latitude, pos.coords.longitude);
            _this.map.animateCamera({ target: miPosicion, zoom: 17 });
        });
    };
    MapPage.prototype.addFuelStationsToMap = function () {
        var _this = this;
        this.events.publish('app:showLoading', 'Por favor , espere mientras carga...');
        this.preferenceService.getPreferences().then(function (value) {
            _this.mapService.getFuelStation(value.value).then(function (data) {
                _this.events.publish('app:hideLoading');
                _this.markers = data;
                _this.markerCluster = _this.map.addMarkerClusterSync({
                    markers: data,
                    icons: [
                        {
                            min: 3, max: 9,
                            url: "assets/imgs/markerCluster/m1.png",
                            label: { color: "white" }
                        },
                        {
                            min: 10, max: 100,
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
                _this.markerCluster.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (params) {
                    var marker = params[1];
                    marker.setTitle(marker.get("name") + " " + marker.get('price') + "€");
                    marker.setSnippet(marker.get("schedule"));
                    marker.showInfoWindow();
                    marker.addListenerOnce(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].INFO_CLICK).then(function () {
                        console.log(_this.map.getVisibleRegion());
                    });
                });
            });
        });
    };
    MapPage.prototype.showVisibleFuelStations = function () {
        var _this = this;
        var markersAux = [];
        this.markers.forEach(function (marker) {
            (_this.map.getVisibleRegion().contains(marker.position)) && markersAux.push(marker);
        });
        (markersAux.length === 0) ? this.showToast("No hay gasolineras visibles en esta zona del mapa...") :
            (markersAux.length > 100) ? this.showToast('Hay demasiados elementos visibles en esta zona...') : this.goToFuelStationsPage(markersAux);
    };
    MapPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    MapPage.prototype.goToFuelStationsPage = function (markersAux) {
        var _this = this;
        this.map.getMyLocation({ enableHighAccuracy: true }).then(function (value) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__fuelstations_fuelstations__["a" /* FuelstationsPage */], { markersAux: markersAux, myLocation: value });
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\map\map.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Mapa App v1.0\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addFuelStationsToMap()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="showVisibleFuelStations()">\n        <ion-icon name="expand"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div id="map"></div>\n  <ion-fab bottom right top><button color="light" ion-fab (click)="centerCamera()"><ion-icon ios="ios-locate-outline" md="md-locate"></ion-icon></button></ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\map\map.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_map_service_map_service__["a" /* MapServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.close = function () {
        this.viewController.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\popover\popover.html"*/'<ion-list radio-group class="popover-page">\n  <ion-row class="row-dots">\n    <ion-col>\n      <button ion-button="dot" class="dot-white"></button>\n    </ion-col>\n    <ion-col>\n      <button ion-button="dot"  class="dot-tan"></button>\n    </ion-col>\n    <ion-col>\n      <button ion-button="dot"  class="dot-grey" ></button>\n    </ion-col>\n    <ion-col>\n      <button ion-button="dot"  class="dot-black" ></button>\n    </ion-col>\n  </ion-row>\n</ion-list>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preferences_service_preferences_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferencesPage = /** @class */ (function () {
    function PreferencesPage(navCtrl, navParams, preferenceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.preferenceService = preferenceService;
    }
    PreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencesPage');
    };
    PreferencesPage.prototype.ionViewWillEnter = function () {
        this.preferenceService.checkPreferences();
    };
    PreferencesPage.prototype.savePreferences = function () {
        this.preferenceService.savePreferences(this.type);
    };
    PreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preferences',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\preferences\preferences.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Preferencias App v1.0\n    </ion-title>\n\n    <ion-buttons end>\n      <!--<button ion-button icon-only (click)="openModal()">-->\n        <!--<ion-icon name="refresh"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-label>Tipo de Combustible : </ion-label>\n  <ion-item padding-left padding-right>\n    <ion-label>Combustible</ion-label>\n    <ion-select [(ngModel)]="type">\n      <ion-option *ngFor="let fuelstation of preferenceService.fuelPreferences" value="{{fuelstation.id}}" [selected]="fuelstation.selected">{{fuelstation.title}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <button ion-button margin-top color="danger" outline block (click)="savePreferences()">Guardar</button>\n  {{type}}\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\preferences\preferences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adminpanel/adminpanel.module": [
		301,
		9
	],
	"../pages/favourites/favourites.module": [
		299,
		8
	],
	"../pages/fuelstationdetails/fuelstationdetails.module": [
		300,
		7
	],
	"../pages/fuelstationmap/fuelstationmap.module": [
		308,
		6
	],
	"../pages/fuelstations/fuelstations.module": [
		302,
		5
	],
	"../pages/login/login.module": [
		303,
		4
	],
	"../pages/map/map.module": [
		304,
		3
	],
	"../pages/popover/popover.module": [
		305,
		2
	],
	"../pages/preferences/preferences.module": [
		306,
		1
	],
	"../pages/register/register.module": [
		307,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MapServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MapServiceProvider = /** @class */ (function () {
    function MapServiceProvider(http) {
        this.http = http;
        console.log('Hello MapServiceProvider Provider');
    }
    MapServiceProvider.prototype.getFuelStation = function (value) {
        var _this = this;
        return new Promise(function (resolve) {
            value = encodeURI(value);
            _this.http.get('https://192.168.1.95:3000/api/fuelstation/' + value + '')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    MapServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MapServiceProvider);
    return MapServiceProvider;
}());

//# sourceMappingURL=map-service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelstationmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FuelstationmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FuelstationmapPage = /** @class */ (function () {
    function FuelstationmapPage(navCtrl, navParams, googleMaps, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.platform = platform;
    }
    FuelstationmapPage.prototype.ngOnInit = function () {
        console.log('ionViewDidLoad FuelstationmapPage');
        console.log(this.marker);
    };
    FuelstationmapPage.prototype.ngAfterViewChecked = function () {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FuelstationmapPage.prototype, "marker", void 0);
    FuelstationmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fuelstationmap',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstationmap\fuelstationmap.html"*/'<!--\n  Generated template for the FuelstationmapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>fuelstationmap</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstationmap\fuelstationmap.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], FuelstationmapPage);
    return FuelstationmapPage;
}());

//# sourceMappingURL=fuelstationmap.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_popover_popover__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_map_service_map_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_preferences_service_preferences_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adminpanel_adminpanel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authentication_service_authentication_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_fuelstations_fuelstations__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_fuelstationdetails_fuelstationdetails__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_fuelstationmap_fuelstationmap__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Components

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fuelstations_fuelstations__["a" /* FuelstationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_fuelstationdetails_fuelstationdetails__["a" /* FuelstationdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_fuelstationmap_fuelstationmap__["a" /* FuelstationmapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favourites/favourites.module#FavouritesPageModule', name: 'FavouritesPage', segment: 'favourites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fuelstationdetails/fuelstationdetails.module#FuelstationdetailsPageModule', name: 'FuelstationdetailsPage', segment: 'fuelstationdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminpanel/adminpanel.module#AdminpanelPageModule', name: 'AdminpanelPage', segment: 'adminpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fuelstations/fuelstations.module#FuelstationsPageModule', name: 'FuelstationsPage', segment: 'fuelstations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fuelstationmap/fuelstationmap.module#FuelstationmapPageModule', name: 'FuelstationmapPage', segment: 'fuelstationmap', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__["a" /* PreferencesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fuelstations_fuelstations__["a" /* FuelstationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_fuelstationdetails_fuelstationdetails__["a" /* FuelstationdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_fuelstationmap_fuelstationmap__["a" /* FuelstationmapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_map_service_map_service__["a" /* MapServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URIS; });
var URIS = /** @class */ (function () {
    function URIS(host) {
        this.host = host;
        this.LOGIN = host + "/users/login";
        //this.FACEBOOK_LOGIN = host+"/users/facebook/login";
        this.REGISTER = host + "/users/register";
        this.API_FUELSTATION = host + "/api/fuelstation";
    }
    return URIS;
}());

//# sourceMappingURL=uris-model.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelPreferencesModel; });
var FuelPreferencesModel = /** @class */ (function () {
    function FuelPreferencesModel(id, title, value, selected) {
        this.id = id;
        this.title = title;
        this.value = value;
        this.selected = selected;
    }
    return FuelPreferencesModel;
}());

//# sourceMappingURL=preferences-model.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelPreferences; });
var FuelPreferences = [
    { id: 1, title: "Gasoleo A", value: "Precio Gasoleo A", selected: false },
    { id: 2, title: "Gasoleo B", value: "Precio Gasoleo B", selected: true },
];
//# sourceMappingURL=mock-preferences.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_preferences_preferences__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_preferences_service_preferences_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_adminpanel_adminpanel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, preferenceService, events, toastCtrl, authService, loadingCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.preferenceService = preferenceService;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */];
        this.initializeApp();
        this.initializeEvents();
        this.pages = [
            { title: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */], icon: 'map' },
            { title: 'Favoritos', component: __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__["a" /* FavouritesPage */], icon: 'star' },
            { title: 'Preferencias', component: __WEBPACK_IMPORTED_MODULE_7__pages_preferences_preferences__["a" /* PreferencesPage */], icon: 'settings' },
        ];
        this.login = { title: 'Iniciar Sesión', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'person' };
        this.logout = { title: 'Cerrar Sesión', icon: 'log-out' };
        this.adminpanel = { title: 'Admin Panel', component: __WEBPACK_IMPORTED_MODULE_9__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */], icon: 'open' };
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.preferenceService.defaultPreferences();
            _this.checkIfUserIsLogged();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initializeEvents = function () {
        var _this = this;
        this.events.subscribe('app:toast', function (message) {
            _this.showToast(message);
        });
        this.events.subscribe('app:login', function (user) {
            _this.handleLogin(user);
        });
        this.events.subscribe('app:loginFacebook', function (user) {
            _this.handleLogin(user);
        });
        this.events.subscribe('app:showLoading', function (message) {
            _this.showLoading(message);
        });
        this.events.subscribe('app:hideLoading', function () {
            _this.hideLoading();
        });
    };
    MyApp.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    MyApp.prototype.handleLogin = function (user) {
        this.user = user;
        this.authService.saveUserLocally(user);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */]);
    };
    MyApp.prototype.showLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    MyApp.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    MyApp.prototype.logoutUser = function () {
        this.user = null;
        this.authService.removeUserLocally();
        this.authService.checkFacebook();
    };
    MyApp.prototype.checkIfUserIsLogged = function () {
        var _this = this;
        this.authService.checkIfUserisLogged().then(function (value) {
            if (value) {
                _this.user = value;
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title>Gasolineras Baratas</ion-title>\n      <div *ngIf="user" class="welcomeUser">Bienvenido , {{user.name}}</div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="lista-menu" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon"></ion-icon> {{p.title}}\n      </button>\n      <button *ngIf="!user" class="lista-menu" menuClose ion-item (click)="openPage(login)">\n        <ion-icon [name]="login.icon"></ion-icon> {{login.title}}\n      </button>\n      <button *ngIf="user" class="lista-menu" menuClose ion-item (click)="logoutUser()">\n        <ion-icon [name]="logout.icon"></ion-icon> {{logout.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_uris_model__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationServiceProvider = /** @class */ (function () {
    function AuthenticationServiceProvider(http, events, storage, facebook) {
        this.http = http;
        this.events = events;
        this.storage = storage;
        this.facebook = facebook;
        console.log('Hello AuthenticationServiceProvider Provider');
        this.URIS = new __WEBPACK_IMPORTED_MODULE_4__models_uris_model__["a" /* URIS */]('https://192.168.1.95:3000');
    }
    AuthenticationServiceProvider.prototype.register = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application-json');
        return new Promise(function (resolve) {
            _this.http.post(_this.URIS.REGISTER, data)
                .subscribe(function (data) { resolve(data); }, function (error) {
                _this.events.publish('app:toast', error.error.message);
            });
        });
    };
    AuthenticationServiceProvider.prototype.login = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application-json');
        return new Promise(function (resolve) {
            _this.http.post(_this.URIS.LOGIN, data)
                .subscribe(function (data) {
                _this.events.publish('app:showLoading', 'Iniciando Sesión...');
                resolve(data);
            }, function (error) {
                _this.events.publish('app:toast', error.error.message);
            });
        });
    };
    AuthenticationServiceProvider.prototype.facebookLogin = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_observable__["Observable"].create(function (observer) {
            _this.facebook.login(['public_profile', 'user_friends', 'email'])
                .then(function (response) {
                console.log(response);
                if (response.status === 'connected') {
                    observer.next(true);
                    observer.complete();
                }
                observer.next(false);
                observer.complete();
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    AuthenticationServiceProvider.prototype.getFacebookProfile = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_observable__["Observable"].create(function (observer) {
            _this.facebook.api('/me?fields=name,picture,email', ['public_profile'])
                .then(function (response) {
                console.log(response);
                observer.next(response);
                observer.complete();
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    AuthenticationServiceProvider.prototype.checkFacebook = function () {
        var _this = this;
        this.facebook.getLoginStatus().then(function (response) {
            if (response.status === 'connected') {
                console.log("Entro en logout");
                _this.facebook.logout();
            }
        });
    };
    AuthenticationServiceProvider.prototype.saveUserLocally = function (user) {
        var _this = this;
        this.storage.set('user-logged', user).then(function () {
            _this.events.publish('app:hideLoading');
        });
    };
    AuthenticationServiceProvider.prototype.removeUserLocally = function () {
        this.storage.remove('user-logged');
    };
    AuthenticationServiceProvider.prototype.checkIfUserisLogged = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('user-logged').then(function (value) {
                resolve(value);
            });
        });
    };
    AuthenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_preferences_model__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mock_preferences__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PreferencesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PreferencesServiceProvider = /** @class */ (function () {
    function PreferencesServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.fuelPreferences = __WEBPACK_IMPORTED_MODULE_3__models_mock_preferences__["a" /* FuelPreferences */];
        console.log('Hello PreferencesServiceProvider Provider');
    }
    PreferencesServiceProvider.prototype.defaultPreferences = function () {
        var _this = this;
        this.storage.get('fuelpreference').then(function (value) {
            if (!value) {
                _this.storage.set('fuelpreference', new __WEBPACK_IMPORTED_MODULE_2__models_preferences_model__["a" /* FuelPreferencesModel */](2, "Gasoleo B", "Precio Gasoleo A", true));
            }
        });
    };
    PreferencesServiceProvider.prototype.getPreferences = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('fuelpreference').then(function (value) {
                console.log(value);
                resolve(value);
            });
        });
    };
    PreferencesServiceProvider.prototype.checkPreferences = function () {
        var _this = this;
        this.storage.get('fuelpreference').then(function (value) {
            if (value) {
                _this.fuelPreferences.forEach(function (fuelstation) {
                    if (fuelstation.id == value.id)
                        fuelstation.selected = true;
                    else
                        fuelstation.selected = false;
                });
            }
            else {
                console.log("No hay en local");
            }
        });
    };
    PreferencesServiceProvider.prototype.savePreferences = function (type) {
        var _this = this;
        this.fuelPreferences.forEach(function (fuelstation) {
            if (fuelstation.id == type) {
                _this.storage.set('fuelpreference', fuelstation);
            }
        });
    };
    PreferencesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], PreferencesServiceProvider);
    return PreferencesServiceProvider;
}());

//# sourceMappingURL=preferences-service.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map