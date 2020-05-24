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

  constructor() {
  }

  ngOnInit(): void {
    this.createMap();
    this.createMarker(-75.499002, 5.073379);
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

  createMarker(lng: number, lat: number) {
    var marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.map);

    var coordinates = document.getElementById('coordinates');
    marker.on('dragend', () => {
      var lngLat = marker.getLngLat();
      coordinates.style.display = 'block';
      coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    });
  }


}
