export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductCard  {
  product: Product
  counter: number;
}
