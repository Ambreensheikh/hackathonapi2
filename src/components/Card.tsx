import React from 'react'
import { Cards } from '../app/constant/Card'
import Image from 'next/image'



const cardName = () =>{
    
  return (
    <>
    <div className='flex items-center justify-center mt-[58px] text-[#151875]'>
<h1 className='line-height-[50px] text-[42px] font-bold'>What Shopex Offer!</h1>
</div>
    

  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  p-4">
      {Cards.map((card, index: number) => {
        
      return(
        
      
        <div
          key={card.id || index}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center 
          text-center w-[270px] h-[320px] mt-3 mb-[45px]"
        >
          <Image
            src={card.src}
            alt={card.name}
            width={card.width}
            height={card.height}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
          <p className="text-gray-600">{card.lorem}</p>
        </div>
      )})}
    </div>
  



    
    </>
  )
}

export default cardName