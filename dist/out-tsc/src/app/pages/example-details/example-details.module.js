import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExampleDetailsPage } from './example-details.page';
var routes = [
    {
        path: '',
        component: ExampleDetailsPage
    }
];
var ExampleDetailsPageModule = /** @class */ (function () {
    function ExampleDetailsPageModule() {
    }
    ExampleDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ExampleDetailsPage]
        })
    ], ExampleDetailsPageModule);
    return ExampleDetailsPageModule;
}());
export { ExampleDetailsPageModule };
//# sourceMappingURL=example-details.module.js.map