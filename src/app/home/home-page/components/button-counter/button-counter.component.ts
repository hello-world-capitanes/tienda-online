import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.scss'],
})
export class ButtonCounterComponent implements OnInit {
  @Input() counter = 0;
  @Output() onClickAdd: EventEmitter<void> = new EventEmitter();
  @Output() onClickDelete: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    this.onClickAdd.emit();
  }
  deleteProduct() {
    this.onClickDelete.emit();;
  }
}
