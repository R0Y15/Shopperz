import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';
import { ContactUs } from '.';

const Footer = () => {
  const ContactPage = () => {
    return (
      <ContactUs />
    )
  }

  return (
    <div className="footer-container">
      <div>
        <p>
          <span className="footer-text" >This Shopping Site is Made By </span>
          <span> <Link href='https://www.linkedin.com/in/roy15/' target='_blank'>Roy</Link> </span>
        </p>
      </div>
      <p className="icons">
        <Link href='https://www.instagram.com/its_aka_roy/' target='_blank'>
          <AiFillInstagram />
        </Link>
        <Link href='https://twitter.com/RoY_015__' target='_blank'>
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  )
}

export default Footer