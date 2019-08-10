import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
var GeolocationPage = /** @class */ (function () {
    function GeolocationPage(geolocation) {
        this.geolocation = geolocation;
    }
    GeolocationPage.prototype.ngOnInit = function () {
    };
    GeolocationPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            var map = new google.maps.Map(_this.mapNativeElement.nativeElement, {
                center: { lat: 18.702606, lng: -88.399572 },
                zoom: 6
            });
            var infoWindow = new google.maps.InfoWindow;
            var pos = {
                lat: _this.latitude,
                lng: _this.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Lugar Encontrado.');
            infoWindow.open(map);
            map.setCenter(pos);
            var icon = {
                url: 'assets/icon/u.png',
                scaledSize: new google.maps.Size(50, 50),
            };
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Hola Mundo',
                icon: icon
            });
            var contentString = '<div id="content">' +
                '<div id="site">' +
                '</div>' +
                '<h1 id="firstHeading">UPB</h1>' +
                '<div id="bodyContent">' +
                '<img src="assets/icon/u.png" width="200">' +
                '<p><b>Universidad Politecnica de Bacalar</b>' +
                'El 20 de Enero de 2012, el Gobierno del Estado de Quintana Roo, por conducto del Ejecutivo Estatal y el Ejecutivo Federal por conducto de la Secretaría de Educación Pública, suscriben el Convenio de Coordinación para la Creación, Operación y Apoyo Financiero de la “Universidad Politécnica de Bacalar”, estableciéndose el compromiso por parte del Gobierno del Estado de expedir el ordenamiento jurídico  correspondiente. Considerando justificado y prioritario para la atención de las necesidades educativas de los jóvenes quintanarroenses la creación de la Universidad como una instancia efectiva en la formación de profesionistas responsables y comprometidos con el desarrollo de nuestro Estado.</p>'
                + '</div>'
                + '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 400
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        }).catch(function (error) {
            console.log('Error al obtener la ubicacion', error);
        });
    };
    tslib_1.__decorate([
        ViewChild('mapElement2'),
        tslib_1.__metadata("design:type", ElementRef)
    ], GeolocationPage.prototype, "mapNativeElement", void 0);
    GeolocationPage = tslib_1.__decorate([
        Component({
            selector: 'app-geolocation',
            templateUrl: './geolocation.page.html',
            styleUrls: ['./geolocation.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation])
    ], GeolocationPage);
    return GeolocationPage;
}());
export { GeolocationPage };
//# sourceMappingURL=geolocation.page.js.map