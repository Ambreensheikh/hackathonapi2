import React from 'react'
import Image from 'next/image'
import { topcategories } from '@/app/constant/Topcategory'

const Topcategory=()=> {
  return (
    <>
    <div>

        <h1 className='flex items-center justify-center mt-[79px] text-[#151875] font-bold'>Top Categories</h1>
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  p-4">
              {topcategories.map((Topcategory, index: number) => {
                
              return(
                
              
                <div
                  key={Topcategory.id || index}
                  className=" bg-white shadow-lg rounded-lg p-4 flex flex-col items-center 
                  text-center "
                >
                  <Image
                    src={Topcategory.src}
                    alt={Topcategory.alt}
                    width={Topcategory.width}
                    height={Topcategory.height}
                    className="mb-4"
                  />
               </div>
               
                 
                  
                 
              )})},
               <span className='flex items-center justify-center mt-[10px] overflow-hidden'>
                  <Image  src='/dots.png' alt='hero' width={91} height={4} />
                  </span>
                  <div>
                  <div className=' mb-[96px] w-full h-[552px] overflow-hidden'>
                    <Image src='/group1.png' alt="hero" width={1140} height={552}/>
              
            </div>
            <div> 
              <Image src='/groupbottom.png' alt="hero" width={904} height={93} />
            </div>

            </div>
            
            </div>

           
  </>
  )
}



export default Topcategory