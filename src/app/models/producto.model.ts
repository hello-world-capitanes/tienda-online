import { BehaviorSubject } from "rxjs";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  counter: BehaviorSubject<number>
}



