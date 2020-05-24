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
  markerPositions: Marker[] = [];
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

    // this.saveMarker();
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    console.log(marker.getPosition().toJSON());
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  deleteMarker(i: number) {
    // TODO: siempre envia la referencia #marker y la posicion 0, debe enviar el markerPosition
    console.log(i);
    // this.markerPositions.slice(i, 1);
    // this.saveMarker();
  }

  saveMarker() {
    localStorage.setItem('markerPositions', JSON.stringify(this.markerPositions));
  }

}
