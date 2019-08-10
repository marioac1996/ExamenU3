import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.authenticationService.isAuthenticated();
    };
    AuthGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=AuthGuard.service.js.map