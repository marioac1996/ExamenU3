import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import * as firebase from 'firebase/app';
var ExampleService = /** @class */ (function () {
    function ExampleService(afs) {
        this.afs = afs;
        this.exampleCollection = this.afs.collection('examples');
        this.examples = this.exampleCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            });
        }));
    }
    ExampleService.prototype.getExamples = function () {
        return this.examples;
    };
    ExampleService.prototype.getExample = function (id) {
        return this.exampleCollection.doc(id).valueChanges().pipe(take(1), map(function (example) {
            example.id = id;
            return example;
        }));
    };
    ExampleService.prototype.addExample = function (example) {
        return this.exampleCollection.add(example);
    };
    ExampleService.prototype.updateExample = function (example) {
        return this.exampleCollection.doc(example.id).update({
            nombre: example.nombre,
            observaciones: example.observaciones
        });
    };
    ExampleService.prototype.deleteExample = function (id) {
        return this.exampleCollection.doc(id).delete();
    };
    ExampleService.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ;
    ExampleService.prototype.uploadImage = function (imageURI, randomId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = firebase.storage().ref();
            var imageRef = storageRef.child('image').child(randomId);
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL()
                        .then(function (res) { return resolve(res); });
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    ExampleService.prototype.createTask = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = firebase.auth().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('tasks').add({
                title: value.title,
                description: value.description,
                image: value.image
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    ExampleService.prototype.updateTask = function (taskKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = firebase.auth().currentUser;
            _this.afs.collection('people').doc(currentUser.uid)
                .collection('task').doc(taskKey).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    ExampleService.prototype.deleteTask = function (taskKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = firebase.auth().currentUser;
            _this.afs.collection('people').doc(currentUser.uid)
                .collection('task').doc(taskKey).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    ExampleService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], ExampleService);
    return ExampleService;
}());
export { ExampleService };
//# sourceMappingURL=example.service.js.map