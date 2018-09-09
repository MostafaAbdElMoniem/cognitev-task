webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__article_article_component__ = __webpack_require__("./src/app/article/article.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'article', component: __WEBPACK_IMPORTED_MODULE_6__article_article_component__["a" /* ArticleComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-services/authentication-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_app_routes_enum__ = __webpack_require__("./src/app/enums/app-routes.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_login_routes_enum__ = __webpack_require__("./src/app/enums/login-routes.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router) {
        this.router = router;
    }
    AuthenticationService.prototype.checkAuthentication = function () {
        // check if user is logged in
        var includeRoute = Object.values(__WEBPACK_IMPORTED_MODULE_2__enums_app_routes_enum__["a" /* AppRoutes */]).includes(this.router.url);
        var activeUser = localStorage['activeUser'];
        if (activeUser && !includeRoute) {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__enums_app_routes_enum__["a" /* AppRoutes */].dashboard]);
        }
        else if (!activeUser && includeRoute) {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__enums_login_routes_enum__["a" /* LoginRoutes */].login]);
        }
    };
    AuthenticationService.prototype.createId = function () {
        return 'id-' + Math.random().toString(36).substr(2, 16);
    };
    AuthenticationService.prototype.logout = function () {
        if (localStorage['activeUser']) {
            delete localStorage['activeUser'];
        }
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__enums_login_routes_enum__["a" /* LoginRoutes */].login]);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/app-services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.saveArticles = function (articles) {
        if (localStorage['articles']) {
            delete localStorage['articles'];
            this.setArticles(articles);
        }
        else {
            this.setArticles(articles);
        }
    };
    DashboardService.prototype.setArticles = function (articles) {
        localStorage.setItem('articles', JSON.stringify(articles));
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/app-services/login-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("./src/app/app-services/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(authenticate) {
        this.authenticate = authenticate;
    }
    LoginService.prototype.createUser = function (user) {
        var users = [];
        if (localStorage['users']) {
            // getting all users from localStorage if found
            users = JSON.parse(localStorage['users']);
            if (users.length) {
                // search if user is created before
                var searchUserIsCreated = users.find(function (searchUser) { return user.username.toLowerCase() === searchUser.username.toLowerCase(); });
                if (searchUserIsCreated) {
                    return false; // return false if user is created before;
                }
            }
        }
        // create id for the new user
        user.id = this.authenticate.createId();
        // add the new user to all users
        users.push(user);
        // save the users to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        // return true if user has been saved successfully;
        return true;
    };
    LoginService.prototype.canLogin = function (userCredentials) {
        // get users from localstorage
        var currentUsers = (localStorage['users']) ? JSON.parse(localStorage['users']) : [];
        if (currentUsers.length) {
            // find the user that match credentials
            var foundUser = currentUsers.find(function (user) {
                return user.username.toLowerCase() === userCredentials.username.toLowerCase()
                    && user.password === userCredentials.password;
            });
            return (foundUser) ? foundUser : false;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.saveUser = function (user) {
        localStorage.setItem('activeUser', JSON.stringify(user));
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"checkAthentication()\"></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_authentication_service_service__ = __webpack_require__("./src/app/app-services/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authenticate) {
        this.authenticate = authenticate;
    }
    AppComponent.prototype.checkAthentication = function () {
        this.authenticate.checkAuthentication();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_authentication_service_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_login_service_service__ = __webpack_require__("./src/app/app-services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_authentication_service_service__ = __webpack_require__("./src/app/app-services/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__article_article_component__ = __webpack_require__("./src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_services_dashboard_service__ = __webpack_require__("./src/app/app-services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__article_article_component__["a" /* ArticleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_services_login_service_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_9__app_services_authentication_service_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_11__app_services_dashboard_service__["a" /* DashboardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  article works!\n</p>\n"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__("./src/app/article/article.component.html"),
            styles: [__webpack_require__("./src/app/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100%;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.article-wrapper {\r\n    width: 300px;\r\n    padding: 10px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.my-article {\r\n    background-color: white;\r\n}\r\n\r\n.article-wrapper h3 {\r\n    color: #007bff;\r\n}\r\n\r\n.edit-delete-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.edit {\r\n    color: #82d882;\r\n    cursor: pointer;\r\n}\r\n\r\n.delete {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n.create-article {\r\n    color: #4e4cb5;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.log-out {\r\n    color: red;\r\n}\r\n\r\n.role {\r\n    color: #b55f5f\r\n}\r\n\r\n.user {\r\n    color: #82d882\r\n}\r\n\r\n.usermame {\r\n    cursor: default;\r\n}\r\n\r\n.by-wrapper {\r\n    color: #ff5722;\r\n}\r\n\r\n.by-wrapper span {\r\n    color: #795548;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- every section of next sections must be in a new component with its inputs and outputs emiters  -->\n<!-- logout button -->\n<div class=\"article-wrapper\">\n  <div class=\"thumbnail biege\">\n    <div class=\"caption create-article log-out\" (click)=\"logout()\">\n      Log out\n    </div>\n  </div>\n</div>\n<!-- end of logout button -->\n<!-- creatorName and creatorRol -->\n<div class=\"article-wrapper\">\n  <div class=\"thumbnail biege\">\n    <div class=\"caption create-article usermame\">\n      <span class=\"role\">{{activeUser.userRole}}</span>\n      <span class=\"user\">({{activeUser.username}})</span>\n    </div>\n  </div>\n</div>\n<!--end of creatorName and creatorRol -->\n\n<!-- add article button -->\n<div class=\"article-wrapper\" *ngIf=\"activeUser.userRole != userRoles.guest\">\n  <div class=\"thumbnail biege\">\n    <div class=\"caption create-article\" data-toggle=\"modal\" data-target=\"#articleModal\" (click)=\"addNewArticle()\"> Create\n      Article\n    </div>\n  </div>\n</div>\n<!--end add article button -->\n\n<!-- articles section -->\n<div class=\"article-wrapper\" *ngFor=\"let singleArticle of articles;let i = index\">\n  <div class=\"thumbnail\" [ngClass]=\"{'my-article': singleArticle.creatorId == activeUser.id || activeUser.userRole == userRoles.admin }\">\n    <div class=\"caption\">\n      <h3>{{singleArticle.title}}</h3>\n      <p>{{singleArticle.body}}</p>\n\n      <div class=\"by-wrapper\">\n        Creator: <span>({{singleArticle.creatorName}})</span>\n      </div>\n      <div class=\"edit-delete-wrapper\" *ngIf=\"activeUser.userRole == userRoles.admin || activeUser.id == singleArticle.creatorId\">\n        <span class=\"edit\" (click)=\"editArticle(singleArticle,i)\" data-toggle=\"modal\" data-target=\"#articleModal\">Edit</span>\n        <span class=\"delete\" (click)=\"deleteArticle(i)\">Delete</span>\n      </div>\n    </div>\n  </div>\n</div>\n<!--end of articles section -->\n\n\n<!-- Modal that add or edit article -->\n<div class=\"modal fade\" id=\"articleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"articleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"articleModalLabel\">\n          <span *ngIf=\"isNewArticle && !isEditArticle\"> Create Article</span>\n          <span *ngIf=\"isEditArticle && !isNewArticle\"> Edit Article</span>\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"submitArticle(articleForm)\" name=\"articleForm\" #articleForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"articleTitle\">Article Title</label>\n            <input type=\"text\" class=\"form-control\" name=\"articleTitle\" id=\"articleTitle\" #articleTitle=\"ngModel\" [(ngModel)]=\"articleData.title\"\n              required>\n            <div [hidden]=\"articleTitle.valid || articleTitle.untouched\" class=\"alert-msg\">\n              title is required\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"articleBody\">Article</label>\n            <textarea class=\"form-control\" id=\"articleBody\" name=\"articleBody\" rows=\"3\" #articleBody=\"ngModel\" [(ngModel)]=\"articleData.body\"\n              required></textarea>\n            <div [hidden]=\"articleBody.valid || articleBody.untouched\" class=\"alert-msg\">\n              title is required\n            </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"resetEditAndNewArticle(articleForm)\" #closeModal>Close</button>\n          <button type=\"submit\" *ngIf=\"isNewArticle && !isEditArticle\" [disabled]=\"articleForm.form.invalid\" class=\"btn btn-primary\">Save</button>\n          <button type=\"submit\" *ngIf=\"isEditArticle && !isNewArticle\" [disabled]=\"articleForm.form.invalid\" class=\"btn btn-primary\">\n            Save Changes\n          </button>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!--end Modal that add or edit article -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_authentication_service_service__ = __webpack_require__("./src/app/app-services/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_dashboard_service__ = __webpack_require__("./src/app/app-services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_user_roles_enum__ = __webpack_require__("./src/app/enums/user-roles.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    // declare athenticate and dashboard service
    function DashboardComponent(authenticate, dashboardService) {
        this.authenticate = authenticate;
        this.dashboardService = dashboardService;
        this.articles = [];
        // data that filled in the modal
        this.articleData = {
            title: '',
            body: ''
        };
        this.isNewArticle = false;
        this.isEditArticle = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // read from UserRoles enum
        this.userRoles = __WEBPACK_IMPORTED_MODULE_3__enums_user_roles_enum__["a" /* UserRoles */];
        // getting active user
        this.activeUser = JSON.parse(localStorage['activeUser']);
        // get articles
        if (localStorage['articles']) {
            this.articles = JSON.parse(localStorage['articles']);
        }
    };
    // edit and create article
    DashboardComponent.prototype.submitArticle = function (articleForm) {
        if (this.isEditArticle) {
            this.editSelectedArticle(articleForm);
        }
        else {
            this.createNewArticle(articleForm);
        }
        this.closeModal.nativeElement.click();
    };
    DashboardComponent.prototype.editSelectedArticle = function (articleForm) {
        var _this = this;
        var article = Object.assign({}, this.articleData);
        this.articles.forEach(function (currentArticle) {
            if (currentArticle.articleId === article.articleId) {
                currentArticle = article;
            }
            _this.dashboardService.saveArticles(_this.articles);
            _this.resetArticleForm(articleForm);
            _this.isNewArticle = false;
        });
    };
    DashboardComponent.prototype.createNewArticle = function (articleForm) {
        var article = Object.assign({}, this.articleData);
        article.articleId = this.authenticate.createId();
        article.creatorId = this.activeUser.id;
        article.creatorName = this.activeUser.username;
        this.articles.unshift(article);
        this.dashboardService.saveArticles(this.articles);
        this.resetArticleForm(articleForm);
        this.isNewArticle = false;
    };
    // reset article form
    DashboardComponent.prototype.resetArticleForm = function (articleForm) {
        articleForm.form.markAsPristine();
        articleForm.form.markAsUntouched();
        articleForm.form.updateValueAndValidity();
        this.articleData = {
            title: '',
            body: ''
        };
    };
    // logout
    DashboardComponent.prototype.logout = function () {
        this.authenticate.logout();
    };
    // raise new article flag control the modal
    DashboardComponent.prototype.addNewArticle = function () {
        this.isNewArticle = true;
    };
    // raise edit article flag control the modal
    DashboardComponent.prototype.editArticle = function (article) {
        this.articleData = article;
        this.isEditArticle = true;
    };
    DashboardComponent.prototype.deleteArticle = function (index) {
        var confirmDelete = confirm('Are you sure you want to delete this article?');
        if (confirmDelete) {
            this.articles.splice(index, 1);
            this.dashboardService.saveArticles(this.articles);
        }
    };
    DashboardComponent.prototype.resetEditAndNewArticle = function (articleForm) {
        this.isEditArticle = false;
        this.isNewArticle = false;
        this.resetArticleForm(articleForm);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('closeModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DashboardComponent.prototype, "closeModal", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_dashboard_service__["a" /* DashboardService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/enums/app-routes.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var AppRoutes;
(function (AppRoutes) {
    AppRoutes["dashboard"] = "/dashboard";
    AppRoutes["article"] = "/article";
})(AppRoutes || (AppRoutes = {}));


/***/ }),

/***/ "./src/app/enums/login-routes.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutes; });
var LoginRoutes;
(function (LoginRoutes) {
    LoginRoutes["login"] = "/login";
    LoginRoutes["signup"] = "/signup";
})(LoginRoutes || (LoginRoutes = {}));


/***/ }),

/***/ "./src/app/enums/user-roles.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoles; });
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "admin";
    UserRoles["user"] = "user";
    UserRoles["guest"] = "guest";
})(UserRoles || (UserRoles = {}));


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"showWrongCredentialsError\" role=\"alert\">\n  username or password is incorrect!\n</div>\n\n<h2 class=\"text-center\">Login</h2>\n\n<form class=\"form-signin\" (ngSubmit)=\"login(loginForm)\" #loginForm=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Username</label>\n    <input type=\"text\" class=\"form-control\" id=\"username\" (ngModelChange)=\"removeErrors($event)\" [(ngModel)]=\"userCredentials.username\"\n      name=\"username\" #username=\"ngModel\" required>\n    <div [hidden]=\"username.valid || username.untouched\" class=\"alert-msg\">\n      username is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"userCredentials.password\" (ngModelChange)=\"removeErrors($event)\" name=\"password\" class=\"form-control\"\n      id=\"password\" #password=\"ngModel\" required>\n    <div [hidden]=\"password.valid || password.untouched\" class=\"alert-msg\">\n      password is required\n    </div>\n  </div>\n\n  <button class=\"btn btn-lg btn-success btn-block\" [disabled]=\"loginForm.form.invalid\" type=\"submit\">Login</button>\n\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signup()\">Sign up</button>\n\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_login_service_service__ = __webpack_require__("./src/app/app-services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_app_routes_enum__ = __webpack_require__("./src/app/enums/app-routes.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_login_routes_enum__ = __webpack_require__("./src/app/enums/login-routes.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.showWrongCredentialsError = false;
        this.userCredentials = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginForm) {
        var loginUser = this.loginService.canLogin(this.userCredentials);
        if (loginUser) {
            this.loginService.saveUser(loginUser);
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__enums_app_routes_enum__["a" /* AppRoutes */].dashboard]);
        }
        else {
            this.showWrongCredentialsError = true;
        }
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__enums_login_routes_enum__["a" /* LoginRoutes */].signup]);
    };
    LoginComponent.prototype.removeErrors = function () {
        this.showWrongCredentialsError = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_login_service_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    overflow: auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"showCreateSuccess\" role=\"alert\">\n  user has been created successfully!\n</div>\n<br>\n<div class=\"alert alert-warning\" *ngIf=\"userIsCreatedBefore\" role=\"alert\">\n  username is used before!\n</div>\n\n<h2 class=\"text-center\">Create user</h2>\n\n<form class=\"form-signin\" (ngSubmit)=\"register(signUp)\" #signUp=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Username</label>\n    <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" (ngModelChange)=\"removeErrors($event)\"\n      name=\"username\" #username=\"ngModel\" required>\n    <div [hidden]=\"username.valid || username.untouched\" class=\"alert-msg\">\n      username is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"user.password\" (ngModelChange)=\"removeErrors($event)\" name=\"password\" class=\"form-control\"\n      id=\"password\" #password=\"ngModel\" required>\n    <div [hidden]=\"password.valid || password.untouched\" class=\"alert-msg\">\n      password is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"confirmPassword\">Confirm password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.confirmPassword\" (ngModelChange)=\"removeErrors($event)\" name=\"confirmPassword\"\n      id=\"confirmPassword\" #confirmPassword=\"ngModel\" required>\n    <div [hidden]=\"confirmPassword.valid || confirmPassword.untouched\" class=\"alert-msg\">\n      confirm password is required\n    </div>\n    <div *ngIf=\"user.confirmPassword != user.password && confirmPassword.touched\" class=\"alert-msg\">\n      confirm password should match password\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"power\">User Role</label>\n    <select class=\"form-control\" [(ngModel)]=\"user.userRole\" (ngModelChange)=\"removeErrors($event)\" name=\"userRole\" id=\"power\"\n      required>\n      <option *ngFor=\"let role of userRoles\" [value]=\"role\">{{role}}</option>\n    </select>\n  </div>\n\n  <button class=\"btn btn-lg btn-success btn-block\" [disabled]=\"signUp.form.invalid || user.confirmPassword != user.password\"\n    type=\"submit\">Create</button>\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"backToLogin()\">Back to login</button>\n\n\n</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_login_service_service__ = __webpack_require__("./src/app/app-services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_user_roles_enum__ = __webpack_require__("./src/app/enums/user-roles.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_login_routes_enum__ = __webpack_require__("./src/app/enums/login-routes.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.showCreateSuccess = false;
        this.userIsCreatedBefore = false;
        // user types should be in userTypes enum
        this.userRoles = Object.values(__WEBPACK_IMPORTED_MODULE_2__enums_user_roles_enum__["a" /* UserRoles */]);
        // init register model
        this.user = {
            username: '',
            password: '',
            confirmPassword: '',
            userRole: __WEBPACK_IMPORTED_MODULE_2__enums_user_roles_enum__["a" /* UserRoles */].admin // should read this value from userTypes enum
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function (registerForm) {
        var createUser = this.loginService.createUser(this.user);
        if (createUser) {
            this.resetRegisterForm(registerForm);
            this.showCreateSuccess = true;
        }
        else {
            this.userIsCreatedBefore = true;
        }
    };
    SignupComponent.prototype.resetRegisterForm = function (registerForm) {
        registerForm.form.markAsPristine();
        registerForm.form.markAsUntouched();
        registerForm.form.updateValueAndValidity();
        this.user = {
            username: '',
            password: '',
            confirmPassword: '',
            userRole: 'admin'
        };
    };
    SignupComponent.prototype.backToLogin = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__enums_login_routes_enum__["a" /* LoginRoutes */].login]);
    };
    SignupComponent.prototype.removeErrors = function () {
        this.showCreateSuccess = false;
        this.userIsCreatedBefore = false;
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_login_service_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map