import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<SigninFormComponent>) {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    window.alert('Formulario ' + JSON.stringify(this.formGroup.value));
    if(this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.value);
    }
  }

}
