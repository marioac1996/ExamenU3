import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './services/AuthGuard.service';
var routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
    { path: 'example-list', loadChildren: './pages/example-list/example-list.module#ExampleListPageModule' },
    { path: 'example', loadChildren: './pages/example-details/example-details.module#ExampleDetailsPageModule', canActivate: [AuthGuard] },
    { path: 'example/:id', loadChildren: './pages/example-details/example-details.module#ExampleDetailsPageModule' },
    { path: '', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
    { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
    { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map