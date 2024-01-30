import { LuShoppingCart } from "react-icons/lu";

import React from 'react'

const Cart = () => {
  return (
    <button type="button" className="flex relative text-3xl">
      <LuShoppingCart />
      <span className="bg-yellow-500 flex justify-center items-center absolute w-6 h-6 right-4 bottom-4 rounded-full text-xl font-bold ">0</span>
    </button>
  )
}

export default Cart
