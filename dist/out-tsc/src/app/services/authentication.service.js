import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(afAuth) {
        this.afAuth = afAuth;
        this.authState = new BehaviorSubject(false);
    }
    AuthenticationService.prototype.registerUser = function (value) {
        return new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthenticationService.prototype.loginUser = function (value) {
        return new Promise(function (resolve, reject) {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthenticationService.prototype.logoutUser = function () {
        return new Promise(function (resolve, reject) {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(function () {
                    console.log("Log Out");
                    resolve();
                }).catch(function (error) {
                    reject();
                });
            }
        });
    };
    AuthenticationService.prototype.userDetails = function () {
        return firebase.auth().currentUser;
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.authState.value;
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map