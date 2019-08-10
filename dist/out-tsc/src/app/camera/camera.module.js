import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CameraPage } from './camera.page';
var routes = [
    {
        path: '',
        component: CameraPage
    }
];
var CameraPageModule = /** @class */ (function () {
    function CameraPageModule() {
    }
    CameraPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CameraPage]
        })
    ], CameraPageModule);
    return CameraPageModule;
}());
export { CameraPageModule };
//# sourceMappingURL=camera.module.js.map