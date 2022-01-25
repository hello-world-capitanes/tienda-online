import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss']
})
export class ButtonCardComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    this.counter++;
  }
  deleteProduct() {
    this.counter--;
  }

}
