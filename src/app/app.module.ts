import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { App } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {AngularFireModule} from "angularfire2";
import {MenuPage} from "../pages/menu/menu";
import { AuthProvider } from '../providers/auth/auth';
import {AngularFireAuthModule} from "angularfire2/auth";
import {SettingsPage} from "../pages/settings/settings";
import {ComponentsModule} from "../components/components.module";
import {CreateNotePage} from "../pages/create-note/create-note";
import { NoteProvider } from '../providers/note/note';
import {AngularFirestoreModule} from "angularfire2/firestore";
import {ViewNotePage} from "../pages/view-note/view-note";

const firebaseConfig = {
  apiKey: "AIzaSyDDr4odv1_woIeygBZMBAN6vP8knRA60s4",
  authDomain: "notarin2-2428c.firebaseapp.com",
  databaseURL: "https://notarin2-2428c.firebaseio.com",
  projectId: "notarin2-2428c",
  storageBucket: "notarin2-2428c.appspot.com",
  messagingSenderId: "112925218288"
};

const PAGES = [
  App,
  HomePage,
  LoginPage,
  RegisterPage,
  MenuPage,
  SettingsPage,
  CreateNotePage,
  ViewNotePage
];

@NgModule({
  declarations: PAGES,
  imports: [
    BrowserModule,
    IonicModule.forRoot(App),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ComponentsModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: PAGES,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    NoteProvider
  ]
})
export class AppModule {}
