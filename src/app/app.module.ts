import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiService } from './api/api';
import { reducer } from '../app/wheather/state/wheather.reducer';
import { WheatherEffects } from '../app/wheather/state/wheather.effect';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { FavorietComponent } from './shared/favoriet/favoriet.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FavorietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({wheather: reducer}),
    EffectsModule.forRoot([WheatherEffects]),
    AutocompleteLibModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
