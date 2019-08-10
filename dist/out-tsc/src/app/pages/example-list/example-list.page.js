import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';
import { AuthenticationService } from '../../services/authentication.service';
import { NavController } from '@ionic/angular';
var ExampleListPage = /** @class */ (function () {
    function ExampleListPage(exampleService, authService, navCtrl) {
        this.exampleService = exampleService;
        this.authService = authService;
        this.navCtrl = navCtrl;
    }
    ExampleListPage.prototype.ngOnInit = function () {
        if (this.authService.userDetails()) {
            this.examples = this.exampleService.getExamples();
        }
        else {
            this.navCtrl.navigateBack('');
        }
    };
    ExampleListPage.prototype.logout = function () {
        var _this = this;
        this.authService.logoutUser()
            .then(function (res) {
            console.log(res);
            _this.navCtrl.navigateBack('');
        }).catch(function (error) {
            console.log(error);
        });
    };
    ExampleListPage = tslib_1.__decorate([
        Component({
            selector: 'app-example-list',
            templateUrl: './example-list.page.html',
            styleUrls: ['./example-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ExampleService,
            AuthenticationService,
            NavController])
    ], ExampleListPage);
    return ExampleListPage;
}());
export { ExampleListPage };
//# sourceMappingURL=example-list.page.js.map