import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-mapbox',
  templateUrl: './map-mapbox.component.html',
  styles: [
  ]
})
export class MapMapboxComponent implements OnInit {

  map: Mapboxgl.Map;
  markers: Mapboxgl.Marker[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.createMap();
    this.mouseMove();
    this.createMarker(-75.499002, 5.073379);
    this.addMarker();
  }

  createMap() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.map = new Mapboxgl.Map({
      container: 'map-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.499002, 5.073379], // starting position [LNG, LAT]
      zoom: 12 // starting zoom
    });
  }

  mouseMove() {
    this.map.on('mousemove', (event) => {
      let coordinates = document.getElementById('coordinates');
      coordinates.style.display = 'block';
      coordinates.innerHTML = 'Longitude: ' + event.lngLat.lng + '<br />Latitude: ' + event.lngLat.lat;
    });
  }

  createMarker(lng: number, lat: number) {
    let coordinates = document.getElementById('coordinates-marker');
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lng + '<br />Latitude: ' + lat;

    let marker = new Mapboxgl.Marker({
      color: 'blue',
      draggable: true
    })
    .setLngLat([lng, lat])
    .addTo(this.map);

    marker.on('dragend', () => {
      let lngLat = marker.getLngLat();
      coordinates.style.display = 'block';
      coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    });
  }

  addMarker() {
    this.map.on('click', (event) => {
      let marker = new Mapboxgl.Marker()
        .setLngLat(event.lngLat)
        .addTo(this.map);

      this.markers.push(marker);
    });
  }
}
