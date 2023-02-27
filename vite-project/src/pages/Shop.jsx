import React from 'react';
import ProductCard from '../../components/ProductCard'

function Shop() {

    const productList = [];
    for(let i = 0; i < 12; i++) {
        productList.push(<ProductCard />)
    }
    return (
        <div className='shop-page'>
            <h1>Shop</h1>
            <div className='shop-product-list'>
                {productList}
            </div>
        </div>
    );
}

export default Shop;