import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbShoppingBagCheck } from "react-icons/tb";

import { useStateContext } from '@/context/StateContext';

const success = () => {
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQty(0);
    }, []);


    const { setCartItems, setTotalPrice, setTotalQty, setShowContactUs } = useStateContext();

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <TbShoppingBagCheck />
                </p>
                <h2>Thanks For Ordering</h2>
                <p className="email-msg">check your email for order confirmation reciept</p>
                <Link href='/'>
                    <button className="btn">Continue Shopping</button>
                </Link>
                <p className="description">Incase of any issues, please contact the
                    <span className='sprt-btn' onClick={() => setShowContactUs(true)}> Support </span>
                </p>
            </div>
        </div>
    )
}

export default success