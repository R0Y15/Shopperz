import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const SiteLoader = () => {
    return (
        <div className='site-loading'>
            <h1>Shopperz</h1>
            <div className='loader'>
                <InfinitySpin
                    width='250'
                    color="#324d67"
                />
            </div>
            <h2>Getting Everything Ready<span className='spl-txt'> Just For You </span></h2>
        </div>
    )
}

export default SiteLoader