"use client";
import React, {  useEffect, useState } from 'react'
import { Product } from '../../../types/product';
import { getCartItems } from '../actions/actions';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2';

const Checkout = () => {

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
       firstName: "",
       lastName: "",
        email: "",
        address: "",
        phone: "",
        zipCode: "",
        city: "",
    });
    const [formErrors, setFormErrors] = useState({
        firstName:false,
        lastName:false,
        email:false,
        address:false,
        phone:false,
        zipCode:false, 
        city:false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
    
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if(appliedDiscount){
        setDiscount(Number(appliedDiscount));
    }
    }, []);

    const subTotal = cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormValues({ ...formValues, 
            [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email,
            address: !formValues.address,
            phone: !formValues.phone,
            zipCode: !formValues.zipCode,
            city: !formValues.city,
        };
        setFormErrors(errors);
        return Object.values(errors).some((error) => error);
        }
        const handlePlaceOrder = async () => {

         Swal.fire ({
             title: "Processing Your Order....",
             text: "Please wait a moment!",
             icon: "info",
             showCancelButton: true,
             confirmButtonText: "Proceed!",
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             
         }) .then((result)=> {
            if(result.isConfirmed){
                if(validateForm()){
                    localStorage.removeItem("appliedDiscount")
                    Swal.fire(
                        "Success!",
                        "Your Order has been Successfully Processed!",
                        "success"
                    )
                }else{
                    Swal.fire(
                        "Error!",
                        "Please fill in all required fields!",
                        "error"
                    )
                }
            }
         }) 

            const orderData = {
                _type: "order",
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                email: formValues.email,
                address:formValues.address,
                phone: formValues.phone,
                zipCode:formValues.zipCode,
                city: formValues.city,
                cartItems: cartItems.map(item =>({
                    type: "reference",
                    ref: item._id
                })),
                total: subTotal,
                discount: discount,
                orderDate: new Date().toISOString,
                };

                 if(validateForm()){
                try {
                    await client.create(orderData)
                    localStorage.removeItem("appliedDiscount")
                }catch (error){
                    console.error("error creating order",error)
                }
            }
                try {
                    await client.create(orderData)
                    localStorage.removeItem("appliedDiscount")
                }catch (error){
                    console.error("error creating order",error)
                } 
        }
  return (
    <div className='min-h-screen bg-purple-50 items-center'>
        <div className='mt-6'>
        <div className='max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <nav className='flex items-center gap-2 py-4'>
              <Link href={"/cart"}
              className='text-pink-600 hover:text-pink-700 transition text-sm'>Cart</Link>
              <ChevronRightIcon/>
              <span>Checkout</span>
          </nav>
        </div>
        </div>

        <div className='max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-white border rounded-lg p-6 space-y-6'>
                   <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
                   {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item._id} className='flex items-center gap-4 py-3 border-b'>
                           <div className='w-20 h-20 rounded overflow-hidden'>
                            {item.image && (
                                <Image src={urlFor(item.image).url() || "/placeholder.svg"}
                                 alt={item.name}
                                 width={100}
                                 height={100}
                                 className='object-cover w-full h-full' />
                            )}

                           </div>
                           <div className='flex-1'>
                            <h3 className='text-sm font-medium'>{item.name}</h3>
                            <p className='text-sx text-pink-600'>Quantity:{item.stockLevel}</p>
                            <p>${item.price*item.stockLevel}</p>
                           </div>
                           
                        </div>
                   ))
                   ):(<p className='text-xs font-medium'>Your cart is empty</p>

                   )}
                   <div className='text-right pt-4'>
                    <p className='text-sm'>Subtotal: <span className='font-medium'>${subTotal}</span></p>
                    <p className='text-sm'>Discount: <span className='font-medium'>${discount}</span></p>
                    <p className='text-lg font-semibold'>TotalPrice: <span >${subTotal.toFixed(2)}</span></p>
                   </div>
                
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold mb-4'>Billing Information</h2>
                        <div>
                            <div>
                                <Label>First Name</Label>
                                <Input type="text"
                                 name="firstName"
                                  value={formValues.firstName} 
                                  placeholder='Enter Your First Name'
                                  onChange={handleInputChange} />
                                {formErrors.firstName && <p className="text-pink-600">First Name is required</p>}
                            </div>
                            <div>
                                <Label>Last Name</Label>
                                <Input type="text"
                                 name="lastName"
                                  value={formValues.lastName} 
                                  placeholder='Enter Your Last Name'
                                  onChange={handleInputChange} />
                                {formErrors.lastName && <p className="text-pink-600">Last Name is required</p>}
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input type="text"
                                 name="Email"
                                  value={formValues.email} 
                                  placeholder='Enter Your Email'
                                  onChange={handleInputChange} />
                                {formErrors.email && <p className="text-pink-600">Email is required</p>}
                            </div>
                            <div>
                                <Label>Address</Label>
                                <Input type="text"
                                 name="address"
                                  value={formValues.address} 
                                  placeholder='Enter Your Address'
                                  onChange={handleInputChange} />
                                {formErrors.address && <p className="text-pink-600">Address is required</p>}
                            </div>
                            <div>
                                <Label>Phone Number</Label>
                                <Input type="text"
                                 name="phone"
                                  value={formValues.phone} 
                                  placeholder='Enter Your Phone Number'
                                  onChange={handleInputChange} />
                                {formErrors.phone && <p className="text-pink-600">Phone Number is required</p>}
                            </div>
                            <div>
                                <Label>Zipcode</Label>
                                <Input type="text"
                                 name="zipcode"
                                  value={formValues.zipCode} 
                                  placeholder='Enter Your Zip Code'
                                  onChange={handleInputChange} />
                                {formErrors.zipCode && <p className="text-pink-600">Zip Code is required</p>}
                            </div>
                            <div>
                                <Label>City</Label>
                                <Input type="text"
                                 name="city"
                                  value={formValues.city} 
                                  placeholder='Enter Your City'
                                  onChange={handleInputChange} />
                                {formErrors.city && <p className="text-pink-500">City is required</p>}
                            </div>
                            <Button className='w-full h-12 bg-pink-500 hover:bg-pink-600 text-white font-semibold'
                            onClick={handlePlaceOrder}>Place Order</Button>
                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Checkout