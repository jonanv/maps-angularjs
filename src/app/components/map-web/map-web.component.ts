import { Component, OnInit, ViewChild } from '@angular/core';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map-web',
  templateUrl: './map-web.component.html',
  styles: [
  ]
})
export class MapWebComponent implements OnInit {

  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  title: string = 'gmaps';
  zoom: number = 6;

  position = {
    lat: 51.678418,
    lng: 7.809007
  }

  label = {
    color: 'blue',
    text: 'Marcador'
  }

  constructor() { }

  ngOnInit(): void {
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

}
