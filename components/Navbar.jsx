import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
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
      <button
        type='button'
        className="cart-icon"
        onClick={() => {setShowCart(true)}}>
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">
          { totalQty }
        </span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar