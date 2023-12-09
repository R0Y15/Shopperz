import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>A Shopping Site Made By Roy</p>
      <p className="icons">
        <Link href='/'>
          <AiFillInstagram />
        </Link>
        <Link href='/'>
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  )
}

export default Footer