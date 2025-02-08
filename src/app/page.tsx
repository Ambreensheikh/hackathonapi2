import FeaturedProducts from '@/components/featuredProducts'
import Hero from '@/components/Hero'
import React from 'react'
import LeatestProducts from '@/components/LeatestProducts'
import Unique from '@/components/Unique'
import Card from '@/components/Card'
import TrendingProducts from '@/components/TrendingProducts'
import Discount from '@/components/Discount'
import Topcategory from '@/components/Topcategory'
export async function Fetch  () {
  // Fetch your data here
  const res = await fetch('https://next-ecommerce-template-4.vercel.app/api/product');
  const featuredProducts = await res.json();
  return (
    <>
    
    <Hero />
    <FeaturedProducts />
    
    
    <LeatestProducts />
    <Card />
   <Unique />
   <TrendingProducts />
   <Discount />
   {/*<ProductGrid />*/}
  <Topcategory />
   
    </>
  )
}

export default Fetch