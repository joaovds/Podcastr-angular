import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayerComponent } from './components/player/player.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';

import { registerLocaleData } from '@angular/common';

import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent, PlayerComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
