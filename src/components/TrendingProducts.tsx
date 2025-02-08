import trendingCards from '@/app/constant/TrendingCards'
import Image from 'next/image'
import React from 'react'

function TrendingProducts() {
  return (
    <>
      <h1 className='flex items-center justify-center line-height-[50px] text-[42px] font-bold text-[#151875]'>Trending Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mr-[100px] ml-[100px] ">
    {trendingCards.map((trendingCards, index:number)=> {

return(
        
      
    <div
      key={trendingCards.id||index}
      className="bg-white p-4 flex shadow-lg items-center 
      text-center flex-col mb-[20px] "
    >
      <Image
        src={trendingCards.src}
        alt={trendingCards.name}
        width={trendingCards.width}
        height={trendingCards.height}
        className="mb-4 flex flex-col items-center"
      />
      <h3 className="text-lg font-semibold mb-2">{trendingCards.name}</h3>
      <span className='flex gap-[20px]'><p className="text-gray-600">${trendingCards.price}</p>
      <p className="text-gray-600">${trendingCards.oldprice}</p></span>
    </div>
    
    
  )})}
  <div className='grid grid-cols-3 gap-[2px] mr-[100px] ml-[100px]'>
  <div className='flex gap-[3px] w-[420px] h-[270px]'>
   <Image src="/image7.png" alt="hero" width={420} height={450}></Image>
   <Image src="/image8.png" alt="hero" width={420} height={450}></Image>
  </div>
  <div className=' grid grid-cols-2 gap-[3px] w-[240px] h-[70px]'>
    <Image src='/image11.png' alt='hero' width={420} height={70}></Image>
    <Image src='/image22.png' alt='hero' width={420} height={70}></Image>
    <Image src='/image33.png' alt='hero' width={420} height={70}></Image>
    </div>
  </div>

  </div>           

</>
)
}



    
    
  


export default TrendingProducts