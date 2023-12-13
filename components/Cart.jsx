import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShoppingCart } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '@/context/StateContext';
import { urlFor } from '@/lib/client';
import product from '@/sanity_shopperz/schemas/product';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQty, cartItems, setShowCart, toggleCartItemQuantity, onremove, removeAll } = useStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type='button'
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShoppingCart size={150} />
            <h3>Your Shopping Cart is Empty</h3>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image' />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>₹{item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className='minus' onClick={() => { toggleCartItemQuantity(item._id, 'dec') }}> <AiOutlineMinus /> </span>
                      <span className='num'> {item.quantity} </span>
                      <span className='plus' onClick={() => { toggleCartItemQuantity(item._id, 'inc') }}> <AiOutlinePlus /> </span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className='remove-item'
                    onClick={() => onremove(item._id)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom" style={{right: '-22px'}}>
              <div className="total">
                <h3>SubTotal ({totalQty} items): ₹{totalPrice}</h3>
                {/* <button className='remove-all'> Remove All </button> */}
                <p onClick={() => removeAll() }> Remove All </p>
              </div>
              <div>
                <button
                  type='button'
                  className='btn'
                  onClick=''>
                  Buy Now
                </button>
              </div>
            </div>
          )}

          {totalQty < 1 && (
            <div className="cart-bottom">
              <button
                type='button'
                className='btn'
                style={{left: '-90px', position: 'relative'}}
                onClick={() => { setShowCart(false) }}>
                Continue Shopping 
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart