import { Component, OnInit, ViewChild } from '@angular/core';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marker } from '../../classes/marker.class';

import * as L from 'leaflet';

@Component({
  selector: 'app-map-web',
  templateUrl: './map-web.component.html',
  styles: [
  ]
})
export class MapWebComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  // markers: Marker[] = [];

  // title: string = 'gmaps';
  // zoom: number = 6;

  // position = {
  //   lat: 51.678418,
  //   lng: 7.809007
  // }

  // label = {
  //   color: 'blue',
  //   text: 'Marcador'
  // }

  map;

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  constructor() {
    // const newMarker = new Marker(51.678418, 7.809007);
    // console.log(newMarker);
    // this.markers.push(newMarker);
  }

  ngOnInit(): void {
    this.createMap();
  }

  createMap() {
    const parcThabor = {
      lat: 48.114384,
      lng: -1.669494

      // lat: 5.073378,
      // lng: -75.498967
    };
    const zoomLevel = 12;

    this.map = L.map('map', {
      center: [parcThabor.lat, parcThabor.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);

    const descriptionWikipedia = `
      Le parc du Thabor, situé à Rennes à proximité du centre-ville,
      est un parc public aménagé sur plus de dix hectares dont la particularité est de mêler un jardin à la française,
      un jardin à l’anglaise et un important jardin botanique.`;
    const popupOptions = {
      coords: parcThabor,
      text: descriptionWikipedia,
      open: true
    };
    this.addMarker(popupOptions);
  }

  addMarker({ coords, text, open }) {
    const marker = L.marker(
      [coords.lat, coords.lng],
      { icon: this.smallIcon }
    );

    if (open) {
      marker.addTo(this.map).bindPopup(text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
  }

  // openInfoWindow(marker: MapMarker) {
  //   console.log(marker);
  //   this.infoWindow.open(marker);
  // }

  // addMarker(event: Event) {
  //   console.log(event);
  // }

}
