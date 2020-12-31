import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map-edit-google',
  templateUrl: './map-edit-google.component.html',
  styles: [
  ]
})
export class MapEditGoogleComponent implements OnInit {

  formDialog: FormGroup

  constructor(
    public dialogRef: MatDialogRef<MapEditGoogleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marker,
    private formBuilder: FormBuilder
  ) {
    console.log(data);
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.formDialog = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f() {
    return this.formDialog.controls;
  }

  // TODO: hacer validaciones del modal

  saveChanges() {
    if (this.formDialog.invalid) {
      Object.values(this.f)
        .forEach(control => {
          control.markAllAsTouched();
        });
      return;
    }
    else {
      console.log(this.formDialog.value);
      this.dialogRef.close(this.formDialog.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
