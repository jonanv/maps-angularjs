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

  center = { lat: 5.073379, lng: -75.499002 };
  markerOptions = { draggable: false };
  // markerPositions: google.maps.LatLngLiteral[] = [];
  markerPositions: Marker[] = [
    // { title: "Sin título", description: "Sin descripción", lat: 4.460275600752171, lng: -71.8515410625 },
    // { title: "Sin título", description: "Sin descripción", lat: 6.996165055279171, lng: -77.08103325 },
    // { title: "Sin título", description: "Sin descripción", lat: 5.860790060652973, lng: -69.9179473125 },
    // { title: "Sin título", description: "Sin descripción", lat: 5.13903536496996, lng: -76.5536895 }
  ];
  zoom = 7;
  display?: google.maps.LatLngLiteral;

  title: string = 'gmaps';
  label = {
    color: 'blue',
    text: 'Marcador'
  }

  constructor() {
    // let newMarker = new Marker(this.center.lat, this.center.lng);
    // this.markerPositions.push(newMarker);
    let markerPositions = localStorage.getItem('markerPositions') ? JSON.parse(localStorage.getItem('markerPositions')) : null;
    if(markerPositions) {
      this.markerPositions = markerPositions;
    }

  }

  ngOnInit(): void {
  }

  addMarker(event: google.maps.MouseEvent) {
    // this.markers.push(event.latLng.toJSON());
    const coords: { lat: number, lng: number } = event.latLng.toJSON();
    let newMarker = new Marker(coords.lat, coords.lng);
    this.markerPositions.push(newMarker);

    console.log(this.markerPositions);

    this.saveMarker();
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  saveMarker() {
    localStorage.setItem('markerPositions', JSON.stringify(this.markerPositions));
  }

}
