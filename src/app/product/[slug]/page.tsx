
import { client } from '@/sanity/lib/client';
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';
import { Button } from '@/components/ui/button';
interface Product {
    _id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    category: string;
    stockLevel: number;
    image: string;
  }

const page = async({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const query = `*[_type == 'product' && slug.current == $slug]{
    _id,
    name,
    slug,
    price,
    description,
    category,
    stockLevel,
    "image":image.asset->url
      
}[0]`;

const products:Product | null = await client.fetch(query, {slug});
if (!products){
    return (
        <div>
            <h1>Product not found</h1>
        </div>
      )
}
return(
    
        <div>
            <div key={products._id}>
                <div className='overflow-x-hidden'>
                    

       
        <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-xl bg-white mt-10">
            
            <h1 className="text-3xl font-semibold mt-2">{products.name}</h1>
            <Image src={urlFor(products.image).url()}
             alt={products.name} 
             width={300} 
             height={300} 
             className="rounded-lg mt-2 object-cover"/>
            <p className="text-lg text-gray-700 mt-1">$ {products.price}</p>
            <p className="text-xl font-[8px] mt-4">Description <br/>
                {products.description}</p>
           <Button className="py-4 px-6 shadow-md hover:scale-110 rounded-lg
            bg-gradient-to-r from-[#FB2E86] to-purple-400 mt-2
              text-white transition-transform duration-300 text-[12px] font-bold" >Add to Cart</Button>
        </div>
       
        </div>
        </div>
        

        
        
        
    </div>
)
  
}

export default page
