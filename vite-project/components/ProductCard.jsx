import image1 from "../assets/image7.png"
import { Link } from "react-router-dom";
function Product() {

  return (
    <div className="card">
      <img src={image1} alt="Denim Jeans"/>
      {/* <h3>Tailored Jeans</h3> */}
      <Link className="Product-page" to="/Product">Tailored Jeans</Link>
      <p className="price">$19.99</p>
      <p><button>Add to Cart</button></p>
    </div> 
  )
}

export default Product;
