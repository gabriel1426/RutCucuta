import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RecuperarclavePage } from '../pages/recuperarclave/recuperarclave';
import { RegistroPage } from '../pages/registro/registro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CambiarPage } from '../pages/cambiar/cambiar';
import { MisrutasPage } from '../pages/misrutas/misrutas';
import { NuevarutaPage } from '../pages/nuevaruta/nuevaruta';
import { ServiciosProvider } from '../providers/servicios/servicios';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RecuperarclavePage,
    RegistroPage,
    CambiarPage,
    MisrutasPage,
    NuevarutaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RecuperarclavePage,
    RegistroPage,
    CambiarPage,
    MisrutasPage,
    NuevarutaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiciosProvider
  ]
})
export class AppModule {}
