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


export function getId(product: ProductCard | Product) {
  if(product.hasOwnProperty('product')) {
    return (product as ProductCard).product.id;
  } else {
    return (product as Product).id;
  }
}
