"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Product } from '../../types/product'
import { client } from '@/sanity/lib/client'
import {  four } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'


const FeaturedProducts=()=> {
  const [product,setProduct]= useState<Product[]>([])
  useEffect(()=>{
    async function fetchProduct(){
    const fetchProduct:Product[]= await client.fetch(four)
    setProduct(fetchProduct)
    
    }
    fetchProduct()
  },[])

  return (
    
    <div className='container mx-auto px-4 py-8'>
        <h1 className='flex items-center justify-center line-height-[50px] text-[42px] font-bold text-[#151875]'>Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
      {product.map((product)=>{
        return(
          <div key={product._id} className='flex flex-col items-center justify-center p-4 border rounded-lg shadow-md'>
            {product.image && ( <Image 
            src={urlFor (product.image).url()} alt={"image"} width={200} height={200} />)}
          
            <h1 className='text-[#151875] font-semibold text-[20px]'>{product.name}</h1>
            <p className='text-[#151875] font-normal text-[18px] py-2'>{product.description}</p>
            <p className='text-black font-bold text-[20px]'>${product.price}</p>
           

          </div>
        
        )
      }
     
      )}
   </div>
   </div>
  )}



export default FeaturedProducts


