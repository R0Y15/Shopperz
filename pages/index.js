import React from 'react';

import { client } from '../lib/client';
import { Cart, Footer, FooterBanner, HeroBanner, Layout, Navbar, Product } from '../components';
// import { getServerSideProps } from 'next/dist/build/templates/pages';

const Home = ({ products, bannerData }) => {
  const bannerdata = bannerData.length && bannerData[0];
  
  return (
    <>
      <HeroBanner heroBannerdata={bannerdata} />
  
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBannerdata={bannerdata} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const BannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(BannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home