import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdLogin } from "react-icons/md";
import { useStateContext } from '@/context/StateContext';
import { Cart } from '@/components';

const Navbar = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href='/'>
          Shopperz
        </Link>
      </p>

      <div className='nav-btns'> 
        <button
          type='button'
          className="cart-icon"
          onClick=''>
          <MdLogin />
        </button>

        <button
          type='button'
          className="cart-icon"
          onClick={() => { setShowCart(true) }}>
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">
            {totalQty}
          </span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar