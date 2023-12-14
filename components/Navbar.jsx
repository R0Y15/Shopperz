import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdLogin } from "react-icons/md";
import { useStateContext } from '@/context/StateContext';
import { Cart } from '@/components';
import Login from './Login';

const Navbar = () => {
  const { showCart, setShowCart, totalQty, showLogin, setShowLogin } = useStateContext();

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
          onClick={() => { setShowLogin(true) }}>
          <MdLogin />
        </button>

        {showLogin && <Login />}

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