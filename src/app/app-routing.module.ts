import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/AuthGuard.service';
const routes: Routes = [
  { path: '', redirectTo: 'tabs/home', pathMatch: 'full' },

  { path: 'example-list', loadChildren: './pages/example-list/example-list.module#ExampleListPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'example', loadChildren: './pages/example-details/example-details.module#ExampleDetailsPageModule'},
  { path: 'example/:id', loadChildren: './pages/example-details/example-details.module#ExampleDetailsPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
