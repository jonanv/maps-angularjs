import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Routing
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
