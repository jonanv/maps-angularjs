import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MapGoogleComponent } from './components/map-google/map-google.component';
import { MapLeafletComponent } from './components/map-leaflet/map-leaflet.component';


const routes: Routes = [
  { path: 'map-google', component: MapGoogleComponent },
  { path: 'map-leaflet', component: MapLeafletComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'map-google' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
