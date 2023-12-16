import React, { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';
import { TiDelete } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';

import { useStateContext } from '@/context/StateContext';
import { urlFor } from '@/lib/client';
import getStripe from '@/lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQty, cartItems, setShowCart, toggleCartItemQuantity, onremove, removeAll } = useStateContext();

  const handleBuy = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( cartItems )
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading('Redirecting to Checkout Page...');

    if (data.id) {
      stripe.redirectToCheckout({ sessionId: data.id });
    } else {
      console.error('No session ID returned from the server');
    }
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <div className="cart-heading">
          <span className='heading'>Your Cart</span>

          <TiDelete
            className="exit"
            onClick={() => setShowCart(false)} />
        </div>
        <div className="seperator" />

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
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom" style={{ right: '-22px' }}>
              <div className="seperator" />
              <div className="total">
                <h3>SubTotal ({totalQty} items): ₹{totalPrice}</h3>
                {/* <button className='remove-all'> Remove All </button> */}
                <p onClick={() => removeAll()}> Remove All </p>
                <button
                  type='button'
                  className='btn'
                  onClick={() => { handleBuy() }}>
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
                style={{ left: '-90px', position: 'relative' }}
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