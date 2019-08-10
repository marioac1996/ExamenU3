import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapaPage } from './mapa.page';
var routes = [
    {
        path: '',
        component: MapaPage
    }
];
var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MapaPage]
        })
    ], MapaPageModule);
    return MapaPageModule;
}());
export { MapaPageModule };
//# sourceMappingURL=mapa.module.js.map