import React from 'react'
import Image from 'next/image'

function LeatestProducts() {
  return (
    <>
        <h1 className='flex items-center justify-center line-height-[50px] 
        text-[42px] font-bold text-[#151875]'>Leatest Products</h1>
        <span className='flex gap-[58px] justify-center font-[400]'>
        <p className='flex items-center justify-center text-[#FB4997] text-[18px]'>New Arrival</p>
        <p className='flex items-center justify-center text-[#151875] text-[18px] '>Best Seller</p>
        <p className='flex items-center justify-center text-[#151875] text-[18px]'>Featured</p>
        <p className='flex items-center justify-center text-[#151875] text-[18px]'>Special Offer</p>
        </span>
          <div className='flex flex-col mt-[71px] gap-y-[120px]'>
        <div className='flex gap-[29px] m-auto'>
        <Image src="/lp1.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp2.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp3.png" alt="image" width={360} height={306}></Image>
        
        </div>
        <div className='flex gap-[29px] m-auto'>
        <Image src="/lp4.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp5.png" alt="image" width={360} height={306}></Image>
        <Image src="/lp6.png" alt="image" width={360} height={306}></Image>
        </div>
        </div>
       
    </>
  )
}

export default LeatestProducts