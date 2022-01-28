import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonCounterComponent } from '../button-counter/button-counter.component';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss']
})
export class ButtonCardComponent implements OnInit {

  @ViewChild( ButtonCounterComponent) buttonCounter!: ButtonCounterComponent;
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  /** OJO! que de esta forma no nos enteramos de cuando nuestro contandor pasa a cero */
  addProduct() {
    this.buttonCounter.addProduct()
    this.visible = this.buttonCounter.counter < 1

  }




}
