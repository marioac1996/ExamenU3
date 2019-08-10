import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
var MapaPage = /** @class */ (function () {
    function MapaPage() {
    }
    MapaPage.prototype.ngOnInit = function () {
    };
    MapaPage.prototype.ngAfterContentInit = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: 18.702606, lng: -88.399572 },
            zoom: 14
        });
    };
    tslib_1.__decorate([
        ViewChild('mapElement'),
        tslib_1.__metadata("design:type", Object)
    ], MapaPage.prototype, "mapElement", void 0);
    MapaPage = tslib_1.__decorate([
        Component({
            selector: 'app-mapa',
            templateUrl: './mapa.page.html',
            styleUrls: ['./mapa.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MapaPage);
    return MapaPage;
}());
export { MapaPage };
//# sourceMappingURL=mapa.page.js.map