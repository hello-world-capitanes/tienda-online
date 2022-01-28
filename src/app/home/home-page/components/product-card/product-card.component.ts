import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/producto.model';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() producto: Product | undefined;
  @Input() smallSize = false;

  @Output() onClickSection: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goToDetail() {
    this.onClickSection.emit();
  }



}
