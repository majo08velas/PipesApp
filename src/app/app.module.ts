import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//configuracion del locale de la app
import localeEsCO from "@angular/common/locales/es-CO";
import localeFrCA from "@angular/common/locales/fr-CA";
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeEsCO)
registerLocaleData(localeFrCA)

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
      { provide:LOCALE_ID, useValue: 'es-CO' }//establece el es-CO como idioma por defecto
    ],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      BrowserAnimationsModule,
    ]
})
export class AppModule { }
