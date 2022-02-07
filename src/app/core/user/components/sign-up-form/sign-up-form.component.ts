import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomValidators } from 'src/app/core/utils/customValidator';
import { ERROR_MESSAGES } from 'src/app/core/utils/error-messages';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  formGroup: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { email: string }
  ) {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      privacy: [false, [Validators.required]],
      email: [this.data.email, [Validators.required]],
      dni: [null, [Validators.required, CustomValidators.ValidarDocumento()]],
    });

    /*
      Otra forma de poner los datos
      this.formGroup.setValue(this.data);  //Machaca los valores no definidos
      this.formGroup.patchValue(this.data); //Solo cambia los valores definidos
    */
  }

  ngOnInit(): void {}

  submitForm() {
    window.alert('Formulario ' + JSON.stringify(this.formGroup.value));
  }

  getErrorMessage(idError: string): string {
    return ERROR_MESSAGES[idError];
  }
}
