import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 
'@radix-ui/react-dropdown-menu'
import React from 'react'
import { ChevronDown,Search, Heart,ShoppingCart,Mail,PhoneCall,User} from 'lucide-react';
import Link from 'next/link'
import { Input} from "./ui/input"
import Image from 'next/image';




function Header() {
  return (
    <>
    <header className='w-full flex flex-col mt-0 '>
        {/* topHeader */}
        <div className='w-full h-[44px] bg-[#7E33E0] text-white 
        flex justify-between items-center'>

            <div className='flex  justify-between text-center items-center gap-2'>
                
                    
               <div className='flex gap-[49.33px]'> 
                <span className='flex ml-[270px] mr-[200px] text-[#F1F1F1]
                 text-[16px] font-[600] font-Josefin gap-2'>
                <Mail size={20}/> mhhasanul@gmail.com</span>
                <span className='flex text-color-[#F1F1F1] text-[16px] fontweight-[600] font-Josefin gap-2'>
                <PhoneCall size={16}/>(12345)67890
                </span>
                </div>
                <div className='flex gap-2 justify-between items-center'>
                    <span>
            <DropdownMenu>

                <DropdownMenuTrigger className='flex items-center gap-1 focus:outline-none
                 text-[16px] font-medium font-Josefin'>
                    English
                    <ChevronDown size={24} />
                </DropdownMenuTrigger>

                <DropdownMenuContent className='bg-white text-black'>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Urdu</DropdownMenuItem>
                    <DropdownMenuItem>Arabic</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        
            </span>
        <span>
            <DropdownMenu>

                <DropdownMenuTrigger className='flex items-center gap-1 focus:outline-none'>
                    USD
                    <ChevronDown size={20}/>
                </DropdownMenuTrigger>

                <DropdownMenuContent className='bg-white text-black'>
                    <DropdownMenuItem>PKR</DropdownMenuItem>
                    <DropdownMenuItem>LIRA</DropdownMenuItem>
                    <DropdownMenuItem>DOLLAR</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </span>
            <span className='flex items-center gap-1'>Login <User />
            Wishlist<Heart />
            <ShoppingCart/>
          </span> 
        </div>
            </div>
        </div>
        {/* bottomHeader */}
        <div>
        <div className='flex flex-col w-full py-4 border-b-[1px] bg-white text-black justify-between
         items-center mt-0'>
            <div className='container h-[38px] mx-auto px-4 py-6'>
                <div className='flex items-center justify-between gap-4'>
                    {/* logo */}
                   <Image src="/logo1.png" alt='logo' width={98} height={34}></Image>
                      {/* nav */}
                    <nav className='hidden md:flex items-center gap-8'>
                        <Link href='/' className='text-[16px] leading-[24px]
                         
                        '></Link>

                        <Link href={'/'} className={'text-[16px] leading-[24px] hover:text-gray-500'}>Home</Link>
                        <Link href={'/pages'} className={'text-[16px] leading-[24px]'}>Pages</Link>
                        <Link href={'/product'} className={'text-[16px] leading-[24px]'}>Product</Link>
                        <Link href={'/blog'} className={'text-[16px] leading-[24px]'}>Blog</Link>
                        <Link href={'/shop'} className={'text-[16px] leading-[24px]'}>Shop</Link>
                        <Link href={'/contact'} className={'text-[16px] leading-[24px]'}>Contact</Link>
                    </nav>
                    


                    {/* icons search*/}
                    <div className='flex items-center gap-4'>

                        <div className='relative:hidden md:block'>
                            <Input className='w-[317px] h-[40px] bg-gray-50'
                             placeholder=''
                             type='search'/>

                                <Search size={20} className=' text-gray-400 absolute top-1/2 right-4 transform -translate-y-1/2'
                            
                                
                                />
                                </div>

                        </div>
                        
                       
                    </div>

                </div>

                </div>
                    
                
                </div>
    
        
        

    
    </header>
    </>
  )
}
        export default Header
       