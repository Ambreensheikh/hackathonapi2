// src/app/constant/product.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: "Product 1", price: 19.99, image: "/image1.png", description: "Description for Product 1" },
    { id: 2, name: "Product 2", price: 24.99, image: "/image2.png", description: "Description for Product 2" },
    { id: 3, name: "Product 3", price: 29.99, image: "/image3.png", description: "Description for Product 3" },
    { id: 4, name: "Product 4", price: 34.99, image: "/image4.png", description: "Description for Product 4" },
  ];