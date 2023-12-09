import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';

const HeroBanner = ({ heroBannerdata }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
          {heroBannerdata.smallText}
        </p>
        <h3> {heroBannerdata.midText} </h3>
        <h1> {heroBannerdata.largeText1}</h1>
        <img src={urlFor(heroBannerdata.image)} alt="headphones" className='hero-banner-image' />
        <div>
          <Link href={`/product/${heroBannerdata.product}`}>
            <button type='button'>
              {heroBannerdata.buttontext}
            </button>
          </Link>
          <div className="desc">
            <h5> {heroBannerdata.desc} </h5>
            <p> {heroBannerdata.saleTime} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
