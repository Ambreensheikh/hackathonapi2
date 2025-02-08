import { Input } from "./ui/input"
import { Button } from "./ui/button"

import Link from "next/link"


{/*function Footer() {
  return (
    <footer className='w-full gap-[70px]'>
        <div className='flex flex-col container mx-auto px-4'>
            <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16'>
    

    <div className='space-y-4'>
        <Image className='mb-6' src="/logo1.png" alt="logo" width={90} height={28}></Image>
        <div className="flex items-center w-[377px] overflow-hidden">
        <Input type='email'
             placeholder='Enter email Address'
              className='border-yellow-500 border-[3px] w-[377px]' />
            <Button type="submit" className='bg-[#FB2E86] text-white'>Sign Up</Button></div>

        <p className='text-[20px] text-gray-500'>Contact Info</p>
        <p className='text-[16px]  text-gray-500 w-[401px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        <div className='flex space-x-2 items-center'>
          <div className="grid grid-cols-1 text-gray-500 gap-2">
            <p className='text-[20px] text-black'>Catagories</p>
            <ul>
              <li><Link href="/">Laptops & Computers</Link></li>
              <li><Link href="/">Cameras & Photography</Link></li>
              <li><Link href="/">Smart Phones & Tablets</Link></li>
              <li><Link href="/">Video Games & Consoles</Link></li>
              <li><Link href="/">Waterproof Headphones</Link></li>
            </ul>

          </div>
           
        </div>
    </div>
            </div>
        </div>
    
    </footer>
  )
}

export default Footer*/}




export default function Footer() {
  return (
    <footer className="bg-[#F6F5FF] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Hekto</h2>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter Email Address" 
                className="max-w-[200px]"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Sign Up
              </Button>
            </div>
            <div className="text-gray-600 text-sm">
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <div className="flex flex-col space-y-2 text-gray-600">
              <Link href="#" className="hover:text-pink-500">Laptops & Computers</Link>
              <Link href="#" className="hover:text-pink-500">Cameras & Photography</Link>
              <Link href="#" className="hover:text-pink-500">Smart Phones & Tablets</Link>
              <Link href="#" className="hover:text-pink-500">Video Games & Consoles</Link>
              <Link href="#" className="hover:text-pink-500">Waterproof Headphones</Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Care</h3>
            <div className="flex flex-col space-y-2 text-gray-600">
              <Link href="#" className="hover:text-pink-500">My Account</Link>
              <Link href="#" className="hover:text-pink-500">Discount</Link>
              <Link href="#" className="hover:text-pink-500">Returns</Link>
              <Link href="#" className="hover:text-pink-500">Orders History</Link>
              <Link href="#" className="hover:text-pink-500">Order Tracking</Link>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Pages</h3>
            <div className="flex flex-col space-y-2 text-gray-600">
              <Link href="#" className="hover:text-pink-500">Blog</Link>
              <Link href="#" className="hover:text-pink-500">Browse the Shop</Link>
              <Link href="#" className="hover:text-pink-500">Category</Link>
              <Link href="#" className="hover:text-pink-500">Pre-Built Pages</Link>
              <Link href="#" className="hover:text-pink-500">Visual Composer Elements</Link>
              <Link href="#" className="hover:text-pink-500">WooCommerce Pages</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>©Webecy - All Rights Reserved</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-pink-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-pink-500">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-pink-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 ">
                <animateTransform attributeName="transform" type="rotate" 
                from="0 12 12" to="360 12 12" dur="0.8s"  /></path></svg></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

    


  
  


  
  