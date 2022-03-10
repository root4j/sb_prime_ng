"use strict";
(self["webpackChunkuninorte_ng"] = self["webpackChunkuninorte_ng"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _app_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.main.component */ 7330);
/* harmony import */ var _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/crud/crud.component */ 101);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error/error.component */ 6359);
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notfound/notfound.component */ 7312);
/* harmony import */ var _components_access_access_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/access/access.component */ 1908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot([
                {
                    path: '', component: _app_main_component__WEBPACK_IMPORTED_MODULE_1__.AppMainComponent,
                    children: [
                        { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
                        { path: 'pages/crud', component: _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_2__.CrudComponent },
                    ],
                },
                { path: 'pages/error', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent },
                { path: 'pages/notfound', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__.NotfoundComponent },
                { path: 'pages/access', component: _components_access_access_component__WEBPACK_IMPORTED_MODULE_5__.AccessComponent },
                { path: '**', redirectTo: 'pages/notfound' },
            ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
        this.menuMode = 'static';
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 8934:
/*!*****************************************!*\
  !*** ./src/app/app.config.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigComponent": () => (/* binding */ AppConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.main.component */ 7330);
/* harmony import */ var _service_app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/app.config.service */ 3550);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ 5949);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputswitch */ 2236);











const _c0 = function (a0) { return { "scale-active": a0 }; };
function AppConfigComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 54);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, item_r1 === ctx_r0.scale));
} }
const _c1 = function (a0) { return { "layout-config-active": a0 }; };
class AppConfigComponent {
    constructor(app, appMain, configService, primengConfig) {
        this.app = app;
        this.appMain = appMain;
        this.configService = configService;
        this.primengConfig = primengConfig;
        this.scale = 14;
        this.scales = [12, 13, 14, 15, 16];
    }
    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.scale = 14;
            this.applyScale();
        });
    }
    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
    incrementScale() {
        this.scale++;
        this.applyScale();
    }
    decrementScale() {
        this.scale--;
        this.applyScale();
    }
    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }
    onRippleChange(ripple) {
        this.primengConfig.ripple = ripple;
        this.configService.updateConfig(Object.assign(Object.assign({}, this.config), { ripple }));
    }
    onInputStyleChange() {
        this.configService.updateConfig(this.config);
    }
    changeTheme(theme, dark) {
        let themeElement = document.getElementById('theme-css');
        themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
        this.configService.updateConfig(Object.assign(Object.assign({}, this.config), { theme, dark }));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AppConfigComponent.ɵfac = function AppConfigComponent_Factory(t) { return new (t || AppConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_1__.AppMainComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_app_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig)); };
AppConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppConfigComponent, selectors: [["app-config"]], decls: 159, vars: 11, consts: [["id", "layout-config", 1, "layout-config", 3, "ngClass", "click"], ["id", "layout-config-button", 1, "layout-config-button", 2, "cursor", "pointer", 3, "click"], [1, "pi", "pi-cog"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "p-button-text", "layout-config-close", 3, "click"], [1, "layout-config-content"], [1, "mt-0"], [1, "config-scale"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-minus", 1, "p-button-rounded", "p-button-text", 3, "disabled", "click"], ["class", "pi pi-circle-fill", 3, "ngClass", 4, "ngFor", "ngForOf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-rounded", "p-button-text", 3, "disabled", "click"], [1, "p-formgroup-inline"], [1, "field-radiobutton"], ["name", "inputStyle", "value", "outlined", "inputId", "inputStyle1", 3, "ngModel", "ngModelChange", "onClick"], ["for", "inputStyle1"], ["name", "inputStyle", "value", "filled", "inputId", "inputStyle2", 3, "ngModel", "ngModelChange", "onClick"], ["for", "inputStyle2"], [3, "ngModel", "onChange"], ["name", "menuType", "value", "static", "inputId", "menuType1", 3, "ngModel", "ngModelChange", "onClick"], ["for", "menuType1"], ["name", "menuType", "value", "overlay", "inputId", "menuType2", 3, "ngModel", "ngModelChange", "onClick"], ["for", "menuType2"], [1, "grid", "free-themes"], [1, "col-3", "text-center"], [1, "p-link", 3, "click"], ["src", "assets/layout/images/themes/bootstrap4-light-blue.svg", "alt", "Bootstrap Light Blue"], ["src", "assets/layout/images/themes/bootstrap4-light-purple.svg", "alt", "Bootstrap Light Purple"], ["src", "assets/layout/images/themes/bootstrap4-dark-blue.svg", "alt", "Bootstrap Dark Blue"], ["src", "assets/layout/images/themes/bootstrap4-dark-purple.svg", "alt", "Bootstrap Dark Purple"], ["src", "assets/layout/images/themes/md-light-indigo.svg", "alt", "Material Light Indigo"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light DeepPurple"], ["src", "assets/layout/images/themes/md-dark-indigo.svg", "alt", "Material Dark Indigo"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark DeepPurple"], ["src", "assets/layout/images/themes/tailwind-light.png", "alt", "Tailwind Light"], ["src", "assets/layout/images/themes/fluent-light.png", "alt", "Fluent Light"], ["src", "assets/layout/images/themes/lara-light-indigo.png", "alt", "Lara Light Indigo"], ["src", "assets/layout/images/themes/lara-light-blue.png", "alt", "Lara Light Blue"], ["src", "assets/layout/images/themes/lara-light-purple.png", "alt", "Lara Light Purple"], ["src", "assets/layout/images/themes/lara-light-teal.png", "alt", "Lara Light Teal"], ["src", "assets/layout/images/themes/lara-dark-indigo.png", "alt", "Lara Dark Indigo"], ["src", "assets/layout/images/themes/lara-dark-blue.png", "alt", "Lara Dark Blue"], ["src", "assets/layout/images/themes/lara-dark-purple.png", "alt", "Lara Dark Purple"], ["src", "assets/layout/images/themes/lara-dark-teal.png", "alt", "Lara Dark Teal"], ["src", "assets/layout/images/themes/saga-blue.png", "alt", "Saga Blue"], ["src", "assets/layout/images/themes/saga-green.png", "alt", "Saga Green"], ["src", "assets/layout/images/themes/saga-orange.png", "alt", "Saga Orange"], ["src", "assets/layout/images/themes/saga-purple.png", "alt", "Saga Purple"], ["src", "assets/layout/images/themes/vela-blue.png", "alt", "Vela Blue"], ["src", "assets/layout/images/themes/vela-green.png", "alt", "Vela Green"], ["src", "assets/layout/images/themes/vela-orange.png", "alt", "Vela Orange"], ["src", "assets/layout/images/themes/vela-purple.png", "alt", "Vela Purple"], ["src", "assets/layout/images/themes/arya-blue.png", "alt", "Arya Blue"], ["src", "assets/layout/images/themes/arya-green.png", "alt", "Arya Green"], ["src", "assets/layout/images/themes/arya-orange.png", "alt", "Arya Orange"], ["src", "assets/layout/images/themes/arya-purple.png", "alt", "Arya Purple"], [1, "pi", "pi-circle-fill", 3, "ngClass"]], template: function AppConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_div_click_0_listener($event) { return ctx.appMain.onConfigClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_a_click_1_listener($event) { return ctx.onConfigButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_3_listener($event) { return ctx.onConfigButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Component Scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_8_listener() { return ctx.decrementScale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppConfigComponent_i_9_Template, 1, 3, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_10_listener() { return ctx.incrementScale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Input Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "p-radioButton", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_15_listener($event) { return ctx.config.inputStyle = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_15_listener() { return ctx.onInputStyleChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "p-radioButton", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_19_listener($event) { return ctx.config.inputStyle = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_19_listener() { return ctx.onInputStyleChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Ripple Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-inputSwitch", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function AppConfigComponent_Template_p_inputSwitch_onChange_24_listener($event) { return ctx.onRippleChange($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Menu Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "p-radioButton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_29_listener($event) { return ctx.app.menuMode = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_29_listener() { return ctx.appMain.isStatic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 11)(33, "p-radioButton", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_33_listener($event) { return ctx.app.menuMode = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_33_listener() { return ctx.appMain.isOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 21)(39, "div", 22)(40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_40_listener() { return ctx.changeTheme("bootstrap4-light-blue", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 22)(43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_43_listener() { return ctx.changeTheme("bootstrap4-light-purple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 22)(46, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_46_listener() { return ctx.changeTheme("bootstrap4-dark-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 22)(49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_49_listener() { return ctx.changeTheme("bootstrap4-dark-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Material Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 21)(54, "div", 22)(55, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_55_listener() { return ctx.changeTheme("md-light-indigo", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 22)(58, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_58_listener() { return ctx.changeTheme("md-light-deeppurple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 22)(61, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_61_listener() { return ctx.changeTheme("md-dark-indigo", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 22)(64, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_64_listener() { return ctx.changeTheme("md-dark-deeppurple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Material Design Compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 21)(69, "div", 22)(70, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_70_listener() { return ctx.changeTheme("mdc-light-indigo", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 22)(73, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_73_listener() { return ctx.changeTheme("mdc-light-deeppurple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 22)(76, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_76_listener() { return ctx.changeTheme("mdc-dark-indigo", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 22)(79, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_79_listener() { return ctx.changeTheme("mdc-dark-deeppurple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Tailwind");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 21)(84, "div", 22)(85, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_85_listener() { return ctx.changeTheme("tailwind-light", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Fluent UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 21)(90, "div", 22)(91, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_91_listener() { return ctx.changeTheme("fluent-light", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "PrimeOne Design - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 21)(96, "div", 22)(97, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_97_listener() { return ctx.changeTheme("lara-light-indigo", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 22)(100, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_100_listener() { return ctx.changeTheme("lara-light-blue", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 22)(103, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_103_listener() { return ctx.changeTheme("lara-light-purple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 22)(106, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_106_listener() { return ctx.changeTheme("lara-light-teal", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 22)(109, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_109_listener() { return ctx.changeTheme("lara-dark-indigo", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 22)(112, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_112_listener() { return ctx.changeTheme("lara-dark-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 22)(115, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_115_listener() { return ctx.changeTheme("lara-dark-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 22)(118, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_118_listener() { return ctx.changeTheme("lara-dark-teal", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "PrimeOne Design - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 21)(123, "div", 22)(124, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_124_listener() { return ctx.changeTheme("saga-blue", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 22)(127, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_127_listener() { return ctx.changeTheme("saga-green", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 22)(130, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_130_listener() { return ctx.changeTheme("saga-orange", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 22)(133, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_133_listener() { return ctx.changeTheme("saga-purple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 22)(136, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_136_listener() { return ctx.changeTheme("vela-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 22)(139, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_139_listener() { return ctx.changeTheme("vela-green", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 22)(142, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_142_listener() { return ctx.changeTheme("vela-orange", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 22)(145, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_145_listener() { return ctx.changeTheme("vela-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 22)(148, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_148_listener() { return ctx.changeTheme("arya-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 22)(151, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_151_listener() { return ctx.changeTheme("arya-green", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 22)(154, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_154_listener() { return ctx.changeTheme("arya-orange", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 22)(157, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_157_listener() { return ctx.changeTheme("arya-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](158, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c1, ctx.appMain.configActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.scales);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.config.inputStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.config.inputStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.config.ripple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.app.menuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.app.menuMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__.RadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__.InputSwitch], encapsulation: 2 });


/***/ }),

/***/ 6867:
/*!*****************************************!*\
  !*** ./src/app/app.footer.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFooterComponent": () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.main.component */ 7330);


class AppFooterComponent {
    constructor(appMain) {
        this.appMain = appMain;
    }
}
AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) { return new (t || AppFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent)); };
AppFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppFooterComponent, selectors: [["app-footer"]], decls: 2, vars: 1, consts: [[1, "layout-footer"], ["alt", "Logo", "height", "20", 1, "mr-3", 3, "src"]], template: function AppFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.appMain.config.dark ? "logo-white" : "uni-logo-horizontal", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2 });


/***/ }),

/***/ 7330:
/*!***************************************!*\
  !*** ./src/app/app.main.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMainComponent": () => (/* binding */ AppMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _service_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/app.config.service */ 3550);




function AppMainComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 5);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "layout-overlay": a0, "layout-static": a1, "layout-theme-light": a2, "layout-theme-dark": a3, "layout-overlay-sidebar-active": a4, "layout-static-sidebar-inactive": a5, "layout-mobile-sidebar-active": a6, "p-ripple-disabled": a7, "p-input-filled": a8 }; };
class AppMainComponent {
    constructor(renderer, app, configService) {
        this.renderer = renderer;
        this.app = app;
        this.configService = configService;
        this.staticMenuInactive = false;
    }
    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);
    }
    ngAfterViewInit() {
        // hides the overlay menu and top menu if outside is clicked
        this.documentClickListener = this.renderer.listen('body', 'click', (event) => {
            if (!this.isDesktop()) {
                if (!this.menuClick) {
                    this.menuActiveMobile = false;
                }
                if (!this.topMenuButtonClick) {
                    this.hideTopMenu();
                }
            }
            else {
                if (!this.menuClick && this.isOverlay()) {
                    this.menuInactiveDesktop = true;
                }
                if (!this.menuClick) {
                    this.overlayMenuActive = false;
                }
            }
            if (this.configActive && !this.configClick) {
                this.configActive = false;
            }
            this.configClick = false;
            this.menuClick = false;
            this.topMenuButtonClick = false;
        });
    }
    toggleMenu(event) {
        this.menuClick = true;
        if (this.isDesktop()) {
            if (this.app.menuMode === 'overlay') {
                if (this.menuActiveMobile === true) {
                    this.overlayMenuActive = true;
                }
                this.overlayMenuActive = !this.overlayMenuActive;
                this.menuActiveMobile = false;
            }
            else if (this.app.menuMode === 'static') {
                this.staticMenuInactive = !this.staticMenuInactive;
            }
        }
        else {
            this.menuActiveMobile = !this.menuActiveMobile;
            this.topMenuActive = false;
        }
        event.preventDefault();
    }
    toggleProfile(event) {
        this.profileActive = !this.profileActive;
        event.preventDefault();
    }
    toggleTopMenu(event) {
        this.topMenuButtonClick = true;
        this.menuActiveMobile = false;
        if (this.topMenuActive) {
            this.hideTopMenu();
        }
        else {
            this.topMenuActive = true;
        }
        event.preventDefault();
    }
    hideTopMenu() {
        this.topMenuLeaving = true;
        setTimeout(() => {
            this.topMenuActive = false;
            this.topMenuLeaving = false;
        }, 1);
    }
    onMenuClick() {
        this.menuClick = true;
    }
    onConfigClick(event) {
        this.configClick = true;
    }
    isStatic() {
        return this.app.menuMode === 'static';
    }
    isOverlay() {
        return this.app.menuMode === 'overlay';
    }
    isDesktop() {
        return window.innerWidth > 992;
    }
    isMobile() {
        return window.innerWidth < 1024;
    }
    onSearchClick() {
        this.topMenuButtonClick = true;
    }
    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AppMainComponent.ɵfac = function AppMainComponent_Factory(t) { return new (t || AppMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService)); };
AppMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppMainComponent, selectors: [["app-main"]], decls: 9, vars: 12, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-sidebar"], [1, "layout-main-container"], [1, "layout-main"], ["class", "layout-mask p-component-overlay", 4, "ngIf"], [1, "layout-mask", "p-component-overlay"]], template: function AppMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppMainComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c0, [ctx.isOverlay(), ctx.isStatic(), !ctx.config.dark, ctx.config.dark, ctx.overlayMenuActive, ctx.staticMenuInactive, ctx.menuActiveMobile, !ctx.config.ripple, ctx.config.inputStyle === "filled"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuActiveMobile);
    } }, encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('submenu', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                    height: '0px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                    height: '*'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('visible => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('hidden => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ] } });


/***/ }),

/***/ 5693:
/*!***************************************!*\
  !*** ./src/app/app.menu.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.main.component */ 7330);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 5335);




function AppMenuComponent_li_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 7);
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r4)("index", i_r2);
} }
function AppMenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuComponent_li_2_li_4_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1)("index", i_r2)("root", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.items);
} }
class AppMenuComponent {
    constructor(appMain) {
        this.appMain = appMain;
    }
    ngOnInit() {
        this.model = [
            {
                label: 'Menu',
                items: [
                    { label: 'Item Normal', icon: 'pi pi-fw pi-bookmark', routerLink: ['/'] },
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark', routerLink: ['/'] },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                ]
            }
        ];
    }
    onKeydown(event) {
        const nodeElement = event.target;
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) { return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent)); };
AppMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppMenuComponent, selectors: [["app-menu"]], decls: 3, vars: 1, consts: [[1, "layout-menu-container"], ["role", "menu", 1, "layout-menu", 3, "keydown"], ["app-menu", "", "class", "layout-menuitem-category", "role", "none", 3, "item", "index", "root", 4, "ngFor", "ngForOf"], ["app-menu", "", "role", "none", 1, "layout-menuitem-category", 3, "item", "index", "root"], [1, "layout-menuitem-root-text"], ["role", "menu"], ["app-menuitem", "", "role", "none", 3, "item", "index", 4, "ngFor", "ngForOf"], ["app-menuitem", "", "role", "none", 3, "item", "index"]], template: function AppMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function AppMenuComponent_Template_ul_keydown_1_listener($event) { return ctx.onKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuComponent_li_2_Template, 5, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.model);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent], encapsulation: 2 });


/***/ }),

/***/ 5335:
/*!*******************************************!*\
  !*** ./src/app/app.menuitem.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuitemComponent": () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.main.component */ 7330);
/* harmony import */ var _service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/app.menu.service */ 6183);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 2875);









const _c0 = ["app-menuitem", ""];
function AppMenuitemComponent_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.item.badge);
} }
function AppMenuitemComponent_a_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("pi pi-fw ", ctx_r4.active ? "pi-angle-up" : "pi-angle-down", " ml-auto");
} }
function AppMenuitemComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.itemClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_1_span_4_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppMenuitemComponent_a_1_i_5_Template, 1, 3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r0.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r0.item.target)("tabindex", 0)("aria-label", ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.items);
} }
function AppMenuitemComponent_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.item.badge);
} }
function AppMenuitemComponent_a_2_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("pi pi-fw ", ctx_r8.active ? "pi-angle-up" : "pi-angle-down", " ml-auto");
} }
const _c1 = function (a0) { return { exact: a0 }; };
function AppMenuitemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.itemClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppMenuitemComponent_a_2_i_5_Template, 1, 3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.class)("routerLink", ctx_r1.item.routerLink)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, !ctx_r1.item.preventExact));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx_r1.item.target)("tabindex", 0)("aria-label", ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.items);
} }
function AppMenuitemComponent_ul_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 13);
} if (rf & 2) {
    const child_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](child_r12.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r12)("index", i_r13)("parentKey", ctx_r11.key);
} }
function AppMenuitemComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_ul_3_ng_template_1_Template, 1, 5, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@children", ctx_r2.active ? "visibleAnimated" : "hiddenAnimated");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.items);
} }
class AppMenuitemComponent {
    constructor(app, router, cd, menuService) {
        this.app = app;
        this.router = router;
        this.cd = cd;
        this.menuService = menuService;
        this.active = false;
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });
        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd))
            .subscribe(params => {
            if (this.item.routerLink) {
                this.updateActiveStateFromRoute();
            }
            else {
                this.active = false;
            }
        });
    }
    ngOnInit() {
        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }
    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
    }
    itemClick(event) {
        event.stopPropagation();
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }
        // notify other items
        this.menuService.onMenuStateChange(this.key);
        // execute command
        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }
        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
        }
        else {
            // activate item
            this.active = true;
            // hide overlay menus
            this.app.menuActiveMobile = false;
            if (this.app.isDesktop() && this.app.isOverlay()) {
                this.app.menuInactiveDesktop = true;
            }
        }
    }
    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }
        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
}
AppMenuitemComponent.ɵfac = function AppMenuitemComponent_Factory(t) { return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService)); };
AppMenuitemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppMenuitemComponent, selectors: [["", "app-menuitem", ""]], hostVars: 2, hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-menuitem", ctx.active);
    } }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, attrs: _c0, decls: 4, vars: 3, consts: [["role", "menuitem", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-menuitem-routerlink router-link-exact-active", "role", "menuitem", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], ["role", "menu", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "ngClass", "click"], [1, "layout-menuitem-icon", 3, "ngClass"], ["class", "menuitem-badge", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "menuitem-badge"], ["routerLinkActive", "active-menuitem-routerlink router-link-exact-active", "role", "menuitem", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "click"], ["class", "p-tag p-badge ml-auto", 4, "ngIf"], [1, "p-tag", "p-badge", "ml-auto"], ["role", "menu"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", "role", "none", 3, "item", "index", "parentKey"]], template: function AppMenuitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_a_1_Template, 6, 9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuitemComponent_a_2_Template, 6, 12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppMenuitemComponent_ul_3_Template, 2, 2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.active && ctx.item.visible !== false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, AppMenuitemComponent], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('children', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    height: '0px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hiddenAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    height: '0px'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visibleAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    height: '*'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visibleAnimated => hiddenAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('hiddenAnimated => visibleAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => visibleAnimated, visibleAnimated => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config.component */ 8934);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.footer.component */ 6867);
/* harmony import */ var _app_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.main.component */ 7330);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.menu.component */ 5693);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.menuitem.component */ 5335);
/* harmony import */ var _app_prime_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.prime.module */ 791);
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.topbar.component */ 7176);
/* harmony import */ var _components_access_access_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/access/access.component */ 1908);
/* harmony import */ var _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/crud/crud.component */ 101);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/error/error.component */ 6359);
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notfound/notfound.component */ 7312);
/* harmony import */ var _service_app_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/app.config.service */ 3550);
/* harmony import */ var _service_app_menu_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/app.menu.service */ 6183);
/* harmony import */ var _service_countryservice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/countryservice */ 8748);
/* harmony import */ var _service_customerservice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/customerservice */ 7083);
/* harmony import */ var _service_eventservice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/eventservice */ 9082);
/* harmony import */ var _service_iconservice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/iconservice */ 3535);
/* harmony import */ var _service_nodeservice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/nodeservice */ 2959);
/* harmony import */ var _service_photoservice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/photoservice */ 5895);
/* harmony import */ var _service_productservice__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/productservice */ 3906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 2816);































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_24__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_24__.HashLocationStrategy },
        _service_countryservice__WEBPACK_IMPORTED_MODULE_16__.CountryService, _service_customerservice__WEBPACK_IMPORTED_MODULE_17__.CustomerService, _service_eventservice__WEBPACK_IMPORTED_MODULE_18__.EventService, _service_iconservice__WEBPACK_IMPORTED_MODULE_19__.IconService, _service_nodeservice__WEBPACK_IMPORTED_MODULE_20__.NodeService,
        _service_photoservice__WEBPACK_IMPORTED_MODULE_21__.PhotoService, _service_productservice__WEBPACK_IMPORTED_MODULE_22__.ProductService, _service_app_menu_service__WEBPACK_IMPORTED_MODULE_15__.MenuService, _service_app_config_service__WEBPACK_IMPORTED_MODULE_14__.ConfigService
    ], imports: [[
            _app_prime_module__WEBPACK_IMPORTED_MODULE_7__.AppPrimeModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _app_main_component__WEBPACK_IMPORTED_MODULE_4__.AppMainComponent,
        _app_topbar_component__WEBPACK_IMPORTED_MODULE_8__.AppTopBarComponent,
        _app_footer_component__WEBPACK_IMPORTED_MODULE_3__.AppFooterComponent,
        _app_config_component__WEBPACK_IMPORTED_MODULE_2__.AppConfigComponent,
        _app_menu_component__WEBPACK_IMPORTED_MODULE_5__.AppMenuComponent,
        _app_menuitem_component__WEBPACK_IMPORTED_MODULE_6__.AppMenuitemComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__.DashboardComponent,
        _components_crud_crud_component__WEBPACK_IMPORTED_MODULE_10__.CrudComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__.ErrorComponent,
        _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__.NotfoundComponent,
        _components_access_access_component__WEBPACK_IMPORTED_MODULE_9__.AccessComponent], imports: [_app_prime_module__WEBPACK_IMPORTED_MODULE_7__.AppPrimeModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetComponentScope"](_app_main_component__WEBPACK_IMPORTED_MODULE_4__.AppMainComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _app_topbar_component__WEBPACK_IMPORTED_MODULE_8__.AppTopBarComponent,
    _app_menu_component__WEBPACK_IMPORTED_MODULE_5__.AppMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterOutlet, _app_footer_component__WEBPACK_IMPORTED_MODULE_3__.AppFooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf], []);


/***/ }),

/***/ 791:
/*!*************************************!*\
  !*** ./src/app/app.prime.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPrimeModule": () => (/* binding */ AppPrimeModule)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/accordion */ 5456);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/avatar */ 9713);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/avatargroup */ 2348);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/badge */ 3758);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/breadcrumb */ 1815);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/carousel */ 87);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/cascadeselect */ 1828);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chart */ 3252);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/checkbox */ 8271);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chip */ 4580);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/chips */ 111);
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/codehighlighter */ 5763);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/confirmpopup */ 4296);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/colorpicker */ 634);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/contextmenu */ 5481);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dataview */ 6796);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/divider */ 9026);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/dropdown */ 4086);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/fieldset */ 9246);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/fileupload */ 7197);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/galleria */ 911);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/image */ 796);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/inplace */ 5219);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/inputnumber */ 9721);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputmask */ 307);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/inputswitch */ 2236);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inputtextarea */ 7288);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/knob */ 7925);
/* harmony import */ var primeng_lightbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/lightbox */ 8866);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/listbox */ 3803);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/megamenu */ 6307);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/menu */ 5207);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/menubar */ 4050);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/messages */ 2530);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/message */ 8129);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/multiselect */ 2460);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/orderlist */ 1046);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/organizationchart */ 7430);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/overlaypanel */ 9245);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/paginator */ 1066);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/panelmenu */ 1862);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/password */ 6538);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/picklist */ 8801);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/progressbar */ 9858);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/radiobutton */ 5949);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/rating */ 8887);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/scrollpanel */ 5625);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/scrolltop */ 2071);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/selectbutton */ 5260);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/sidebar */ 9734);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/skeleton */ 7377);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/slidemenu */ 3641);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/slider */ 1298);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/splitbutton */ 831);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/splitter */ 5957);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/steps */ 7798);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/styleclass */ 1928);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/tabmenu */ 1227);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/tabview */ 2050);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/tag */ 5277);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/terminal */ 4911);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/tieredmenu */ 7533);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/timeline */ 8554);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/togglebutton */ 4816);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/tooltip */ 1210);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/tree */ 7011);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/treeselect */ 7207);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/treetable */ 9002);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/virtualscroller */ 345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



















































































class AppPrimeModule {
}
AppPrimeModule.ɵfac = function AppPrimeModule_Factory(t) { return new (t || AppPrimeModule)(); };
AppPrimeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppPrimeModule });
AppPrimeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService,
        primeng_api__WEBPACK_IMPORTED_MODULE_1__.ConfirmationService
    ], imports: [primeng_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_3__.AutoCompleteModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarModule,
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_5__.AvatarGroupModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_6__.BadgeModule,
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_9__.CalendarModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_11__.CarouselModule,
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_12__.CascadeSelectModule,
        primeng_chart__WEBPACK_IMPORTED_MODULE_13__.ChartModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_15__.ChipsModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_16__.ChipModule,
        primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_17__.CodeHighlighterModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_19__.ConfirmPopupModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__.ColorPickerModule,
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_21__.ContextMenuModule,
        primeng_dataview__WEBPACK_IMPORTED_MODULE_22__.DataViewModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_24__.DividerModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__.DropdownModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_26__.FieldsetModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__.FileUploadModule,
        primeng_galleria__WEBPACK_IMPORTED_MODULE_28__.GalleriaModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_29__.ImageModule,
        primeng_inplace__WEBPACK_IMPORTED_MODULE_30__.InplaceModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_31__.InputNumberModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_32__.InputMaskModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_33__.InputSwitchModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__.InputTextModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__.InputTextareaModule,
        primeng_knob__WEBPACK_IMPORTED_MODULE_36__.KnobModule,
        primeng_lightbox__WEBPACK_IMPORTED_MODULE_37__.LightboxModule,
        primeng_listbox__WEBPACK_IMPORTED_MODULE_38__.ListboxModule,
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_39__.MegaMenuModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_40__.MenuModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_41__.MenubarModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_42__.MessageModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_43__.MessagesModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__.MultiSelectModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_45__.OrderListModule,
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_46__.OrganizationChartModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_47__.OverlayPanelModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_48__.PaginatorModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_49__.PanelModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__.PanelMenuModule,
        primeng_password__WEBPACK_IMPORTED_MODULE_51__.PasswordModule,
        primeng_picklist__WEBPACK_IMPORTED_MODULE_52__.PickListModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_53__.ProgressBarModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_54__.RadioButtonModule,
        primeng_rating__WEBPACK_IMPORTED_MODULE_55__.RatingModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_56__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_57__.ScrollPanelModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_58__.ScrollTopModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_59__.SelectButtonModule,
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_60__.SidebarModule,
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_61__.SkeletonModule,
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_62__.SlideMenuModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_63__.SliderModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_64__.SplitButtonModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_65__.SplitterModule,
        primeng_steps__WEBPACK_IMPORTED_MODULE_66__.StepsModule,
        primeng_styleclass__WEBPACK_IMPORTED_MODULE_67__.StyleClassModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_68__.TagModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_69__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_71__.TabViewModule,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_72__.TerminalModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__.TieredMenuModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_74__.TimelineModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_75__.ToastModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__.ToggleButtonModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__.ToolbarModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_79__.TreeModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__.TreeSelectModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_81__.TreeTableModule,
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__.VirtualScrollerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppPrimeModule, { exports: [primeng_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_3__.AutoCompleteModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarModule,
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_5__.AvatarGroupModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_6__.BadgeModule,
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_9__.CalendarModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_11__.CarouselModule,
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_12__.CascadeSelectModule,
        primeng_chart__WEBPACK_IMPORTED_MODULE_13__.ChartModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_14__.CheckboxModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_15__.ChipsModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_16__.ChipModule,
        primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_17__.CodeHighlighterModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_19__.ConfirmPopupModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__.ColorPickerModule,
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_21__.ContextMenuModule,
        primeng_dataview__WEBPACK_IMPORTED_MODULE_22__.DataViewModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_24__.DividerModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_25__.DropdownModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_26__.FieldsetModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__.FileUploadModule,
        primeng_galleria__WEBPACK_IMPORTED_MODULE_28__.GalleriaModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_29__.ImageModule,
        primeng_inplace__WEBPACK_IMPORTED_MODULE_30__.InplaceModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_31__.InputNumberModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_32__.InputMaskModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_33__.InputSwitchModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_34__.InputTextModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_35__.InputTextareaModule,
        primeng_knob__WEBPACK_IMPORTED_MODULE_36__.KnobModule,
        primeng_lightbox__WEBPACK_IMPORTED_MODULE_37__.LightboxModule,
        primeng_listbox__WEBPACK_IMPORTED_MODULE_38__.ListboxModule,
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_39__.MegaMenuModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_40__.MenuModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_41__.MenubarModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_42__.MessageModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_43__.MessagesModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_44__.MultiSelectModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_45__.OrderListModule,
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_46__.OrganizationChartModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_47__.OverlayPanelModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_48__.PaginatorModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_49__.PanelModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_50__.PanelMenuModule,
        primeng_password__WEBPACK_IMPORTED_MODULE_51__.PasswordModule,
        primeng_picklist__WEBPACK_IMPORTED_MODULE_52__.PickListModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_53__.ProgressBarModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_54__.RadioButtonModule,
        primeng_rating__WEBPACK_IMPORTED_MODULE_55__.RatingModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_56__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_57__.ScrollPanelModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_58__.ScrollTopModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_59__.SelectButtonModule,
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_60__.SidebarModule,
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_61__.SkeletonModule,
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_62__.SlideMenuModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_63__.SliderModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_64__.SplitButtonModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_65__.SplitterModule,
        primeng_steps__WEBPACK_IMPORTED_MODULE_66__.StepsModule,
        primeng_styleclass__WEBPACK_IMPORTED_MODULE_67__.StyleClassModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_68__.TagModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_69__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_71__.TabViewModule,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_72__.TerminalModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__.TieredMenuModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_74__.TimelineModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_75__.ToastModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__.ToggleButtonModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__.ToolbarModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_79__.TreeModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__.TreeSelectModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_81__.TreeTableModule,
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__.VirtualScrollerModule] }); })();


/***/ }),

/***/ 7176:
/*!*****************************************!*\
  !*** ./src/app/app.topbar.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTopBarComponent": () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.main.component */ 7330);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = function (a0) { return { "layout-topbar-menu-mobile-active": a0 }; };
class AppTopBarComponent {
    constructor(appMain) {
        this.appMain = appMain;
    }
}
AppTopBarComponent.ɵfac = function AppTopBarComponent_Factory(t) { return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent)); };
AppTopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppTopBarComponent, selectors: [["app-topbar"]], decls: 20, vars: 4, consts: [[1, "layout-topbar"], ["routerLink", "", 1, "layout-topbar-logo"], ["alt", "logo", 3, "src"], ["href", "#", 1, "p-link", "layout-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-bars"], ["href", "#", 1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 3, "ngClass"], ["href", "#", 1, "p-link", "layout-topbar-button"], [1, "pi", "pi-calendar"], [1, "pi", "pi-cog"], [1, "pi", "pi-user"]], template: function AppTopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppTopBarComponent_Template_a_click_3_listener($event) { return ctx.appMain.toggleMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppTopBarComponent_Template_a_click_5_listener($event) { return ctx.appMain.toggleTopMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.appMain.config.dark ? "logo-white" : "uni-logo-centered", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.appMain.topMenuActive));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], encapsulation: 2 });


/***/ }),

/***/ 1908:
/*!*******************************************************!*\
  !*** ./src/app/components/access/access.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessComponent": () => (/* binding */ AccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AccessComponent {
}
AccessComponent.ɵfac = function AccessComponent_Factory(t) { return new (t || AccessComponent)(); };
AccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessComponent, selectors: [["app-access"]], decls: 18, vars: 0, consts: [[1, "surface-0", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "grid", "justify-content-center", "p-2", "lg:p-0", 2, "min-width", "80%"], [1, "col-12", "mt-5", "xl:mt-0", "text-center"], ["src", "assets/layout/images/logo-orange.svg", "alt", "Sakai logo", 1, "mb-5", 2, "width", "81px", "height", "60px"], [1, "col-12", "xl:col-6", 2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)"], [1, "h-full", "w-full", "m-0", "py-7", "px-4", 2, "border-radius", "53px", "background", "linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"], [1, "grid", "flex", "flex-column", "align-items-center"], [1, "flex", "justify-content-center", "align-items-center", "bg-orange-500", "border-circle", 2, "width", "3.2rem", "height", "3.2rem"], [1, "text-50", "pi", "pi-fw", "pi-lock", "text-2xl"], [1, "text-900", "font-bold", "text-4xl", "lg:text-5xl", "mb-2"], [1, "text-600", "text-center"], ["src", "assets/layout/images/asset-access.svg", "alt", "Access denied", "width", "80%", 1, "mt-5"], [1, "col-12", "mt-5", "text-center"], [1, "pi", "pi-fw", "pi-arrow-left", "text-blue-500", "mr-2", 2, "vertical-align", "center"], ["href", "#", 1, "text-blue-500"]], template: function AccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Access Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You do not have the necesary permisions. Please contact admins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 101:
/*!***************************************************!*\
  !*** ./src/app/components/crud/crud.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudComponent": () => (/* binding */ CrudComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_productservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/productservice */ 3906);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fileupload */ 7197);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/rating */ 8887);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ 7288);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 4086);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/radiobutton */ 5949);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputnumber */ 9721);



















function CrudComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.openNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.deleteSelectedProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.selectedProducts || !ctx_r0.selectedProducts.length);
} }
function CrudComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-fileUpload", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r2.exportCSV(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxFileSize", 1000000);
} }
function CrudComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Manage Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CrudComponent_ng_template_9_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r2.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function CrudComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-tableHeaderCheckbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p-sortIcon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-sortIcon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-sortIcon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "p-sortIcon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "p-sortIcon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "p-sortIcon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-tableCheckbox", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 42)(4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 42)(8, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 42)(12, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 45)(16, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 42)(21, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 42)(25, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "p-rating", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td", 42)(29, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td")(34, "div", 47)(35, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_11_Template_button_click_35_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const product_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.editProduct(product_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_11_Template_button_click_36_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const product_r18 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.deleteProduct(product_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const product_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r18.code || product_r18.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r18.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/demo/images/product/" + product_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 13, product_r18.price, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r18.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", product_r18.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("product-badge status-" + (product_r18.inventoryStatus ? product_r18.inventoryStatus.toLowerCase() : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r18.inventoryStatus);
} }
function CrudComponent_ng_template_13_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 77);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/demo/images/product/" + ctx_r22.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r22.product.image);
} }
function CrudComponent_ng_template_13_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_template_13_ng_template_14_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("product-badge status-" + ctx_r26.product.inventoryStatus.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r26.product.inventoryStatus.label);
} }
function CrudComponent_ng_template_13_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CrudComponent_ng_template_13_ng_template_14_span_0_Template, 2, 3, "span", 79);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.product && ctx_r24.product.inventoryStatus);
} }
function CrudComponent_ng_template_13_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("product-badge status-" + status_r27.value.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](status_r27.label);
} }
const _c0 = function (a0) { return { "ng-invalid ng-dirty": a0 }; };
function CrudComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CrudComponent_ng_template_13_img_0_Template, 1, 2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51)(2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.product.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CrudComponent_ng_template_13_small_5_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 51)(7, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.product.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 51)(11, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Inventory Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p-dropdown", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_p_dropdown_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.product.inventoryStatus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CrudComponent_ng_template_13_ng_template_14_Template, 1, 1, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CrudComponent_ng_template_13_ng_template_15_Template, 2, 3, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 51)(17, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 62)(20, "div", 63)(21, "p-radioButton", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_p_radioButton_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.product.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Accessories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 63)(25, "p-radioButton", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_p_radioButton_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.product.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Clothing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 63)(29, "p-radioButton", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_p_radioButton_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.product.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Electronics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 63)(33, "p-radioButton", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_p_radioButton_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.product.category = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Fitness");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 62)(37, "div", 72)(38, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p-inputNumber", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_p_inputNumber_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.product.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 72)(42, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p-inputNumber", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_ng_template_13_Template_p_inputNumber_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.product.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx_r6.submitted && !ctx_r6.product.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.submitted && !ctx_r6.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r6.statuses)("ngModel", ctx_r6.product.inventoryStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.product.quantity);
} }
function CrudComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.hideDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.saveProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CrudComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Are you sure you want to delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.product.name);
} }
function CrudComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.deleteProductDialog = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.deleteProductsDialog = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudComponent_ng_template_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.confirmDeleteSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["name", "country.name", "representative.name", "status"]; };
const _c2 = function () { return [10, 20, 30]; };
const _c3 = function () { return { width: "450px" }; };
class CrudComponent {
    constructor(productService, messageService, confirmationService) {
        this.productService = productService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.deleteProductDialog = false;
        this.deleteProductsDialog = false;
        this.rowsPerPageOptions = [5, 10, 20];
    }
    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];
        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }
    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }
    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }
    editProduct(product) {
        this.product = Object.assign({}, product);
        this.productDialog = true;
    }
    deleteProduct(product) {
        this.deleteProductDialog = true;
        this.product = Object.assign({}, product);
    }
    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = null;
    }
    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.product = {};
    }
    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    saveProduct() {
        this.submitted = true;
        if (this.product.name.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }
            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }
    findIndexById(id) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    createId() {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
CrudComponent.ɵfac = function CrudComponent_Factory(t) { return new (t || CrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_productservice__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.ConfirmationService)); };
CrudComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrudComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_2__.ConfirmationService])], decls: 26, vars: 28, consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["styleClass", "mb-4"], ["pTemplate", "left"], ["pTemplate", "right"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "selectionMode", "multiple", "dataKey", "id", 3, "value", "columns", "rows", "globalFilterFields", "paginator", "rowsPerPageOptions", "showCurrentPageReport", "selection", "rowHover", "selectionChange"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["header", "Product Details", 1, "p-fluid", 3, "visible", "modal", "visibleChange"], ["pTemplate", "content"], ["pTemplate", "footer"], ["header", "Confirm", 3, "visible", "modal", "visibleChange"], [1, "flex", "align-items-center", "justify-content-center"], [1, "pi", "pi-exclamation-triangle", "mr-3", 2, "font-size", "2rem"], [4, "ngIf"], [1, "my-2"], ["pButton", "", "pRipple", "", "label", "New", "icon", "pi pi-plus", 1, "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "label", "Delete", "icon", "pi pi-trash", 1, "p-button-danger", 3, "disabled", "click"], ["mode", "basic", "accept", "image/*", "label", "Import", "chooseLabel", "Import", 1, "mr-2", "inline-block", 3, "maxFileSize"], ["pButton", "", "pRipple", "", "label", "Export", "icon", "pi pi-upload", 1, "p-button-help", 3, "click"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-between", "md:align-items-center"], [1, "m-0"], [1, "block", "mt-2", "md:mt-0", "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "code"], ["field", "code"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "rating"], ["field", "rating"], ["pSortableColumn", "inventoryStatus"], ["field", "inventoryStatus"], [3, "value"], [2, "width", "14%", "min-width", "10rem"], [1, "p-column-title"], ["width", "100", 1, "shadow-4", 3, "src", "alt"], [2, "width", "14%", "min-width", "8rem"], [3, "ngModel", "readonly", "cancel"], [1, "flex"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", 3, "click"], ["width", "150", "class", "mt-0 mx-auto mb-5 block shadow-2", 3, "src", "alt", 4, "ngIf"], [1, "field"], ["for", "name"], ["type", "text", "pInputText", "", "id", "name", "required", "", "autofocus", "", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "ng-dirty ng-invalid", 4, "ngIf"], ["for", "description"], ["id", "description", "pInputTextarea", "", "required", "", "rows", "3", "cols", "20", 3, "ngModel", "ngModelChange"], ["for", "status"], ["id", "status", "optionLabel", "label", "placeholder", "Select a Status", 3, "options", "ngModel", "ngModelChange"], ["pTemplate", "selectedItem"], ["pTemplate", "status"], [1, "mb-3"], [1, "formgrid", "grid"], [1, "field-radiobutton", "col-6"], ["id", "category1", "name", "category", "value", "Accessories", 3, "ngModel", "ngModelChange"], ["for", "category1"], ["id", "category2", "name", "category", "value", "Clothing", 3, "ngModel", "ngModelChange"], ["for", "category2"], ["id", "category3", "name", "category", "value", "Electronics", 3, "ngModel", "ngModelChange"], ["for", "category3"], ["id", "category4", "name", "category", "value", "Fitness", 3, "ngModel", "ngModelChange"], ["for", "category4"], [1, "field", "col"], ["for", "price"], ["id", "price", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngModel", "ngModelChange"], ["for", "quantity"], ["id", "quantity", 3, "ngModel", "ngModelChange"], ["width", "150", 1, "mt-0", "mx-auto", "mb-5", "block", "shadow-2", 3, "src", "alt"], [1, "ng-dirty", "ng-invalid"], [3, "class", 4, "ngIf"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times", 1, "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check", 1, "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", "label", "No", 1, "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", "label", "Yes", 1, "p-button-text", 3, "click"]], template: function CrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CrudComponent_ng_template_5_Template, 3, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CrudComponent_ng_template_6_Template, 2, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CrudComponent_Template_p_table_selectionChange_7_listener($event) { return ctx.selectedProducts = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CrudComponent_ng_template_9_Template, 6, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CrudComponent_ng_template_10_Template, 24, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CrudComponent_ng_template_11_Template, 37, 16, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-dialog", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function CrudComponent_Template_p_dialog_visibleChange_12_listener($event) { return ctx.productDialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CrudComponent_ng_template_13_Template, 45, 15, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CrudComponent_ng_template_14_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p-dialog", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function CrudComponent_Template_p_dialog_visibleChange_15_listener($event) { return ctx.deleteProductDialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CrudComponent_span_18_Template, 5, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CrudComponent_ng_template_19_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p-dialog", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function CrudComponent_Template_p_dialog_visibleChange_20_listener($event) { return ctx.deleteProductsDialog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Are you sure you want to delete selected products?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CrudComponent_ng_template_25_Template, 2, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.products)("columns", ctx.cols)("rows", 10)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1))("rows", 10)("paginator", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c2))("showCurrentPageReport", true)("selection", ctx.selectedProducts)("rowHover", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.productDialog)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.deleteProductDialog)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.deleteProductsDialog)("modal", true);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast, primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__.FileUpload, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableHeaderCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableCheckbox, primeng_rating__WEBPACK_IMPORTED_MODULE_10__.Rating, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextarea, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_16__.RadioButton, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_17__.InputNumber], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CurrencyPipe], styles: [".product-badge[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock[_ngcontent-%COMP%] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock[_ngcontent-%COMP%] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock[_ngcontent-%COMP%] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.customer-badge.status-qualified[_ngcontent-%COMP%] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified[_ngcontent-%COMP%] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation[_ngcontent-%COMP%] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new[_ngcontent-%COMP%] {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal[_ngcontent-%COMP%] {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal[_ngcontent-%COMP%] {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.order-badge[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.order-badge.order-delivered[_ngcontent-%COMP%] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled[_ngcontent-%COMP%] {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending[_ngcontent-%COMP%] {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned[_ngcontent-%COMP%] {\n  background: #ECCFFF;\n  color: #694382;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBQ1I7QUFFSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUFSO0FBR0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFEUjtBQUtBO0VBQ0ksbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBRlI7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUhSO0FBTUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFKUjtBQU9JO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFRSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQU5SO0FBU0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFQUjtBQVdBO0VBQ0ksbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFSSjtBQVVJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBUlI7QUFXSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQVRSO0FBWUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFWUjtBQWFJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBWFIiLCJmaWxlIjoiYmFkZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IC4yNWVtIC41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcbiAgICAmLnN0YXR1cy1pbnN0b2NrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQzhFNkM5O1xyXG4gICAgICAgIGNvbG9yOiAjMjU2MDI5O1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdHVzLW91dG9mc3RvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkNERDI7XHJcbiAgICAgICAgY29sb3I6ICNDNjM3Mzc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtbG93c3RvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRUVEQUY7XHJcbiAgICAgICAgY29sb3I6ICM4QTUzNDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b21lci1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IC4yNWVtIC41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcbiAgICAmLnN0YXR1cy1xdWFsaWZpZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDOEU2Qzk7XHJcbiAgICAgICAgY29sb3I6ICMyNTYwMjk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtdW5xdWFsaWZpZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkNERDI7XHJcbiAgICAgICAgY29sb3I6ICNDNjM3Mzc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtbmVnb3RpYXRpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRUVEQUY7XHJcbiAgICAgICAgY29sb3I6ICM4QTUzNDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtbmV3IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQjNFNUZDO1xyXG4gICAgICAgIGNvbG9yOiAjMjM1NDdCO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3RhdHVzLXJlbmV3YWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNFQ0NGRkY7XHJcbiAgICAgICAgY29sb3I6ICM2OTQzODI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtcHJvcG9zYWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkQ4QjI7XHJcbiAgICAgICAgY29sb3I6ICM4MDVCMzY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcmRlci1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IC4yNWVtIC41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcbiAgICAmLm9yZGVyLWRlbGl2ZXJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0M4RTZDOTtcclxuICAgICAgICBjb2xvcjogIzI1NjAyOTtcclxuICAgIH1cclxuXHJcbiAgICAmLm9yZGVyLWNhbmNlbGxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQ0REMjtcclxuICAgICAgICBjb2xvcjogI0M2MzczNztcclxuICAgIH1cclxuXHJcbiAgICAmLm9yZGVyLXBlbmRpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRUVEQUY7XHJcbiAgICAgICAgY29sb3I6ICM4QTUzNDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcmRlci1yZXR1cm5lZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0VDQ0ZGRjtcclxuICAgICAgICBjb2xvcjogIzY5NDM4MjtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_productservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/productservice */ 3906);
/* harmony import */ var _service_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/app.config.service */ 3550);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menu */ 5207);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chart */ 3252);










function DashboardComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-sortIcon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-sortIcon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function DashboardComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/product/", product_r4.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 4, product_r4.price, "USD"));
} }
const _c0 = function () { return { width: "2.5rem", height: "2.5rem" }; };
const _c1 = function () { return { height: "8px" }; };
const _c2 = function () { return { width: "50%" }; };
const _c3 = function () { return { width: "16%" }; };
const _c4 = function () { return { width: "67%" }; };
const _c5 = function () { return { width: "35%" }; };
const _c6 = function () { return { width: "75%" }; };
const _c7 = function () { return { width: "40%" }; };
const _c8 = "linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)";
const _c9 = function () { return { borderRadius: "1rem", background: _c8 }; };
class DashboardComponent {
    constructor(productService, configService) {
        this.productService = productService;
        this.configService = configService;
    }
    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
        this.productService.getProductsSmall().then(data => this.products = data);
        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#2f4860',
                    borderColor: '#2f4860',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#00bb7e',
                    borderColor: '#00bb7e',
                    tension: .4
                }
            ]
        };
    }
    updateChartOptions() {
        if (this.config.dark)
            this.applyDarkTheme();
        else
            this.applyLightTheme();
    }
    applyDarkTheme() {
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };
    }
    applyLightTheme() {
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef',
                    }
                },
            }
        };
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_productservice__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["ng-component"]], decls: 200, vars: 43, consts: [[1, "grid"], [1, "col-12", "lg:col-6", "xl:col-3"], [1, "card", "mb-0"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], [1, "text-900", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-cart", "text-blue-500", "text-xl"], [1, "text-green-500", "font-medium"], [1, "text-500"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-map-marker", "text-orange-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-cyan-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-inbox", "text-cyan-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-comment", "text-purple-500", "text-xl"], [1, "col-12", "xl:col-6"], [1, "card"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "flex", "justify-content-between", "align-items-center", "mb-5"], ["pButton", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [3, "popup", "model"], ["menu", ""], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-column", "md:flex-row", "md:align-items-center", "md:justify-content-between", "mb-4"], [1, "text-900", "font-medium", "mr-2", "mb-1", "md:mb-0"], [1, "mt-1", "text-600"], [1, "mt-2", "md:mt-0", "flex", "align-items-center"], [1, "surface-300", "border-round", "overflow-hidden", "w-10rem", "lg:w-6rem", 3, "ngStyle"], [1, "bg-orange-500", "h-full", 3, "ngStyle"], [1, "text-orange-500", "ml-3", "font-medium"], [1, "mt-2", "md:mt-0", "ml-0", "md:ml-8", "flex", "align-items-center"], [1, "bg-cyan-500", "h-full", 3, "ngStyle"], [1, "text-cyan-500", "ml-3", "font-medium"], [1, "bg-pink-500", "h-full", 3, "ngStyle"], [1, "text-pink-500", "ml-3", "font-medium"], [1, "bg-green-500", "h-full", 3, "ngStyle"], [1, "text-green-500", "ml-3", "font-medium"], [1, "bg-purple-500", "h-full", 3, "ngStyle"], [1, "text-purple-500", "ml-3", "font-medium"], [1, "bg-teal-500", "h-full", 3, "ngStyle"], [1, "text-teal-500", "ml-3", "font-medium"], ["type", "line", 3, "data", "options"], [1, "flex", "align-items-center", "justify-content-between", "mb-4"], [1, "block", "text-600", "font-medium", "mb-3"], [1, "p-0", "mx-0", "mt-0", "mb-4", "list-none"], [1, "flex", "align-items-center", "py-2", "border-bottom-1", "surface-border"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "pi", "pi-dollar", "text-xl", "text-blue-500"], [1, "text-900", "line-height-3"], [1, "text-700"], [1, "text-blue-500"], [1, "flex", "align-items-center", "py-2"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "pi", "pi-download", "text-xl", "text-orange-500"], [1, "text-700", "line-height-3"], [1, "text-blue-500", "font-medium"], [1, "p-0", "m-0", "list-none"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-pink-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "pi", "pi-question", "text-xl", "text-pink-500"], [1, "px-4", "py-5", "shadow-2", "flex", "flex-column", "md:flex-row", "md:align-items-center", "justify-content-between", "mb-3", 3, "ngStyle"], [1, "text-blue-100", "font-medium", "text-xl", "mt-2", "mb-3"], [1, "text-white", "font-medium", "text-5xl"], [1, "mt-4", "mr-auto", "md:mt-0", "md:mr-0"], ["target", "_blank", "href", "https://www.primefaces.org/primeblocks-ng", 1, "p-button", "font-bold", "px-5", "py-3", "p-button-warning", "p-button-rounded", "p-button-raised"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], [2, "width", "15%", "min-width", "5rem"], ["width", "50", 1, "shadow-4", 3, "src", "alt"], [2, "width", "35%", "min-width", "7rem"], [2, "width", "35%", "min-width", "8rem"], [2, "width", "15%"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button", "p-component", "p-button-text", "p-button-icon-only"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "152");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "24 new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "since last visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "div")(19, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "$2.100");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "%52+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "since last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "div")(33, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "28441");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "520 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "newly registered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 1)(44, "div", 2)(45, "div", 3)(46, "div")(47, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "152 Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "85 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "responded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 16)(58, "div", 17)(59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Recent Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, DashboardComponent_ng_template_62_Template, 11, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, DashboardComponent_ng_template_63_Template, 10, 7, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 17)(65, "div", 21)(66, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Best Selling Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div")(69, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_69_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](71); return _r2.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "p-menu", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ul", 25)(73, "li", 26)(74, "div")(75, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Space T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Clothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 29)(80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "%50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li", 26)(85, "div")(86, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Portal Sticker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 33)(91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "%16");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "li", 26)(96, "div")(97, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Supernova Sticker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 33)(102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "%67");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "li", 26)(107, "div")(108, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Wonders Notebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 33)(113, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "%35");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li", 26)(118, "div")(119, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Mat Black Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 33)(124, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "%75");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "li", 26)(129, "div")(130, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Robots T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Clothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 33)(135, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "%40");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 16)(140, "div", 17)(141, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Sales Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "p-chart", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 17)(145, "div", 45)(146, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div")(149, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_149_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](71); return _r2.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "p-menu", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "TODAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "ul", 47)(155, "li", 48)(156, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Richard Jones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " has purchased a blue t-shirt for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "79$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "li", 54)(165, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Your request for withdrawal of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "2500$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, " has been initiated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "YESTERDAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "ul", 59)(175, "li", 48)(176, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Keyser Wick ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, " has purchased a black jacket for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "59$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "li", 48)(185, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Jane Davis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, " has posted a new questions about your product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 62)(192, "div")(193, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "TAKE THE NEXT STEP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Try PrimeBlocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 65)(198, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.products)("paginator", true)("rows", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popup", true)("model", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.chartData)("options", ctx.chartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popup", true)("model", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c9));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_table__WEBPACK_IMPORTED_MODULE_4__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_4__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_4__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, primeng_chart__WEBPACK_IMPORTED_MODULE_9__.UIChart], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 6359:
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ErrorComponent {
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 18, vars: 0, consts: [[1, "surface-0", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "grid", "justify-content-center", "p-2", "lg:p-0", 2, "min-width", "80%"], [1, "col-12", "mt-5", "xl:mt-0", "text-center"], ["src", "assets/layout/images/logo-error.svg", "alt", "Sakai logo", 1, "mb-5", 2, "width", "81px", "height", "60px"], [1, "col-12", "xl:col-6", 2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "h-full", "w-full", "m-0", "py-7", "px-4", 2, "border-radius", "53px", "background", "linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"], [1, "grid", "flex", "flex-column", "align-items-center"], [1, "flex", "justify-content-center", "align-items-center", "bg-pink-500", "border-circle", 2, "height", "3.2rem", "width", "3.2rem"], [1, "pi", "pi-fw", "pi-exclamation-circle", "text-2xl", "text-white"], [1, "text-900", "font-bold", "text-5xl", "mb-2"], [1, "text-600"], ["src", "assets/layout/images/asset-error.svg", "alt", "Error", "width", "80%", 1, "mt-5"], [1, "col-12", "mt-5", "text-center"], [1, "pi", "pi-fw", "pi-arrow-left", "text-blue-500", "mr-2", 2, "vertical-align", "center"], ["href", "#", 1, "text-blue-500"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Error Occured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Requested resource is not available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 7312:
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotfoundComponent": () => (/* binding */ NotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NotfoundComponent {
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 41, vars: 0, consts: [[1, "surface-0", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "grid", "justify-content-center", "p-2", "lg:p-0", 2, "min-width", "80%"], [1, "col-12", "mt-5", "xl:mt-0", "text-center"], ["src", "assets/layout/images/logo-blue.svg", "alt", "Sakai logo", 1, "mb-5", 2, "width", "81px", "height", "60px"], [1, "col-12", "xl:col-6", 2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "flex", "justify-content-center", "h-full", "w-full", "m-0", "py-7", "px-4", 2, "border-radius", "53px", "background", "linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"], [1, "grid", "flex-column", "align-items-center"], [1, "text-blue-500", "font-bold", "text-3xl"], [1, "text-900", "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "text-600"], ["href", "/", 1, "col-12", "flex", "align-items-center", "py-5", "mt-6", "border-300", "border-bottom-1"], [1, "flex", "justify-content-center", "align-items-center", "bg-cyan-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "text-50", "pi", "pi-fw", "pi-table", "text-2xl"], [1, "ml-4"], [1, "text-900", "lg:text-xl", "font-medium", "mb-0", "block"], [1, "text-600", "lg:text-xl"], ["href", "/", 1, "col-12", "flex", "align-items-center", "py-5", "border-300", "border-bottom-1"], [1, "flex", "justify-content-center", "align-items-center", "bg-orange-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-question-circle", "text-50", "text-2xl"], [1, "text-900", "lg:text-xl", "font-medium", "mb-0"], [1, "flex", "justify-content-center", "align-items-center", "bg-indigo-400", "border-round", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-unlock", "text-50", "text-2xl"], [1, "col-12", "mt-5", "text-center"], [1, "pi", "pi-fw", "pi-arrow-left", "text-blue-500", "mr-2", 2, "vertical-align", "center"], ["href", "#", 1, "text-blue-500"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Looks like you are lost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Requested resource is not available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10)(14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ultricies mi quis hendrerit dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16)(22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13)(25, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Solution Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phasellus faucibus scelerisque eleifend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16)(30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13)(33, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Permission Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Accumsan in nisl nisi scelerisque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 3550:
/*!***********************************************!*\
  !*** ./src/app/service/app.config.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ConfigService {
    constructor() {
        this.config = {
            theme: 'lara-light-indigo',
            dark: false,
            inputStyle: 'outlined',
            ripple: true
        };
        this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.configUpdate$ = this.configUpdate.asObservable();
    }
    updateConfig(config) {
        this.config = config;
        this.configUpdate.next(config);
    }
    getConfig() {
        return this.config;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });


/***/ }),

/***/ 6183:
/*!*********************************************!*\
  !*** ./src/app/service/app.menu.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MenuService {
    constructor() {
        this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.menuSource$ = this.menuSource.asObservable();
        this.resetSource$ = this.resetSource.asObservable();
    }
    onMenuStateChange(key) {
        this.menuSource.next(key);
    }
    reset() {
        this.resetSource.next(true);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });


/***/ }),

/***/ 8748:
/*!*******************************************!*\
  !*** ./src/app/service/countryservice.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class CountryService {
    constructor(http) {
        this.http = http;
    }
    getCountries() {
        return this.http.get('assets/demo/data/countries.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CountryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac });


/***/ }),

/***/ 7083:
/*!********************************************!*\
  !*** ./src/app/service/customerservice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class CustomerService {
    constructor(http) {
        this.http = http;
    }
    getCustomersSmall() {
        return this.http.get('assets/demo/data/customers-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getCustomersMedium() {
        return this.http.get('assets/demo/data/customers-medium.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getCustomersLarge() {
        return this.http.get('assets/demo/data/customers-large.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac });


/***/ }),

/***/ 9082:
/*!*****************************************!*\
  !*** ./src/app/service/eventservice.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class EventService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.http.get('assets/demo/data/scheduleevents.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac });


/***/ }),

/***/ 3535:
/*!****************************************!*\
  !*** ./src/app/service/iconservice.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconService": () => (/* binding */ IconService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class IconService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'assets/demo/data/icons.json';
    }
    getIcons() {
        return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            this.icons = response.icons;
            return this.icons;
        }));
    }
}
IconService.ɵfac = function IconService_Factory(t) { return new (t || IconService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
IconService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IconService, factory: IconService.ɵfac });


/***/ }),

/***/ 2959:
/*!****************************************!*\
  !*** ./src/app/service/nodeservice.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeService": () => (/* binding */ NodeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class NodeService {
    constructor(http) {
        this.http = http;
    }
    getFiles() {
        return this.http.get('assets/demo/data/files.json')
            .toPromise()
            .then(res => res.data);
    }
    getLazyFiles() {
        return this.http.get('assets/demo/data/files-lazy.json')
            .toPromise()
            .then(res => res.data);
    }
    getFilesystem() {
        return this.http.get('assets/demo/data/filesystem.json')
            .toPromise()
            .then(res => res.data);
    }
    getLazyFilesystem() {
        return this.http.get('assets/demo/data/filesystem-lazy.json')
            .toPromise()
            .then(res => res.data);
    }
}
NodeService.ɵfac = function NodeService_Factory(t) { return new (t || NodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
NodeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac });


/***/ }),

/***/ 5895:
/*!*****************************************!*\
  !*** ./src/app/service/photoservice.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class PhotoService {
    constructor(http) {
        this.http = http;
    }
    getImages() {
        return this.http.get('assets/demo/data/photos.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
}
PhotoService.ɵfac = function PhotoService_Factory(t) { return new (t || PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PhotoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhotoService, factory: PhotoService.ɵfac });


/***/ }),

/***/ 3906:
/*!*******************************************!*\
  !*** ./src/app/service/productservice.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ProductService {
    constructor(http) {
        this.http = http;
    }
    getProductsSmall() {
        return this.http.get('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getProducts() {
        return this.http.get('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getProductsMixed() {
        return this.http.get('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getProductsWithOrdersSmall() {
        return this.http.get('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map