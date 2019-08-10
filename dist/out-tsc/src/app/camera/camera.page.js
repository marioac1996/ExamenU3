import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from "@ionic-native/file/ngx";
import * as firebase from 'firebase';
var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl, camera, file) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.file = file;
    }
    CameraPage.prototype.ngOnInit = function () {
    };
    CameraPage.prototype.capture = function () {
        var _this = this;
        var cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(cameraOptions)
            .then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    }; // End of capture camera
    CameraPage.prototype.upload = function () {
        var _this = this;
        var storageRef = firebase.storage().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("images/" + filename + ".jpg");
        imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
            .then(function (snapshot) {
            // Do something here when the data is succesfully uploaded!
            _this.showSuccesfulUploadAlert();
        });
    };
    CameraPage.prototype.showSuccesfulUploadAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Uploaded!',
                            subHeader: 'Picture is uploaded to Firebase',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        // clear the previous photo data in the variable
                        this.captureDataUrl = "";
                        return [2 /*return*/];
                }
            });
        });
    };
    CameraPage.prototype.pickImage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, cameraInfo, blobInfo, uploadInfo, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 80,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        cameraInfo = _a.sent();
                        return [4 /*yield*/, this.makeFileIntoBlob(cameraInfo)];
                    case 3:
                        blobInfo = _a.sent();
                        return [4 /*yield*/, this.uploadToFirebase(blobInfo)];
                    case 4:
                        uploadInfo = _a.sent();
                        alert("File Upload Success " + uploadInfo.fileName);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        alert("File Upload Error " + e_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // FILE STUFF
    CameraPage.prototype.makeFileIntoBlob = function (_imagePath) {
        var _this = this;
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise(function (resolve, reject) {
            var fileName = "";
            _this.file
                .resolveLocalFilesystemUrl(_imagePath)
                .then(function (fileEntry) {
                var name = fileEntry.name, nativeURL = fileEntry.nativeURL;
                // get the path..
                var path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
                console.log("path", path);
                console.log("fileName", name);
                fileName = name;
                // we are provided the name, so now read the file into
                // a buffer
                return _this.file.readAsArrayBuffer(path, name);
            })
                .then(function (buffer) {
                // get the buffer and make a blob to be saved
                var imgBlob = new Blob([buffer], {
                    type: "image/jpeg"
                });
                console.log(imgBlob.type, imgBlob.size);
                resolve({
                    fileName: fileName,
                    imgBlob: imgBlob
                });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    /**
     *
     * @param _imageBlobInfo
     */
    CameraPage.prototype.uploadToFirebase = function (_imageBlobInfo) {
        console.log("uploadToFirebase");
        return new Promise(function (resolve, reject) {
            var fileRef = firebase.storage().ref("images/" + _imageBlobInfo.fileName);
            var uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
            uploadTask.on("state_changed", function (_snapshot) {
                console.log("snapshot progess " +
                    (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100);
            }, function (_error) {
                console.log(_error);
                reject(_error);
            }, function () {
                // completion...
                resolve(uploadTask.snapshot);
            });
        });
    };
    CameraPage = tslib_1.__decorate([
        Component({
            selector: 'app-camera',
            templateUrl: './camera.page.html',
            styleUrls: ['./camera.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, Camera, File])
    ], CameraPage);
    return CameraPage;
}());
export { CameraPage };
//# sourceMappingURL=camera.page.js.map