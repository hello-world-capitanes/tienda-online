import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
   }

  ngOnInit(): void {

  }

  submitForm() {
    window.alert('Formulario '+ JSON.stringify(this.formGroup.value));
  }

}
