import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GeolocationPage } from './geolocation.page';
var routes = [
    {
        path: '',
        component: GeolocationPage
    }
];
var GeolocationPageModule = /** @class */ (function () {
    function GeolocationPageModule() {
    }
    GeolocationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GeolocationPage]
        })
    ], GeolocationPageModule);
    return GeolocationPageModule;
}());
export { GeolocationPageModule };
//# sourceMappingURL=geolocation.module.js.map