import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-strengh-bar',
  templateUrl: './strengh-bar.component.html',
  styleUrls: ['./strengh-bar.component.scss'],
})
export class StrenghBarComponent implements OnInit {
  @Input() controller: AbstractControl | null = null;
  message = '';
  style = [
    { 'background-color': 'grey' },
    { 'background-color': 'grey' },
    { 'background-color': 'grey' },
  ];
  textColor = 'black'
  constructor() {}

  ngOnInit(): void {
    if (!!this.controller) {
      this.controller.valueChanges.subscribe((password: string) => {
        if (!password || password.length === 0) {
          this.style = [
            { 'background-color': 'grey' },
            { 'background-color': 'grey' },
            { 'background-color': 'grey' },
          ];

          this.message = '';
        } else if (password && password.length < 6) {
          this.style = [
            { 'background-color': 'red' },
            { 'background-color': 'grey' },
            { 'background-color': 'grey' },
          ];
          this.message = 'Introduce al menos 6 caracteres';
          this.textColor = 'red';
        } else if (password.length >= 6 && password.length <= 8) {
          this.style = [
            { 'background-color': 'orange' },
            { 'background-color': 'orange' },
            { 'background-color': 'grey' },
          ];

          this.message = 'Débil';
          this.textColor = 'orange';
        } else if (password.length > 9) {
          this.style = [
            { 'background-color': 'green' },
            { 'background-color': 'green' },
            { 'background-color': 'green' },
          ];

          this.message = 'Segura';
          this.textColor = 'green'
        }
      });
    }
  }
}
