"use client"


{/*import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      position: "top-right",
      title: "Are you sure to remove product from cart?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed from cart", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
      setCartItems(getCartItems());
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
      setCartItems(getCartItems());
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before proceeding to checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Proceed!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex flex-col md:flex-row justify-between items-center border-b p-4">
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url() || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                      width={300}
                      height={300}
                    />
                  )}
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => handleDecrement(item._id)}>-</button>
                  <span className="text-lg font-semibold">{item.stockLevel}</span>
                  <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => handleIncrement(item._id)}>+</button>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-2xl font-semibold">Total: ${calculateTotal().toFixed()}</h2>
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleProceed}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;*/}

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const refreshCart = () => {
    setCartItems(getCartItems());
  };

  const handleRemove = (id: string) => {
    Swal.fire({
      position: "top-right",
      title: "Are you sure to remove product from cart?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        refreshCart();
        Swal.fire("Removed!", "Item has been removed from cart", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    refreshCart();
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.stockLevel + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) handleQuantityChange(id, product.stockLevel - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before proceeding to checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Proceed!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        setCartItems([]);
        router.push("/checkout");
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex flex-col md:flex-row justify-between items-center border-b p-4">
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url() || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                      width={300}
                      height={300}
                    />
                  )}
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => handleDecrement(item._id)}>-</button>
                  <span className="text-lg font-semibold">{item.stockLevel}</span>
                  <button className="px-3 py-1 bg-gray-300 rounded" onClick={() => handleIncrement(item._id)}>+</button>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-2xl font-semibold">Total: ${calculateTotal().toFixed(2)}</h2>
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleProceed}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;




