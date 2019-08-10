import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [{
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'example-list',
                children: [{
                        path: '',
                        loadChildren: '../pages/example-list/example-list.module#ExampleListPageModule'
                    }
                ]
            },
            {
                path: 'camera',
                children: [{
                        path: '',
                        loadChildren: '../camera/camera.module#CameraPageModule'
                    }
                ]
            },
            {
                path: 'mapa',
                children: [{
                        path: '',
                        loadChildren: '../mapa/mapa.module#MapaPageModule'
                    }
                ]
            },
            {
                path: 'geolocation',
                children: [{
                        path: '',
                        loadChildren: '../geolocation/geolocation.module#GeolocationPageModule'
                    }
                ]
            }
        ]
    }
];
var TabsPageRoutinModule = /** @class */ (function () {
    function TabsPageRoutinModule() {
    }
    TabsPageRoutinModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TabsPageRoutinModule);
    return TabsPageRoutinModule;
}());
export { TabsPageRoutinModule };
//# sourceMappingURL=tabs.router.module.js.map