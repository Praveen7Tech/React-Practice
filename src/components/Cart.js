import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../ReduxStore/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store)=> store.cart.Items);
  const dispatch = useDispatch()
  console.log("cart",cartItems)

  const clearCartItems = ()=>{
    console.log("clickked..")
    dispatch(clearCart())
  }

  return (
  <div className='text-center m-4 p-4'>
    <div className='justify-between'>
      <h2 className='text-2xl font-bold'>Cart</h2>
      <button className='m-2 p-2 bg-black text-white rounded-lg'
      onClick={clearCartItems}>Clear Cart
      </button>
    </div>
    <div>
      {cartItems.map((item)=>(
         <div key={item.parentId} className="p-4 m-3 w-[240px] bg-gray-100 rounded-md hover:bg-gray-200 text-center">
           <h3 className="font-bold py-3 text-lg">{item.name}</h3>
         </div>
      ))}
    </div>
  </div>
  )
}

export default Cart
