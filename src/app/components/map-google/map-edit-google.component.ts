import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map-edit-google',
  templateUrl: './map-edit-google.component.html',
  styles: [
  ]
})
export class MapEditGoogleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MapEditGoogleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marker
  ) {
    console.log(data);
  }

  ngOnInit(): void {
  }

}
