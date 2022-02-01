import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss'],
})
export class ButtonCardComponent implements OnInit {
  @Input() counter = 0;
  @Output() onClickAdd: EventEmitter<void> = new EventEmitter();
  @Output() onClickDelete: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    this.onClickAdd.emit();
    this.counter++;
  }
  deleteProduct() {
    this.onClickDelete.emit();
    this.counter--;
  }
}
