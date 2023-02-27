import React from 'react';
import Category from '../../components/Category'
import Featured from '../../components/Featured'
import FeaturedProduct from '../../components/FeaturedProduct';
import Footer from '../../components/Footer'

function Home() {
    return (
        <>
            <Category/>
            <Featured/>
            <FeaturedProduct/>
        </>  
    );
}
export default Home;