import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment.prod';

import * as Mapboxgl from "mapbox-gl";


@Component({
  selector: 'app-map-map-box3d',
  templateUrl: './map-map-box3d.component.html',
  styles: [
  ]
})
export class MapMapBox3dComponent implements OnInit {

  map: Mapboxgl.Map;

  constructor() {
  }

  ngOnInit(): void {
    this.createMap();
    // this.createMarker(-75.499002, 5.073379);

    this.map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      var layers = this.map.getStyle().layers;

      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      this.map.addLayer(
        {
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });
  }

  createMap() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.map = new Mapboxgl.Map({
      container: 'map-mapbox-3d', // container id
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-75.499002, 5.073379], // starting position [LNG, LAT]
      zoom: 17,
      pitch: 45,
      bearing: -17.6,
      antialias: true
    });
  }

}
