import { InjectionToken } from '@angular/core';
export const ERROR_MESSAGES: { [key: string]: string } = {
  email_format: 'Email inválido',
  password_length: 'Debe contener 6 caracteres',
  required: 'Campo requerido',
};



export const defaultErrors: { [key: string]: (params: any) => string } = {
  required: () => `This field is required`,
  minlength: ({
    requiredLength,
    actualLength
  }: {
    requiredLength: number;
    actualLength: number;
  }) => `Expect ${requiredLength} but got ${actualLength}`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
