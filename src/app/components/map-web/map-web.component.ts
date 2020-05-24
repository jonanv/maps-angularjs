import { Component, OnInit, ViewChild } from '@angular/core';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map-web',
  templateUrl: './map-web.component.html',
  styles: [
  ]
})
export class MapWebComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  markers: Marker[] = [];

  title: string = 'gmaps';
  zoom: number = 6;

  position = {
    lat: 5.073379,
    lng: -75.499002
  }

  label = {
    color: 'blue',
    text: 'Marcador'
  }

  constructor() {
    const newMarker = new Marker(51.678418, 7.809007);
    console.log(newMarker);
    this.markers.push(newMarker);
  }

  ngOnInit(): void {
  }

  openInfoWindow(marker: MapMarker) {
    console.log(marker);
    this.infoWindow.open(marker);
  }

  addMarker(event: Event) {
    console.log(event);
  }

}
