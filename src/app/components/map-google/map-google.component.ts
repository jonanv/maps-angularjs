import { Component, OnInit, ViewChild } from '@angular/core';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styles: [
  ]
})
export class MapGoogleComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  center = { lat: 5.073379, lng: -75.499002 };
  markerOptions = { draggable: false };
  markerPositions: Marker[] = [];
  zoom = 7;
  display?: google.maps.LatLngLiteral;

  title: string = 'gmaps';
  label = {
    color: 'blue',
    text: 'Marcador'
  }

  markerLocation: Marker;
  markerArray: number;

  constructor() {
    // let newMarker = new Marker(this.center.lat, this.center.lng);
    // this.markerPositions.push(newMarker);

    this.loadMarker();
  }

  ngOnInit(): void {
  }

  loadMarker() {
    let markerPositions = localStorage.getItem('markerPositions') ? JSON.parse(localStorage.getItem('markerPositions')) : null;
    if(markerPositions) {
      this.markerPositions = markerPositions;
    }
  }

  addMarker(event: google.maps.MouseEvent) {
    const coords: { lat: number, lng: number } = event.latLng.toJSON();
    let newMarker = new Marker(coords.lat, coords.lng);
    this.markerPositions.push(newMarker);

    console.log(this.markerPositions);

    this.saveMarker();
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker, markerPosition: Marker, i: number) {
    // console.log(marker.getPosition().toJSON());
    // console.log(markerPosition);
    // console.log(i);
    this.markerLocation = markerPosition;
    this.markerArray = i;
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  deleteMarker(i: number) {
    console.log(i);
    this.markerPositions.splice(i, 1);
    this.saveMarker();
  }

  saveMarker() {
    localStorage.setItem('markerPositions', JSON.stringify(this.markerPositions));
  }

}
