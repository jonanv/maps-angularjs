import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MapWebComponent } from './components/map-web/map-web.component';
import { MapLeafletComponent } from './components/map-leaflet/map-leaflet.component';


const routes: Routes = [
  { path: 'map-google', component: MapWebComponent },
  { path: 'map-leaflet', component: MapLeafletComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'map-google' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
