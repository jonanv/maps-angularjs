import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MapGoogleComponent } from './components/map-google/map-google.component';
import { MapLeafletComponent } from './components/map-leaflet/map-leaflet.component';
import { MapMapboxComponent } from './components/map-mapbox/map-mapbox.component';
import { MapMapBox3dComponent } from './components/map-map-box3d/map-map-box3d.component';


const routes: Routes = [
  { path: 'map-google', component: MapGoogleComponent },
  { path: 'map-leaflet', component: MapLeafletComponent },
  { path: 'map-mapbox', component: MapMapboxComponent },
  { path: 'map-mapbox-3d', component: MapMapBox3dComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'map-google' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
