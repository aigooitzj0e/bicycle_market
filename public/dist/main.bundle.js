webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bike_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/bike/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listing_listing_component__ = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__["a" /* LoginRegComponent */] },
    { path: 'dashboard', pathMatch: 'prefix', component: __WEBPACK_IMPORTED_MODULE_3__bike_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: 'browse', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__browse_browse_component__["a" /* BrowseComponent */] },
            { path: 'listing', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__listing_listing_component__["a" /* ListingComponent */] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bike_bike_component__ = __webpack_require__("../../../../../src/app/bike/bike.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bike_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/bike/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__listing_listing_component__ = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__bike_bike_component__["a" /* BikeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_reg_login_reg_component__["a" /* LoginRegComponent */],
            __WEBPACK_IMPORTED_MODULE_9__bike_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_11__listing_listing_component__["a" /* ListingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bike/bike.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bike/bike.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bike works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bike/bike.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BikeComponent = (function () {
    function BikeComponent() {
    }
    BikeComponent.prototype.ngOnInit = function () {
    };
    return BikeComponent;
}());
BikeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bike',
        template: __webpack_require__("../../../../../src/app/bike/bike.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bike/bike.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BikeComponent);

//# sourceMappingURL=bike.component.js.map

/***/ }),

/***/ "../../../../../src/app/bike/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n}\n\np {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bike/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle Marketplace!</h1>\n\n<p>\n<a [routerLink]=\"['browse']\">Browse</a> |\n<a [routerLink]=\"['listing']\">My Listings</a> |\n<a (click)=\"logoff()\">Log Off</a>\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/bike/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.currentUser = {
            name: "",
            email: ""
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('onInit getCurrentUser');
        this._httpService.getCurrentUser()
            .then(function (data) {
            console.log("then");
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
            }
        });
    };
    DashboardComponent.prototype.logoff = function () {
        var _this = this;
        console.log('logoff()');
        this._httpService.logoff()
            .then((function (data) {
            if (data == true) {
                _this._router.navigate(['']);
            }
            else {
                console.log('error', data);
            }
        }));
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/bike/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bike/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 1206px;\n  margin:auto;\n}\n\nh3 {\n  text-align: center;\n}\n\n.browse {\n  border: 1px solid black;\n  width: 300px;\n  height: 500px;\n  margin: 20px;\n  padding: 30px;\n  text-align: center;\n  background-color: rgb(249, 212, 178);\n  display: inline-block;\n}\n\nimg {\n  border: 1px solid black;\n}\n\nbutton {\n  width: 200px;\n  height: 25px;\n  background-color: red;\n  border: 1px solid black;\n  border-radius: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <h3>Browse</h3>\n\n  <div *ngFor=\"let bike of allBikes\" class=\"browse\">\n    <img src=\"{{ bike.image }}\" height=\"250px\">\n    <p>Title: {{ bike.title }}</p>\n    <p>Price: ${{ bike.price }}</p>\n    <p>Location: {{ bike.location }}</p>\n    <p>Description: {{ bike.description }}</p>\n    <button (click)=\"onContact(bike._user)\" *ngIf=\"bike._user != currentUser\">Contact</button>\n    <button (click)=\"onDelete(bike._id)\" *ngIf=\"bike._user == currentUser\">Delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = (function () {
    function BrowseComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.allBikes = [];
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.getAllList();
        this.getCurrentUser();
    };
    BrowseComponent.prototype.getAllList = function () {
        var _this = this;
        console.log('Grabbing List!');
        this._httpService.getAllList()
            .then(function (data) {
            console.log('returned Data', data);
            _this.allBikes = data;
        });
    };
    BrowseComponent.prototype.onContact = function (id) {
        console.log(id);
        this._httpService.findMaker(id)
            .then(function (contact) {
            console.log("bike was created by:", contact);
            alert("Name: " + contact.first_name + " " + contact.last_name + "\nEmail: " + contact.email);
        });
    };
    BrowseComponent.prototype.getCurrentUser = function () {
        var _this = this;
        console.log('getCurrentUser()');
        this._httpService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data._id;
            console.log("currentuser", data._id);
        });
    };
    BrowseComponent.prototype.onDelete = function (bike_id) {
        var _this = this;
        console.log('hit onDelete()', bike_id);
        this._httpService.delete(bike_id)
            .then(function (data) {
            console.log(data);
            _this.getAllList();
        });
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BrowseComponent);

var _a, _b;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.register = function (user) {
        console.log('user received from onReg()', user);
        return this._http.post('/api/users', user)
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.login = function (user) {
        console.log('hit login() service', user);
        return this._http.post('/api/login', user)
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.getCurrentUser = function () {
        console.log('hit getCurrentUser() in service');
        return this._http.get('/api/users/current')
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.createBike = function (bike) {
        console.log('hit createBike service');
        return this._http.post('api/dashboard/create', bike)
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.getAllList = function () {
        console.log('hit getAllList() in service');
        return this._http.get('/api/dashboard')
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.findMaker = function (user_id) {
        console.log('hit findMaker() in service');
        return this._http.post('/api/dashboard/findMaker', { user_id: user_id })
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.displayMyBikes = function () {
        console.log('Hit displayMyBikes service');
        return this._http.get('/api/dashboard/displayMyBikes')
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.logoff = function () {
        console.log('hit logoff service!');
        return this._http.get('/api/logoff')
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.update = function (updatedBike) {
        console.log('update in service');
        return this._http.post('/api/dashboard/update', updatedBike)
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.destroy = function (bike) {
        console.log('hit destroy in service');
        return this._http.put('/api/destroy', bike)
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.delete = function (bike_id) {
        console.log('hit destroy in service');
        return this._http.put('/api/delete', { bike_id: bike_id })
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create {\n  padding: 15px;\n  border: 1px solid black;\n  width: 280px;\n  text-align: center;\n  margin:15px auto;\n}\n\ninput {\n  width: 200px;\n}\n\ntable {\n  margin: auto;\n}\n\n.listing {\n  padding: 15px;\n  border: 1px solid black;\n  width: 300px;\n  text-align: center;\n  margin:10px auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create\">\n  <h2>Create Listing</h2>\n  <form (submit)=\"createBike()\">\n    <table>\n      <tr>\n        <td><input\n          type=\"text\"\n          name=\"title\"\n          placeholder=\"Title\"\n          [(ngModel)]=\"newBike.title\"\n          #title=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td><input\n          type=\"number\"\n          name=\"price\"\n          placeholder=\"Price\"\n          [(ngModel)]=\"newBike.price\"\n          #price=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td><input\n          type=\"text\"\n          name=\"location\"\n          placeholder=\"Location\"\n          [(ngModel)]=\"newBike.location\"\n          #location=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td><textarea\n          name=\"description\"\n          cols=\"31\"\n          rows=\"8\"\n          placeholder=\"Type Description Here\"\n          [(ngModel)]=\"newBike.description\"\n          #description=\"ngModel\"\n          ></textarea></td>\n      </tr>\n      <tr>\n        <td><input\n          type=\"text\"\n          name=\"image\"\n          placeholder=\"Image URL\"\n          [(ngModel)]=\"newBike.image\"\n          #image=\"ngModel\"\n          ></td>\n      </tr>\n      <input type=\"submit\" value=\"CREATE\">\n    </table>\n  </form>\n\n\n</div>\n\n\n<div class=\"listing\"  *ngFor=\"let bike of myBikes; let idx = index\">\n  <img src=\"{{ bike.image }}\" alt=\"speedster pic\" height=\"250px\">\n  <form (submit)=\"onUpdate(idx)\">\n    <table>\n      <tr>\n        <td>Name:</td>\n        <td><input\n          type=\"text\"\n          name=\"title\"\n          [(ngModel)]=\"bike.title\"\n          #title=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td>Price:</td>\n        <td><input\n          type=\"number\"\n          name=\"price\"\n          [(ngModel)]=\"bike.price\"\n          #price=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td>Location:</td>\n        <td><input\n          type=\"text\"\n          name=\"location\"\n          [(ngModel)]=\"bike.location\"\n          #location=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td>Description:</td>\n        <td><input\n          type=\"text\"\n          name=\"description\"\n          [(ngModel)]=\"bike.description\"\n          #description=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td>Image URL:</td>\n        <td><input\n          type=\"text\"\n          name=\"image\"\n          [(ngModel)]=\"bike.image\"\n          #image=\"ngModel\"\n          ></td>\n      </tr>\n      <tr>\n        <td colspan=\"2\"><input type=\"submit\" value=\"Update!\"></td>\n      </tr>\n    </table>\n\n\n  </form>\n  <button (click)=\"onDestroy(idx)\">Delete</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingComponent = (function () {
    function ListingComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.myBikes = [];
        this.newBike = {
            title: "",
            price: "",
            location: "",
            description: "",
            image: ""
        };
        this.thisBike = {
            title: "",
            price: "",
            location: "",
            description: "",
            image: ""
        };
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.displayMyBikes();
    };
    ListingComponent.prototype.createBike = function () {
        var _this = this;
        console.log('createBike form submitted!');
        this._httpService.createBike(this.newBike)
            .then(function (data) {
            console.log("returned data from backend", data);
            if (data.errors) {
                console.log('errors!', data.errors);
            }
            else {
                console.log('Bike listing successfully created!');
                _this.displayMyBikes();
            }
        });
    };
    ListingComponent.prototype.displayMyBikes = function () {
        var _this = this;
        console.log('displaymyBikes()');
        this._httpService.displayMyBikes()
            .then(function (data) {
            console.log(data);
            _this.myBikes = data;
        });
    };
    ListingComponent.prototype.onUpdate = function (i) {
        console.log("i", i);
        console.log('onUpdate()', this.myBikes[i]);
        this._httpService.update(this.myBikes[i])
            .then(function (data) {
            console.log(data);
        });
    };
    ListingComponent.prototype.onDestroy = function (i) {
        var _this = this;
        console.log('i', i);
        this._httpService.destroy(this.myBikes[i])
            .then(function (data) {
            _this.displayMyBikes();
        });
    };
    return ListingComponent;
}());
ListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listing',
        template: __webpack_require__("../../../../../src/app/listing/listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ListingComponent);

var _a, _b;
//# sourceMappingURL=listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle Marketplace!</h1>\n<div class=\"bikeofday\">\n  <!--Insert randomly generated bike-->\n</div>\n\n<div class=\"login\">\n  <h3>Login</h3>\n  <table>\n    <form (submit)=\"onLogin()\">\n      <tr>\n        <input\n          type=\"email\"\n          name=\"logemail\"\n          placeholder=\"Email\"\n          required\n          [(ngModel)]=\"loginUser.email\"\n          #email=\"ngModel\"\n          >\n      </tr>\n      <tr>\n        <input\n          type=\"password\"\n          name=\"logpassword\"\n          placeholder=\"Password\"\n          required\n          [(ngModel)]=\"loginUser.password\"\n          #password=\"ngModel\"\n          >\n      </tr>\n      <input type=\"submit\" name=\"\" value=\"Login\">\n\n    </form>\n  </table>\n\n</div>\n\n\n\n\n<div class=\"register\">\n  <h3>Register</h3>\n  <table>\n    <form #regForm=\"ngForm\" (submit)=\"onReg()\">\n      <tr>\n        <input\n          type=\"text\"\n          name='first_name'\n          placeholder=\"First Name\"\n          required\n          [(ngModel)]=\"user.first_name\"\n          #first_name='ngModel'\n          >\n      </tr>\n      <tr>\n        <input\n          type=\"text\"\n          name=\"last_name\"\n          placeholder=\"Last Name\"\n          required\n          [(ngModel)]=\"user.last_name\"\n          #last_name='ngModel'\n          >\n      </tr>\n      <tr>\n        <input\n          type=\"email\"\n          name=\"regemail\"\n          placeholder=\"Email\"\n          required\n          [(ngModel)]=\"user.email\"\n          #email='ngModel'\n          pattern=\"^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$\"\n          >\n      </tr>\n      <tr>\n        <input\n          type=\"password\"\n          name=\"regpassword\"\n          placeholder=\"Password\"\n          required\n          minlength=8\n          [(ngModel)]=\"user.password\"\n          #regpassword='ngModel'\n          >\n      </tr>\n      <tr>\n        <input\n          type=\"password\"\n          name=\"confirm\"\n          placeholder=\"Confirm Password\"\n          required\n          minlength=8\n          [(ngModel)]=\"user.confirm\"\n          #confirm='ngModel'\n          >\n      </tr>\n      <input\n        type=\"submit\"\n        value=\"Login\"\n        [disabled]=\"!regForm.form.valid\"\n        >\n    </form>\n    <tr *ngIf=\"!email.valid && !email.pristine\">\n      <p>Email is incorrect format!</p>\n    </tr>\n    <tr *ngIf=\"user.password.length < 8 && !regpassword.pristine\">\n      <p>Password needs to be a minimum of 8 characters!</p>\n    </tr>\n    <tr *ngIf=\"user.confirm != user.password && !confirm.pristine\">\n      <p>Password does not match!</p>\n    </tr>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRegComponent = (function () {
    function LoginRegComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.user = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm: ""
        };
        this.loginUser = {
            email: '',
            password: '',
        };
    }
    LoginRegComponent.prototype.ngOnInit = function () {
    };
    LoginRegComponent.prototype.onLogin = function () {
        var _this = this;
        console.log('onLogin()');
        this._httpService.login(this.loginUser)
            .then(function (data) {
            console.log('onLogin()');
            if (data.errors) {
                console.log('returned from backend', data);
            }
            else {
                console.log('Successful Logged IN!');
                _this._router.navigate(['dashboard']);
            }
        });
    };
    LoginRegComponent.prototype.onReg = function () {
        var _this = this;
        console.log('onReg()');
        this._httpService.register(this.user)
            .then(function (data) {
            console.log('return from backend', data);
            if (data.errors) {
                console.log('Error', data.errors);
            }
            else {
                console.log('Registered Successfully');
                _this._router.navigate(['dashboard']);
            }
        });
    };
    return LoginRegComponent;
}());
LoginRegComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-reg',
        template: __webpack_require__("../../../../../src/app/login-reg/login-reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-reg/login-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginRegComponent);

var _a, _b, _c;
//# sourceMappingURL=login-reg.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map