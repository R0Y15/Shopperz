import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdLogin } from "react-icons/md";
import { TbHelpOctagon } from "react-icons/tb";
import { useStateContext } from '@/context/StateContext';
import { Cart, ContactUs } from '@/components';
import Login from './Login';

const Navbar = () => {
  const { showCart, setShowCart, totalQty, showLogin, setShowLogin, showContactUs, setShowContactUs } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href='/'>
          Shopperz
        </Link>
      </p>

      <div className='nav-btns'>
        {/* to be enabled when login feture is added */}
        {/* <button
          type='button'
          className="cart-icon"
          onClick={() => { setShowLogin(true) }}>
          <MdLogin />
        </button> */}

        <button
          type='button'
          className="cart-icon"
          onClick={() => { setShowCart(true) }}>
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">
            {totalQty}
          </span>
        </button>

        <button
          type='button'
          className="cart-icon"
          onClick={() => { setShowContactUs(true) }}>
          <TbHelpOctagon />
        </button>
      </div>

      {showContactUs && <ContactUs />}
      {/* {showLogin && <Login />} */}
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar