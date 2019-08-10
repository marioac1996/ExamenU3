import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from "@angular/fire";
import {environment} from '../environments/environment';
import {AngularFirestoreModule,FirestoreSettingsToken} from '@angular/fire/firestore';
import {AuthenticationService} from './services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth'
import * as firebase from 'firebase'
import { AuthGuard } from './services/AuthGuard.service';
import { File } from "@ionic-native/file/ngx";
import {Geolocation} from '@ionic-native/geolocation/ngx';
firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule, 
  IonicModule.forRoot(), 
  AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  ReactiveFormsModule,
  AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken,useValue:{}},
    File,
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
