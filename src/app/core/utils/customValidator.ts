import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidators {

static ValidarDocumento():ValidatorFn {
  return (control:AbstractControl) : { [key: string]: any } | null => {

  return this.esCorrectoDNI(control.value) == null ? null : { documento: 'Documento incorrecto' };
  }
}


static esCorrectoDNI(value: string) {
  if (!value) {
    return null;
  }

  const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  const str = value.toString().toUpperCase();

  if (!nifRexp.test(str) && !nieRexp.test(str)) {
    return { documento: 'Documento incorrecto' };
  }

  const nie = str
    .replace(/^[X]/, '0')
    .replace(/^[Y]/, '1')
    .replace(/^[Z]/, '2');

  const letter = str.substr(-1);
  const charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter) {
    return null;
  }

  return {
    documento: 'Documento incorrecto',
  };
}
}
