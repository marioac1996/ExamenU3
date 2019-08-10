import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExampleListPage } from './example-list.page';
var routes = [
    {
        path: '',
        component: ExampleListPage
    }
];
var ExampleListPageModule = /** @class */ (function () {
    function ExampleListPageModule() {
    }
    ExampleListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ExampleListPage]
        })
    ], ExampleListPageModule);
    return ExampleListPageModule;
}());
export { ExampleListPageModule };
//# sourceMappingURL=example-list.module.js.map