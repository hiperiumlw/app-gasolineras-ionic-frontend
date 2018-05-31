webpackJsonp([11],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_review_service_review_service__ = __webpack_require__(50);
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
 * Generated class for the AddreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddreviewPage = /** @class */ (function () {
    function AddreviewPage(navCtrl, navParams, viewCtrl, reviewService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.reviewService = reviewService;
        this.events = events;
        this.address = navParams.get('address');
    }
    AddreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddreviewPage');
    };
    AddreviewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddreviewPage.prototype.addReview = function () {
        var _this = this;
        this.reviewService.addReview({ Comentario: this.comment, Puntuacion: this.score, DireccionGasolinera: this.address })
            .then(function (data) {
            _this.addedReviewCorrectly(data);
        })
            .catch(function () {
            console.log("Ha habido algun error -> ReviewSErvice");
        });
    };
    AddreviewPage.prototype.addedReviewCorrectly = function (data) {
        this.events.publish('app:toast', data.message);
        this.viewCtrl.dismiss();
    };
    AddreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addreview',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\addreview\addreview.html"*/'<!--\n  Generated template for the AddreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="danger">\n    <ion-title>\n      Add Review App v1.0\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding="">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Comentario</ion-label>\n      <ion-textarea name="description" [(ngModel)]="comment"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-item>\n    <ion-range min="1" max="5" [(ngModel)]="score">\n      <ion-icon small range-left name="star"></ion-icon>\n      <ion-icon range-right name="star"></ion-icon>\n    </ion-range>\n  </ion-item>\n  <button ion-button color="danger" outline block (click)="addReview()">Añadir Review</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\addreview\addreview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_review_service_review_service__["a" /* ReviewServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AddreviewPage);
    return AddreviewPage;
}());

//# sourceMappingURL=addreview.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_review_service_review_service__ = __webpack_require__(50);
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
    function AdminpanelPage(navCtrl, navParams, reviewService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reviewService = reviewService;
        this.events = events;
        this.pendingReviews = [];
    }
    AdminpanelPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.publish('app:showLoading', 'Por favor , espere mientras carga...');
        this.reviewService.getPendingReviews().then(function (data) {
            _this.pendingReviews = data;
            console.log(data);
            _this.events.publish('app:hideLoading');
        });
    };
    AdminpanelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminpanelPage');
    };
    AdminpanelPage.prototype.validateAll = function () {
        var _this = this;
        this.reviewService.validateAll(this.pendingReviews).then(function () {
            _this.pendingReviews = [];
        });
    };
    AdminpanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminpanel',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\adminpanel\adminpanel.html"*/'<!--\n  Generated template for the AdminpanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      AdminPanel App v1.0\n    </ion-title>\n\n    <ion-buttons end *ngIf="(pendingReviews).length > 0">\n      <button ion-button icon-only (click)="validateAll()">\n        <ion-icon name="checkbox-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-item padding text-center *ngIf="(pendingReviews).length === 0"><p>No tiene ningúna review pendiente por validar!</p></ion-item>\n    <ion-list *ngIf="(pendingReviews).length > 0">\n        <ion-list-header>Reviews</ion-list-header>\n        <ion-item *ngFor="let review of pendingReviews">\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/logo.png">\n          </ion-avatar>\n          <div style="display: inline-flex">\n            <ion-icon name="star" *ngFor="let p of \' \'.repeat(review.Puntuacion).split(\'\')"></ion-icon>\n          </div>\n          <p>{{review.Comentario}}</p>\n          <ion-note item-end>3:43 pm</ion-note>\n        </ion-item>\n      </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\adminpanel\adminpanel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_review_service_review_service__["a" /* ReviewServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AdminpanelPage);
    return AdminpanelPage;
}());

//# sourceMappingURL=adminpanel.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favourites_service_favourites_service__ = __webpack_require__(87);
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
    function FavouritesPage(navCtrl, navParams, favouritesServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favouritesServices = favouritesServices;
    }
    FavouritesPage.prototype.ionViewWillEnter = function () {
        this.favouritesServices.getFavourites().then(function (value) {
            console.log(value);
        });
    };
    FavouritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouritesPage');
    };
    FavouritesPage.prototype.deleteFavourite = function (fuelstation) {
        this.favouritesServices.deleteFromLocal(fuelstation);
    };
    FavouritesPage.prototype.deleteAll = function () {
        this.favouritesServices.deleteAll();
    };
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\favourites\favourites.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Favoritos App v1.0\n    </ion-title>\n\n    <ion-buttons end *ngIf="(favouritesServices.favourites).length > 0">\n      <button ion-button icon-only (click)="deleteAll()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item padding text-center *ngIf="(favouritesServices.favourites).length === 0"><p>No tiene ningúna gasolinera en favoritos!</p></ion-item>\n  <ion-card *ngFor="let fuelstation of favouritesServices.favourites">\n    <ion-item>\n      <ion-icon name="pin" item-start large color="danger"></ion-icon>\n      <h2>{{fuelstation.name}}</h2>\n      <p>{{fuelstation.schedule}}</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>{{fuelstation.distance}}</span>\n      <span item-left>{{fuelstation.price}}€/L</span>\n      <button ion-button icon-left outline item-end color="details" (click)="deleteFavourite(fuelstation)">\n        <ion-icon name="trash"></ion-icon>\n        Eliminar\n      </button>\n      <button ion-button icon-left outline item-end (click)="openGoogleMaps(fuelstation.position,fuelstation.name)">\n        <ion-icon name="navigate"></ion-icon>\n        Llévame\n      </button>\n    </ion-item>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_favourites_service_favourites_service__["a" /* FavouritesServiceProvider */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelstationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuelstationdetails_fuelstationdetails__ = __webpack_require__(56);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fuelstationdetails_fuelstationdetails__["a" /* FuelstationdetailsPage */], { marker: marker, myLocation: this.myLocation });
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
            selector: 'page-fuelstations',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstations\fuelstations.html"*/'<!--\n  Generated template for the FuelstationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>FuelStations App v1.0</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let marker of markers">\n  \n    <ion-item>\n      <ion-icon name="pin" item-start large color="danger"></ion-icon>\n      <h2>{{marker.name}}</h2>\n      <p>{{marker.schedule}}</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>{{marker.distance}}</span>\n      <span item-left>{{marker.price}}€/L</span>\n      <button ion-button icon-left outline item-end color="details" (click)="goToDetails(marker)">\n        <ion-icon name="information-circle"></ion-icon>\n        Detalles\n      </button>\n      <button ion-button icon-left outline item-end (click)="openGoogleMaps(marker.position,marker.name)">\n        <ion-icon name="navigate"></ion-icon>\n        Llévame\n      </button>\n    </ion-item>\n  \n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstations\fuelstations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* Spherical */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* Spherical */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], FuelstationsPage);
    return FuelstationsPage;
}());

//# sourceMappingURL=fuelstations.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__ = __webpack_require__(44);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(44);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_map_service_map_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_preferences_service_preferences_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fuelstations_fuelstations__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fuelstationdetails_fuelstationdetails__ = __webpack_require__(56);
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
                /*this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((pos) => {
                  let miPosicion = new LatLng(pos.coords.latitude, pos.coords.longitude);
                  this.map.animateCamera({ target: miPosicion, zoom: 17 });
                });
        
                this.watch = this.geolocation.watchPosition({ enableHighAccuracy: true })
                .subscribe((data) => {
                  console.log(data);
                  let miPosicion = new LatLng(data.coords.latitude, data.coords.longitude);
                  console.log("Entro en subscribe")
                  if (this.myTarget != null) {
                    this.myTarget.remove();
                    this.map.addMarker({ icon: 'assets/imgs/customMarker.jpg', position: miPosicion }).then((marker) => { this.myTarget = marker });
                  } else {
                    this.map.addMarker({ icon: 'assets/imgs/customMarker.jpg', position: miPosicion }).then((marker) => { this.myTarget = marker });
                  }
                })*/
            }).catch(function (err) {
                console.log("Error -> " + err);
            });
        }).catch(function (err) {
            console.log("Error ->" + err);
        });
    };
    MapPage.prototype.ionViewWillLeave = function () {
        if (this.watch) {
            console.log("Exists this.watch");
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
        //Centrar el mapa dependiendo de nuestra localización
        /*this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((pos) => {
          let miPosicion = new LatLng(pos.coords.latitude, pos.coords.longitude);
          this.map.animateCamera({ target: miPosicion, zoom: 17 });
        })*/
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
                    marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].INFO_CLICK).subscribe(function () {
                        var markerAux = {
                            position: marker.get("position"),
                            name: marker.get("name"),
                            schedule: marker.get("schedule"),
                            price: marker.get("price"),
                            address: marker.get("address")
                        };
                        _this.map.getMyLocation({ enableHighAccuracy: true }).then(function (value) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__fuelstationdetails_fuelstationdetails__["a" /* FuelstationdetailsPage */], { marker: markerAux, myLocation: value });
                        });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_map_service_map_service__["a" /* MapServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preferences_service_preferences_service__ = __webpack_require__(43);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = "puppies";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="danger">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n\n    <ion-buttons end>\n      <!--<button ion-button icon-only (click)="openModal()">-->\n      <!--<ion-icon name="refresh"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-row class="profile-header" justify-content-center>\n    <ion-col>\n      <ion-avatar>\n        <img src="assets/imgs/logo.png">\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="puppies">\n      Puppies\n    </ion-segment-button>\n    <ion-segment-button value="kittens">\n      Kittens\n    </ion-segment-button>\n    <ion-segment-button value="ducklings">\n      Ducklings\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-2.jpg">\n        </ion-thumbnail>\n        <h2>Oscar</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-4.jpg">\n        </ion-thumbnail>\n        <h2>Zoey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-3.jpg">\n        </ion-thumbnail>\n        <h2>Otto</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-3.jpg">\n        </ion-thumbnail>\n        <h2>Milo</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-4.jpg">\n        </ion-thumbnail>\n        <h2>Bandit</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-2.jpg">\n        </ion-thumbnail>\n        <h2>Nala</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'ducklings\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-1.jpg">\n        </ion-thumbnail>\n        <h2>Daffy</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-2.jpg">\n        </ion-thumbnail>\n        <h2>Huey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-3.jpg">\n        </ion-thumbnail>\n        <h2>Dewey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-4.jpg">\n        </ion-thumbnail>\n        <h2>Louie</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 132:
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
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addreview/addreview.module": [
		302,
		10
	],
	"../pages/adminpanel/adminpanel.module": [
		303,
		9
	],
	"../pages/favourites/favourites.module": [
		304,
		8
	],
	"../pages/fuelstationdetails/fuelstationdetails.module": [
		306,
		7
	],
	"../pages/fuelstations/fuelstations.module": [
		305,
		6
	],
	"../pages/login/login.module": [
		307,
		5
	],
	"../pages/map/map.module": [
		308,
		4
	],
	"../pages/popover/popover.module": [
		309,
		3
	],
	"../pages/preferences/preferences.module": [
		310,
		2
	],
	"../pages/profile/profile.module": [
		311,
		1
	],
	"../pages/register/register.module": [
		312,
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
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
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
        this.ADD_REVIEW = host + "/api/reviews/add";
        this.GET_REVIEWS = host + "/api/reviews/";
        this.GET_PENDING_REVIEWS = host + "/api/reviews/pending";
        this.VALIDATE_ALL_REVIEWS = host + "/api/reviews/validate";
    }
    return URIS;
}());

//# sourceMappingURL=uris-model.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__(71);
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
            _this.http.get('https://192.168.0.103:3000/api/fuelstation/' + value + '')
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

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_popover_popover__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_preferences_preferences__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_map_service_map_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_preferences_service_preferences_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adminpanel_adminpanel__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_authentication_service_authentication_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_fuelstations_fuelstations__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_fuelstationdetails_fuelstationdetails__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_addreview_addreview__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_review_service_review_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_favourites_service_favourites_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__ = __webpack_require__(120);
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
                __WEBPACK_IMPORTED_MODULE_21__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addreview/addreview.module#AddreviewPageModule', name: 'AddreviewPage', segment: 'addreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminpanel/adminpanel.module#AdminpanelPageModule', name: 'AdminpanelPage', segment: 'adminpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourites/favourites.module#FavouritesPageModule', name: 'FavouritesPage', segment: 'favourites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fuelstations/fuelstations.module#FuelstationsPageModule', name: 'FuelstationsPage', segment: 'fuelstations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fuelstationdetails/fuelstationdetails.module#FuelstationdetailsPageModule', name: 'FuelstationdetailsPage', segment: 'fuelstationdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preferences/preferences.module#PreferencesPageModule', name: 'PreferencesPage', segment: 'preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_21__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_map_service_map_service__["a" /* MapServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_22__providers_review_service_review_service__["a" /* ReviewServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_favourites_service_favourites_service__["a" /* FavouritesServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelPreferences; });
var FuelPreferences = [
    { id: 1, title: "Gasoleo A", value: "Precio Gasoleo A", selected: false },
    { id: 2, title: "Gasoleo B", value: "Precio Gasoleo B", selected: true },
];
//# sourceMappingURL=mock-preferences.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_preferences_preferences__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_preferences_service_preferences_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_adminpanel_adminpanel__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(120);
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
        this.adminpanel = { title: 'Admin Panel', component: __WEBPACK_IMPORTED_MODULE_9__pages_adminpanel_adminpanel__["a" /* AdminpanelPage */], icon: 'open' },
            this.profile = { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */], icon: 'person' };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title *ngIf="!user">Gasolineras Baratas</ion-title>\n      <ion-item *ngIf="user" color="danger">\n          <ion-avatar item-start>\n            <img src="assets/imgs/logo.png">\n          </ion-avatar>\n          <h2>{{user.name}}</h2>\n          <p>{{user.email}}</p>\n        </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="lista-menu" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon"></ion-icon> {{p.title}}\n      </button>\n      <button *ngIf="!user" class="lista-menu" menuClose ion-item (click)="openPage(login)">\n        <ion-icon [name]="login.icon"></ion-icon> {{login.title}}\n      </button>\n      <button *ngIf="user && user.isAdmin" class="lista-menu" menuClose ion-item (click)="openPage(adminpanel)">\n        <ion-icon [name]="adminpanel.icon"></ion-icon> {{adminpanel.title}}\n      </button>\n      <button *ngIf="user" class="lista-menu" menuClose ion-item (click)="openPage(profile)">\n        <ion-icon [name]="profile.icon"></ion-icon> {{profile.title}}\n      </button>\n      <button *ngIf="user" class="lista-menu" menuClose ion-item (click)="logoutUser()">\n        <ion-icon [name]="logout.icon"></ion-icon> {{logout.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_preferences_model__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mock_preferences__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
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

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_uris_model__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(178);
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
        this.URIS = new __WEBPACK_IMPORTED_MODULE_4__models_uris_model__["a" /* URIS */]('https://192.168.0.103:3000');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_uris_model__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
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
  Generated class for the ReviewServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReviewServiceProvider = /** @class */ (function () {
    function ReviewServiceProvider(http, events) {
        this.http = http;
        this.events = events;
        console.log('Hello ReviewServiceProvider Provider');
        this.URIS = new __WEBPACK_IMPORTED_MODULE_2__models_uris_model__["a" /* URIS */]('https://192.168.0.103:3000');
    }
    ReviewServiceProvider.prototype.addReview = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application-json');
        return new Promise(function (resolve) {
            _this.http.post(_this.URIS.ADD_REVIEW, data)
                .subscribe(function (data) { resolve(data); }, function (error) {
                _this.events.publish('app:toast', error.error.message);
            });
        });
    };
    ReviewServiceProvider.prototype.getReviews = function (value) {
        var _this = this;
        return new Promise(function (resolve) {
            value = encodeURIComponent(value);
            _this.http.get(_this.URIS.GET_REVIEWS + value + '')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ReviewServiceProvider.prototype.getPendingReviews = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.URIS.GET_PENDING_REVIEWS)
                .subscribe(function (data) {
                //this.pendingReviews = data;
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ReviewServiceProvider.prototype.validateAll = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.URIS.VALIDATE_ALL_REVIEWS, data)
                .subscribe(function (data) {
                _this.events.publish('app:toast', data.message);
                //this.pendingReviews = [];
                resolve();
            }, function (err) {
                console.log(err);
            });
        });
    };
    ReviewServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], ReviewServiceProvider);
    return ReviewServiceProvider;
}());

//# sourceMappingURL=review-service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelstationdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_preferences_service_preferences_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_addreview_addreview__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_review_service_review_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authentication_service_authentication_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_favourites_service_favourites_service__ = __webpack_require__(87);
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
    function FuelstationdetailsPage(navCtrl, navParams, platform, preferenceService, modalCtrl, reviewService, authService, events, launchNavigator, favouritesServices, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.preferenceService = preferenceService;
        this.modalCtrl = modalCtrl;
        this.reviewService = reviewService;
        this.authService = authService;
        this.events = events;
        this.launchNavigator = launchNavigator;
        this.favouritesServices = favouritesServices;
        this.alerCtrl = alerCtrl;
        this.preference = {};
        this.anyReviews = true;
        this.marker = navParams.get('marker');
        this.myLocation = navParams.get('myLocation');
        this.mapStaticUri = "https://maps.googleapis.com/maps/api/staticmap?center=" + this.marker.position.lat + "," + this.marker.position.lng + "&zoom=18&format=png32&size=640x440&scale=2&maptype=roadmap&markers=" + this.marker.position.lat + "," + this.marker.position.lng + "&key=AIzaSyAIP-OlRlF_iX-fRfSvutjhlgLI9Ylr92g";
        console.log(this.mapStaticUri);
    }
    FuelstationdetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.preferenceService.getPreferences().then(function (value) {
            _this.preference = value;
            console.log(_this.preference);
        });
        this.reviewService.getReviews(this.marker.address).then(function (data) {
            (data.length === 0) ? _this.anyReviews = false : _this.reviews = data;
        });
    };
    FuelstationdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuelstationdetailsPage');
        this.platform.ready().then(function () {
            /*this.map = GoogleMaps.create('map_canvas', {
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
            })*/
        });
    };
    FuelstationdetailsPage.prototype.openAddReviewModal = function () {
        var _this = this;
        this.authService.checkIfUserisLogged().then(function (value) {
            (value) ? _this.createModal() : _this.showErrorToast();
        });
    };
    FuelstationdetailsPage.prototype.createModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_addreview_addreview__["a" /* AddreviewPage */], { address: this.marker.address });
        modal.present();
    };
    FuelstationdetailsPage.prototype.showErrorToast = function () {
        this.events.publish('app:toast', 'Tiene que iniciar sesión para poder crear una review...');
    };
    FuelstationdetailsPage.prototype.openGoogleMaps = function () {
        var departure = this.myLocation.latLng.lat + "," + this.myLocation.latLng.lng;
        var options = {
            start: departure,
            destinationName: name
        };
        console.log(name);
        console.log(options);
        var destination = this.marker.position.lat + "," + this.marker.position.lng;
        this.launchNavigator.navigate(destination, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    FuelstationdetailsPage.prototype.saveToFavourites = function () {
        var _this = this;
        this.favouritesServices.checkIfAlreadyInFavourites(this.marker).then(function (value) {
            (value) ? _this.deleteFromFavourites() : _this.favouritesServices.saveFavouriteLocally(_this.marker);
        });
    };
    FuelstationdetailsPage.prototype.deleteFromFavourites = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Desea borrar la gasolinera de Favoritos?',
            message: 'La gasolinera seleccionada ya esta en favoritos...',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('El usuario ha cancelado el borrado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.favouritesServices.deleteFromLocal(_this.marker);
                    }
                }
            ]
        });
        confirm.present();
    };
    FuelstationdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fuelstationdetails',template:/*ion-inline-start:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstationdetails\fuelstationdetails.html"*/'<!--\n  Generated template for the FuelstationdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>FuelStationDetails App v1.0</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openGoogleMaps()">\n        <ion-icon name="navigate"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="saveToFavourites()">\n        <ion-icon name="star"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <div id="map_canvas"></div>\n    <img src="{{mapStaticUri}}"/>\n    <ion-item>\n      <ion-icon name="pin" item-start large color="danger"></ion-icon>\n      <h2>{{marker.name}}</h2>\n      <p>{{marker.schedule}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="information-circle" item-left large color="danger"></ion-icon>\n      <h2 *ngIf="preference">{{preference.title}}</h2>\n      <p>Llenando tu depósito en esta gasolinera ahorras 7,20€ con respecto a la gasolinera más cara visible en el mapa.\n      </p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>{{marker.distance}}</span>\n      <span item-left>{{marker.price}}€/L</span>\n      <button ion-button icon-left clear item-end (click)="openAddReviewModal()">\n        <ion-icon name="happy"></ion-icon>\n        Añadir Review\n      </button>\n    </ion-item>\n\n    <ion-card-content *ngIf="!anyReviews">\n      <span>No hay ningúna review para esta gasolinera!</span>\n    </ion-card-content>\n\n    <ion-list *ngIf="anyReviews">\n      <ion-list-header>Reviews</ion-list-header>\n      <ion-item *ngFor="let review of reviews">\n        <ion-avatar item-start>\n          <img src="assets/imgs/logo.png">\n        </ion-avatar>\n        <div style="display: inline-flex">\n          <ion-icon name="star" *ngFor="let p of \' \'.repeat(review.Puntuacion).split(\'\')"></ion-icon>\n        </div>\n        <p>{{review.Comentario}}</p>\n        <ion-note item-end>3:43 pm</ion-note>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Usuario\Documents\Bootcamp\Curso-Ionic3\AppGasolineras\src\pages\fuelstationdetails\fuelstationdetails.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__["a" /* LaunchNavigator */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_preferences_service_preferences_service__["a" /* PreferencesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_review_service_review_service__["a" /* ReviewServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_8__providers_favourites_service_favourites_service__["a" /* FavouritesServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FuelstationdetailsPage);
    return FuelstationdetailsPage;
}());

//# sourceMappingURL=fuelstationdetails.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
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
  Generated class for the FavouritesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavouritesServiceProvider = /** @class */ (function () {
    function FavouritesServiceProvider(http, storage, events) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.favourites = [];
        console.log('Hello FavouritesServiceProvider Provider');
    }
    FavouritesServiceProvider.prototype.checkIfAlreadyInFavourites = function (marker) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('favourites-fuelstations').then(function (value) {
                var exists = false;
                if (value) {
                    value.forEach(function (fuelstation) {
                        if (fuelstation.address === marker.address)
                            exists = true;
                    });
                }
                resolve(exists);
            });
        });
    };
    FavouritesServiceProvider.prototype.saveFavouriteLocally = function (marker) {
        var _this = this;
        this.storage.get('favourites-fuelstations').then(function (value) {
            (value) ? _this.favourites = value : _this.favourites = [];
            _this.favourites.push(marker);
            _this.storage.set('favourites-fuelstations', _this.favourites).then(function () {
                _this.events.publish('app:toast', 'Se ha añadido la gasolinera a favoritos correctamente!');
            });
        });
    };
    FavouritesServiceProvider.prototype.deleteFromLocal = function (marker) {
        var _this = this;
        this.storage.get('favourites-fuelstations').then(function (value) {
            _this.favourites = value.filter(function (fuelstation) { return fuelstation.address != marker.address; });
            _this.storage.set('favourites-fuelstations', _this.favourites).then(function () {
                _this.events.publish('app:toast', 'Se ha eliminado la gasolinera de los favoritos!');
            });
        });
    };
    FavouritesServiceProvider.prototype.getFavourites = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('favourites-fuelstations').then(function (value) {
                _this.favourites = value;
                resolve(value);
            });
        });
    };
    FavouritesServiceProvider.prototype.deleteAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.remove('favourites-fuelstations').then(function () {
                _this.events.publish('app:toast', 'Se han eliminado todos los favoritos!');
                _this.favourites = [];
                resolve();
            });
        });
    };
    FavouritesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], FavouritesServiceProvider);
    return FavouritesServiceProvider;
}());

//# sourceMappingURL=favourites-service.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map