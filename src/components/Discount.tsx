import React from 'react'
import Image from 'next/image'

function Discount() {
  return (
    <>
    <h1 className='flex items-center justify-center mb-[33px] line-height-[50px] 
     text-[42px] font-bold text-[#151875]'>Discount Item</h1>
  <span className='flex gap-[58px] justify-center font-[400] text-[18px]'> 
    <p className='text-[#FB4997] underline'>Wood Chair .</p>
  <p className=''>Plastic Chair</p>
  <p>Sofa Colletion</p></span> 
    <div className='ml-[289px]'>
        <Image src="/sofa2.png" alt="sofa" width={1050} height={550}></Image>
    </div>
    </>
  )
}

export default Discount