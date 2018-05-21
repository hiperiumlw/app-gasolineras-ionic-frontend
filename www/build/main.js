webpackJsonp([7],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminpanelPage);
    return AdminpanelPage;
}());

//# sourceMappingURL=adminpanel.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_map_service_map_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_preferences_service_preferences_service__ = __webpack_require__(48);
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
    function MapPage(navCtrl, navParams, googleMaps, platform, geolocation, popoverController, mapService, preferenceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.geolocation = geolocation;
        this.popoverController = popoverController;
        this.mapService = mapService;
        this.preferenceService = preferenceService;
        this.markers = [];
    }
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
                console.log("Entro aqui Mapa Ready");
                //Centrar el mapa dependiendo de nuestra localización
                _this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (pos) {
                    console.log("Entro aqui getcurrentposition");
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
    /*ionViewDidLeave(){
        console.log("Me salgo")
        this.watch.unsubscribe();
    }*/
    MapPage.prototype.ionViewWillLeave = function () {
        this.watch.unsubscribe();
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
        this.preferenceService.getPreferences().then(function (value) {
            _this.mapService.getFuelStation(value.value).then(function (data) {
                console.log(data);
                var markerCluster = _this.map.addMarkerClusterSync({
                    markers: data,
                    icons: [
                        {
                            min: 3,
                            url: "assets/imgs/customMarker.jpg",
                            label: { color: "white" }
                        }
                    ]
                });
            });
        });
        /*this.mapService.getFuelStation().then((data:any)=>{
          data.forEach((marker)=>{
            let miPosicion = new LatLng(marker['Latitud'],marker['Longitud (WGS84)']);
            this.markers.push({position:miPosicion});
          })
        });*/
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\map\map.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Mapa App v1.0\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addFuelStationsToMap()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div id="map"></div>\n  <ion-fab bottom right top><button color="light" ion-fab (click)="centerCamera()"><ion-icon ios="ios-locate-outline" md="md-locate"></ion-icon></button></ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\map\map.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_map_service_map_service__["a" /* MapServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__ = __webpack_require__(49);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(49);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preferences_service_preferences_service__ = __webpack_require__(48);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adminpanel/adminpanel.module": [
		295,
		6
	],
	"../pages/favourites/favourites.module": [
		296,
		5
	],
	"../pages/login/login.module": [
		298,
		4
	],
	"../pages/map/map.module": [
		297,
		3
	],
	"../pages/popover/popover.module": [
		299,
		2
	],
	"../pages/preferences/preferences.module": [
		300,
		1
	],
	"../pages/register/register.module": [
		301,
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
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
            _this.http.get('https://192.168.1.105:3000/api/fuelstation/' + value + '')
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_popover_popover__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_map_service_map_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_preferences_service_preferences_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adminpanel_adminpanel__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authentication_service_authentication_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(170);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adminpanel/adminpanel.module#AdminpanelPageModule', name: 'AdminpanelPage', segment: 'adminpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourites/favourites.module#FavouritesPageModule', name: 'FavouritesPage', segment: 'favourites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_16__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */]
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

/***/ 270:
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

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelPreferences; });
var FuelPreferences = [
    { id: 1, title: "Gasoleo A", value: "Precio Gasoleo A", selected: false },
    { id: 2, title: "Gasoleo B", value: "Precio Gasoleo B", selected: true },
];
//# sourceMappingURL=mock-preferences.js.map

/***/ }),

/***/ 276:
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_preferences_preferences__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_preferences_service_preferences_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_adminpanel_adminpanel__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__ = __webpack_require__(49);
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
    function MyApp(platform, statusBar, splashScreen, preferenceService, events, toastCtrl, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.preferenceService = preferenceService;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title>Gasolineras Baratas</ion-title>\n      <div *ngIf="user" class="welcomeUser">Bienvenido , {{user.name}}</div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="lista-menu" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon"></ion-icon> {{p.title}}\n      </button>\n      <button *ngIf="!user" class="lista-menu" menuClose ion-item (click)="openPage(login)">\n        <ion-icon [name]="login.icon"></ion-icon> {{login.title}}\n      </button>\n      <button *ngIf="user" class="lista-menu" menuClose ion-item (click)="logoutUser()">\n        <ion-icon [name]="logout.icon"></ion-icon> {{logout.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_preferences_model__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mock_preferences__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(85);
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
                _this.storage.set('fuelpreference', new __WEBPACK_IMPORTED_MODULE_2__models_preferences_model__["a" /* FuelPreferencesModel */](2, "Gasoleo B", "Precio Gasoleo B", true));
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

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_uris_model__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(170);
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
        this.URIS = new __WEBPACK_IMPORTED_MODULE_4__models_uris_model__["a" /* URIS */]('https://192.168.1.105:3000');
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
        this.storage.set('user-logged', user);
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

/***/ })

},[212]);
//# sourceMappingURL=main.js.map