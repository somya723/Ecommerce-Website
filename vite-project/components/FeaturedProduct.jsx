import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
function FeaturedProduct() {

  return (
    <div className="featured-product">
        <h2>FEATURED PRODUCTS</h2>
        <div className="featured-pro-section">
          <div className="cat-section">
              <img src={image6} alt="image6"/>
              <h3>Krishna - Dark colors Hoodie</h3>
              <p>Rs 1499.00</p>
          </div>
          <div className="cat-section">
              <img src={image7} alt="image7"/>
              <h3>Krishna - Light colors Sweatshirt</h3>
              <p>Rs 1499.00</p>
          </div>
          <div className="cat-section">
              <img src={image8} alt="image8"/>
              <h3>Krishna - Light colors Hoodie</h3>
              <p>Rs 1499.00</p>
          </div>
            <div className="cat-section">
              <img src={image9} alt="image9"/>
              <h3>Ram - Light colors Sweatshirt</h3>
              <p>Rs 1499.00</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProduct;
