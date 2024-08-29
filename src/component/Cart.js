import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemListInAccordion from './ItemListInAccordion';
import { clearCart } from '../utility/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state)=> state.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
  return (
    <div className='text-center mt-10 p-10' >
       
         <h2 className='font-bold text-2xl'>Cart</h2>
         <button className='mr-96 text-red-600' onClick={handleClearCart}>Clear cart</button>
       
          <div className='w-1/2 m-auto'>
          {cartItems.length === 0 && <h2 className='text-black font-bold'>No items in the cart</h2>}
            <ItemListInAccordion items={cartItems}/>
          </div>
    </div>
  )
}

export default Cart