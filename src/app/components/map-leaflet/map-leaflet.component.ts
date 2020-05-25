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
  markers: L.LeafletMouseEvent[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createMap();
    this.addMarker();
  }

  createMap() {
    const parcThabor = {
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
  }

  private createPopup(latlng) {
    const descriptionWikipedia = `
      lat: ${latlng.lat}, lng: ${latlng.lng}
      <button mat-raised-button color="primary">Editar</button>
      <button mat-raised-button color="warn">Eliminar</button>
    `;
    const popupOptions = {
      coords: latlng,
      text: descriptionWikipedia,
      open: false
    };
    return popupOptions;
  }

  private createMarker(latlng: any) {
    const popupOptions: { coords, text, open } = this.createPopup(latlng);
    const marker = L.marker(
      [popupOptions.coords.lat, popupOptions.coords.lng],
      { icon: this.smallIcon }
    );

    if (popupOptions.open) {
      marker.addTo(this.map).bindPopup(popupOptions.text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(popupOptions.text);
    }
  }

  addMarker() {
    this.map.on('click', (event: L.LeafletMouseEvent) => {
      console.log(event);
      this.createMarker(event.latlng);
      this.markers.push(event);
      console.log(this.markers);
    });
  }

  removeMarker(i: number) {
    console.log(i);
  }

}
