import React from 'react';
import image9 from '../../assets/image9.png';
import ProductCard from '../../components/ProductCard'

function ProductPage() {
    const productList = [];
    for(let i = 0; i < 4; i++) {
        productList.push(<ProductCard />)
    }
    return (
       <>
        <div className="product-page-section1">
            <img src={image9} alt="image" className="product-page-img"/>
            <div className="product-right-section">
                <h1>Ram - Light colors Sweatshirt</h1>
                <p>Rs 1499.00</p>
                <p className="product-charge-details">Tax included. Shipping calculated at checkout.</p>
                <div className='color dropdown'>
                    <label for="Color">Color</label>
                    <select name="color" id="color">
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        </select>
                </div>
                <div className='size dropdown'>
                    <label for="size">Size</label>
                    <select name="size" id="size">
                        <option value="xs">XS</option>
                        <option value="small">Small</option>
                        </select>
                </div>
                <div className='quantity dropdown'>
                    <label for="Quantity">Quantity</label>
                    <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        </select>
                </div>
                <button className='add-to-cart-btn'>Add to Cart</button>
                <button className='buy-now-btn'>Buy Now</button>
            </div>
        </div>
        <div className="product-page-section2">
            <p>This sweatshirt is a perfect addition to any wardrobe. It has a crew neck, and it’s made from 100% combed cotton with a single jersey to make it wrinkle-free and smooth.</p>
            <ul>
                <li>Unisex sweatshirt pattern with a regular fit</li>
                <li>Solid colors are 100% combed cotton</li>
                <li>Heather colors are a mixture of cotton and polyester. Melange Grey is 83% cotton and 17% polyester.</li>
                <li>Weight: 320 GSM bio-washed fabric</li>
                <li>Sustainable Inks used for Printing - water-based, toxin-free, and non-hazardous with lower carbon footprint</li>
                <li>Single jersey and pre-shrunk fabric</li>
                <li>Side-seamed</li>
                <li>Made in India</li>
            </ul>
        </div>
        <div className="product-page-section3 shop-product-list">
        {productList}
        </div>
    </>
    );
}

export default ProductPage;