webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

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

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_history_history_component__ = __webpack_require__("../../../../../src/app/components/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_api_api_component__ = __webpack_require__("../../../../../src/app/components/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_search_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/search-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















const appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_10__components_history_history_component__["a" /* HistoryComponent */] },
    { path: 'api', component: __WEBPACK_IMPORTED_MODULE_11__components_api_api_component__["a" /* ApiComponent */] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_history_history_component__["a" /* HistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_api_api_component__["a" /* ApiComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_search_filter_pipe__["a" /* SearchFilter */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_search_service__["a" /* SearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/api/api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "code {\r\n    font-size: 16px;\r\n    padding: 5px 0 5px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n  <h1>API BASEJUMP: Image Search Abstraction Layer</h1>\n  <h3>\n    User stories:\n  </h3>\n  <ol>\n    <li>I can get the image URLs, alt text and page urls for a set of images relating to a given search string.</li>\n    <li>I can paginate through the responses by adding a ?offset=2 parameter to the URL.</li>\n    <li>I can get a list of the most recently submitted search strings.</li>\n  </ol>\n\n  <h3>\n    The search engine returns image data using the Imgur API<br/><br/>\n  </h3>\n  <h4>\n    Example - Image Search:\n  </h4>\n  <code>https://paper-wilderness.glitch.me/api/imgsearch/SEARCH_PHRASE</code>\n  <br />\n  <br />\n  <a href=\"https://paper-wilderness.glitch.me/api/imgsearch/lolcats\">\n    <code>https://paper-wilderness.glitch.me/api/imgsearch/lolcats</code>\n  </a>\n  <br />\n  <br />\n  <h4>\n    Example - Image Search With Page Offset:\n  </h4>\n  <code>https://paper-wilderness.glitch.me/api/imgsearch/SEARCH_PHRASE?offset=OFFSET_NUMBER_BETWEEN_1_AND_165_INCLUSIVE</code>\n  <br />\n  <br />\n  <a href=\"https://paper-wilderness.glitch.me/api/imgsearch/lolcats?offset=2\">\n    <code>https://paper-wilderness.glitch.me/api/imgsearch/lolcats?offset=2</code>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponent; });
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

let ApiComponent = class ApiComponent {
    constructor() { }
    ngOnInit() {
    }
};
ApiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-api',
        template: __webpack_require__("../../../../../src/app/components/api/api.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/api/api.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ApiComponent);

//# sourceMappingURL=api.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"history\">\n  <ul class=\"list-group text-center\">\n    <li class=\"list-group-item list-group-item-success\">Search History:</li>\n\n    <li *ngFor=\"let item of history | paginate: { itemsPerPage: 15, currentPage: page }\" class=\"list-group-item list-group-item-primary\">\n      {{item}}\n    </li>\n  </ul>\n  <pagination-controls (pageChange)=\"page = $event\" class=\"pagination-controls\"></pagination-controls>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HistoryComponent = class HistoryComponent {
    constructor(searchService, router) {
        this.searchService = searchService;
        this.router = router;
    }
    ngOnInit() {
        this.searchService.callBackEnd({}).subscribe(data => {
            this.history = data.history;
        });
    }
};
HistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-history',
        template: __webpack_require__("../../../../../src/app/components/history/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/history/history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HistoryComponent);

var _a, _b;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pagination-controls /deep/ .ngx-pagination .current {\r\n    background: red;\r\n    color: white;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Imgur Search App</h1>\n  <p class=\"lead\">Utilizing the Imgur API, Mongodb, Express, Angular4, and Node.js</p>\n  <form (submit)=\"getSearchResults()\">\n    <div class=\"form-group row\">\n      <span class=\"col-sm-11\"><input type=\"text\" [(ngModel)]=\"searchString\" name=\"search\" class=\"form-control\"></span>\n      <span class=\"col-sm-1\"><input type=\"submit\" class=\"btn btn-primary\" value=\"Search\"></span>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input type=\"checkbox\" [(ngModel)]=\"albumCheckBoxValue\" class=\"form-check-input\" name=\"albumCheckBox\" value=\"\">\n        Album?\n      </label>\n      <label class=\"form-check-label\">\n        <input type=\"checkbox\" [(ngModel)]=\"nsfwCheckBoxValue\" class=\"form-check-input\" name=\"nsfwCheckBox\" value=\"\">\n        NSFW?\n      </label>\n    </div>\n  </form>\n</div>\n<flash-messages></flash-messages>\n<div *ngIf=\"searchResults\">\n  <table class=\"table table-bordered table-responsive table-striped\">\n    <thead class=\"thead-inverse\">\n      <tr class=\"bg-success\">\n        <th>Title</th>\n        <th>Link</th>\n        <th (click)=\"albumCheckBoxValue ? albumCheckBoxValue = false : albumCheckBoxValue = true\">\n          Album\n        </th>\n        <th (click)=\"nsfwCheckBoxValue ? nsfwCheckBoxValue = false : nsfwCheckBoxValue = true\">\n          NSFW\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let image of searchResults | \n          searchFilter: {albums: albumCheckBoxValue, nsfw: nsfwCheckBoxValue} | \n          paginate: { itemsPerPage: 15, currentPage: page }\">\n        <td>{{image.title}}</td>\n        <td><a target=\"new\" href=\"{{image.link}}\">{{image.link}}</a></td>\n        <td>\n          <div [ngSwitch]=\"image.is_album\">\n            <i *ngSwitchCase=\"true\" class=\"material-icons\">check</i>\n            <i *ngSwitchCase=\"false\" class=\"material-icons\">close</i>\n          </div>\n        </td>\n        <td>\n          <div [ngSwitch]=\"image.nsfw\">\n            <i *ngSwitchCase=\"true\" class=\"material-icons\">check</i>\n            <i *ngSwitchCase=\"false\" class=\"material-icons\">close</i>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <pagination-controls (pageChange)=\"page = $event\" class=\"pagination-controls\"></pagination-controls>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HomepageComponent = class HomepageComponent {
    constructor(searchService, flashMessage) {
        this.searchService = searchService;
        this.flashMessage = flashMessage;
        this.page = 1;
        this.nsfwCheckBoxValue = true;
        this.albumCheckBoxValue = true;
    }
    ngOnInit() {
        this.searchOptions = { searchString: '' };
    }
    getSearchResults(searchString) {
        // Make sure we aren't making needless calls with the same search words
        if (this.searchOptions[`searchString`] === this.searchString)
            return false;
        this.searchOptions = {
            searchString: this.searchString
        };
        if (this.searchString !== undefined) {
            this.searchService.callBackEnd(this.searchOptions).subscribe(data => {
                if (!data.result) {
                    this.flashMessage.show('No search results found for ' + this.searchString, { cssClass: 'alert-danger', timeout: 3000 });
                }
                this.searchResults = data.result;
            });
        }
    }
};
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/components/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], HomepageComponent);

var _a, _b;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle navbar-toggler collapsed\" data-toggle=\"collapse\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\n        aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Imgur-Search</a>\n    </div>\n    <div [ngbCollapse]=\"!isNavbarCollapsed\" id=\"navbar\" class=\"collapse navbar-collapse navbar-toggleable\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/']\">Home</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/history']\">History</a>\n        </li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a [routerLink]=\"['/api']\">API</a>\n        </li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SearchFilter = class SearchFilter {
    transform(searchResults, filterOptions) {
        let filtered = searchResults;
        if (!filterOptions[`albums`]) {
            filtered = filtered.filter(item => item[`is_album`] === false);
        }
        if (!filterOptions[`nsfw`]) {
            filtered = filtered.filter(item => item[`nsfw`] === false);
        }
        return filtered;
    }
};
SearchFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'searchFilter' })
], SearchFilter);

//# sourceMappingURL=search-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SearchService = class SearchService {
    constructor(http) {
        this.http = http;
        this.callBackEnd = (searchOptions) => {
            let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            let ep = this.prepEndpoint('api/imgsearch');
            if (searchOptions.searchString) {
                return this.http.get(`${ep}${searchOptions.searchString}`, { headers: headers })
                    .map(res => res.json());
            }
            else {
                return this.http.get(ep, { headers: headers })
                    .map(res => res.json());
            }
        };
        this.isDev = false; // Change to false before deployment
    }
    prepEndpoint(ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:3000/' + ep;
        }
    }
};
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map