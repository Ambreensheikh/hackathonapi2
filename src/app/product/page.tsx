"use client";


import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "../../../types/product";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";


const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   async function fetchProducts() {
      const fetchedProducts:Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    
   } 
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer:2000
    })
     
    addToCart(product);
    
    
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-[42px] font-semibold text-[#151875] mb-8">
       Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-[200px] h-[300px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <Link href={`product/${product.slug.current}`}>
              <div className="w-[200px] h-[200px] relative block flex-grow">
                {product.image && (
                 <Image
                 src={urlFor(product.image).url() || "/placeholder.svg"}
                 alt={product.name}
                 fill
                 style={{ objectFit: "cover" }}
               />
                )}
              </div>
              <div className="p-2 flex flex-col justify-between h-[60px]">
                <h2 className="text-[#151875] font-bold text-[14px] truncate">{product.name}</h2>
                <p className="text-[#151875] font-bold text-[14px]">${product.price}</p>
              </div>
            
            
              <Button
                className="py-2 px-4 shadow-md hover:scale-110 rounded-lg bg-gradient-to-r from-[#FB2E86] to-purple-400  text-white transition-transform duration-300 text-[12px] ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart
              </Button>
              
            
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Products;

