
{/*import Hero from '@/components/Hero'
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
  const FeaturedProducts = await res.json();
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
  {/*<Topcategory />
   
    </>
  )
}

export default Fetch*/}

import Hero from '@/components/Hero'
import React from 'react'
import LeatestProducts from '@/components/LeatestProducts'
import Unique from '@/components/Unique'
import Card from '@/components/Card'
import TrendingProducts from '@/components/TrendingProducts'
import Discount from '@/components/Discount'
import Topcategory from '@/components/Topcategory'
import FeaturedProducts from '@/components/featuredProducts' // Import the FeaturedProducts component

const Page = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts /> {/* This component now handles fetching data */}
      <LeatestProducts />
      <Card />
      <Unique />
      <TrendingProducts />
      <Discount />
      <Topcategory />
    </div>
  )
}

export default Page;
