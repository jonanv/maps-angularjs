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
import { MapGoogleComponent } from './components/map-google/map-google.component';
import { MapLeafletComponent } from './components/map-leaflet/map-leaflet.component';
import { MapMapboxComponent } from './components/map-mapbox/map-mapbox.component';
import { MapMapBox3dComponent } from './components/map-map-box3d/map-map-box3d.component';
import { MapEditGoogleComponent } from './components/map-google/map-edit-google.component';

@NgModule({
  entryComponents: [
    MapEditGoogleComponent
  ],
  declarations: [
    AppComponent,
    MapGoogleComponent,
    MapLeafletComponent,
    MapMapboxComponent,
    MapMapBox3dComponent,
    MapEditGoogleComponent
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
