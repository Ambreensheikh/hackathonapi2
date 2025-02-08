//src\app\pages\page.tsx
import React from 'react';
import Image from 'next/image';

function ShopGridPage() {
  return (
    <div className="bg-[#F6F5F7] py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#151875] ">
          Shop Grid Default
        </h1>
        <span className='flex justify-center items-center mb-[30px]'>
        <p className='flex text-black text-[12px] flex-col justify-center items-center'>Home .</p>
        <p className='text-black text-[12px] flex justify-center items-center'>Pages .</p>
        <p className='text-[#FB2E86] text-[12px] flex justify-center items-center'>Shop Grid Default</p>
        </span>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image 9.png"
              alt="Image 9"
              width={169}
              height={169}
              className="object-contain mb-[40px]"
            />
            <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Vel elit euismod</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image20.png"
              alt="Image 20"
              width={169}
              height={169}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Ultricies condimentum imperdiet</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image10.png"
              alt="Image 10"
              width={201}
              height={201}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Vitae suspendisse sed</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image30.png"
              alt="Image 30"
              width={188}
              height={188}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Sed at fermentum</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image40.png"
              alt="Image 40"
              width={128}
              height={139}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Vestibulum magna laoreet</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/imge50.png"
              alt="Image 50"
              width={154}
              height={158}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Vestibulum magna laoreet</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 7 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image60.png"
              alt="Image 60"
              width={144}
              height={144}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Ultrices mauris sit</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 8 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image70.png"
              alt="Image 70"
              width={167}
              height={167}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Cras scelerisque velit</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 9 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image80.png"
              alt="Image 80"
              width={170}
              height={151}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Lectus vulputate faucibus</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 10 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/cam 2.png"
              alt="Image 90"
              width={169}
              height={158}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Purus risus, ut</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 11 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image100.png"
              alt="Image 100"
              width={176}
              height={176}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Purus risus, ut</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
          {/* Card 12 */}
          <div className="bg-white w-[270px] h-[363px] m-auto flex flex-col items-center justify-center shadow-md rounded-md">
            <Image
              src="/image101.png"
              alt="Image 101"
              width={188}
              height={188}
              className="object-contain"
            />
             <span>
              <h1 className='text-[#151875] font-bold mb-[10px] mt-1 '>Ultricies condimentum imperdiet</h1>
              <Image src="/Group 44.png" alt="Star" width={30} height={10} />
              <Image src="/Group 45.png" alt="Star" width={100} height={20} />
            </span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-center mt-10">
          <Image
            src="/image102.png"
            alt="Footer Divider"
            width={904}
            height={44}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopGridPage
