import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleService } from 'src/app/services/example.service';
import { ToastController } from '@ionic/angular';
var ExampleDetailsPage = /** @class */ (function () {
    function ExampleDetailsPage(activatedRoute, exampleService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.exampleService = exampleService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.example = {
            nombre: '',
            observaciones: ''
        };
    }
    ExampleDetailsPage.prototype.ngOnInit = function () {
    };
    ExampleDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.exampleService.getExample(id).subscribe(function (example) {
                _this.example = example;
            });
        }
    };
    ExampleDetailsPage.prototype.addExample = function () {
        var _this = this;
        this.exampleService.addExample(this.example).then(function () {
            _this.router.navigateByUrl('/');
            _this.showToast("Example added");
        }, function (err) {
            _this.showToast("There was a problem adding your example :(");
        });
    };
    ExampleDetailsPage.prototype.deleteExample = function () {
        var _this = this;
        this.exampleService.deleteExample(this.example.id).then(function () {
            _this.router.navigateByUrl('/');
            _this.showToast("Example deleted");
        }, function (err) {
            _this.showToast("There was a problem deleting your example :(");
        });
    };
    ExampleDetailsPage.prototype.updateExample = function () {
        var _this = this;
        this.exampleService.updateExample(this.example).then(function () {
            _this.showToast('Example Updated');
        }, function (err) {
            _this.showToast('There was a problem updating your example :(');
        });
    };
    ExampleDetailsPage.prototype.showToast = function (msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    ExampleDetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-example-details',
            templateUrl: './example-details.page.html',
            styleUrls: ['./example-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ExampleService,
            ToastController,
            Router])
    ], ExampleDetailsPage);
    return ExampleDetailsPage;
}());
export { ExampleDetailsPage };
//# sourceMappingURL=example-details.page.js.map