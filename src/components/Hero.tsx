import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <>
    <section className=' flex-col grid grid-cols-2'>
        <div className='grid grid-cols-2'>
        <Image src="/image.png" alt="hero" width={387} height={387}></Image>
        <div className='flex flex-col text-[16px]
        w-[230px] font-Lato mt-[50px]'>
          <p className='text-[#FB2E86] font-Lato text-[12px] font-bold mb-[12px] mt-[120px]'>Best Furniture For Your Castle....</p> 
          <h1 className='text-black flex font-bold w-[544px] h-[144px] text-[43px] 
           font-size-[53px]'>New Furniture Collection Trends in 2025</h1>
           <p className='text-[#8A8FB9] font-Lato text-[16px] font-[700]
            w-[459px] mb-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
             <div className='flex w-[163px] h-[50px] bg-[#FB2E86] text-white'>
                <button className='flex justify-center text-[18px] font-bold py-6 items-center px-10 rounded-lg'>Shop Now</button>

        </div>
        
            
       
             </div>
        </div>
             <div className='flex flex-col ml-[175px] mt-[39px] mb-[36px]'>
                <Image src="/promo.png" alt="hero" width={506} height={489}></Image>
             </div>
        
    </section>
    </>
  )
}

export default Hero