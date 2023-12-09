import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>A Shopping Site Made By <Link href='https://www.linkedin.com/in/roy15/' target='_blank'>Roy</Link></p>
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