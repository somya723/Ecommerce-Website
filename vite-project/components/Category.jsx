import image1 from '../assets/image4.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
function Category() {

  return (
    <div className="home-category">
        <div className="cat-section">
            <img src={image1} alt="image1"/>
            <p>Hoodies | Soft, warm & cozy</p>
        </div>
        <div className="cat-section">
            <img src={image2} alt="image2"/>
            <p>Sweatshirts | Don't just sweat, sparkle!</p>
        </div>
        <div className="cat-section">
            <img src={image3} alt="image3"/>
            <p>T-Shirts | Premium Cotton & Comfy</p>
        </div>
       
    </div>
  )
}

export default Category;
