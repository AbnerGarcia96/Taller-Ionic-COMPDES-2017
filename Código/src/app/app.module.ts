import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Inicio } from '../pages/inicio/inicio';
import { Modal } from '../pages/modal/modal';
import { EditarModalPage } from '../pages/editar-modal/editar-modal';
import { TabsPage } from '../pages/tabs/tabs';
import { NativePage } from '../pages/native/native';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';

export const config = {
  apiKey: "AIzaSyC8_KWEHKCB5GZK4bpqbPsQOcEGIbBe0MA",
  authDomain: "taller-ionic-3.firebaseapp.com",
  databaseURL: "https://taller-ionic-3.firebaseio.com",
  projectId: "taller-ionic-3",
  storageBucket: "taller-ionic-3.appspot.com",
  messagingSenderId: "806441653019"
};

@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Modal,
    EditarModalPage,
    NativePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio,
    Modal,
    EditarModalPage,
    NativePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
