import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-web',
  templateUrl: './map-web.component.html',
  styles: [
  ]
})
export class MapWebComponent implements OnInit {

  title: string = 'gmaps';
  zoom: number = 4;

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

}
