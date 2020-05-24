import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map-leaflet',
  templateUrl: './map-leaflet.component.html',
  styles: [
  ]
})
export class MapLeafletComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
    this.createMap();
  }

  createMap() {
    const parcThabor = {
      // lat: 48.114384,
      // lng: -1.669494

      lat: 5.073379,
      lng: -75.499002
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

    const descriptionWikipedia = `Le parc du Thabor, situé à Rennes à proximité du centre-ville,
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

}
