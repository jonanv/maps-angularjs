import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// Angular Google Maps
import { GoogleMapsModule } from "@angular/google-maps";

// Components
import { MapWebComponent } from './components/map-web/map-web.component';
import { MapLeafletComponent } from './components/map-leaflet/map-leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    MapWebComponent,
    MapLeafletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
