import image1 from "../assets/image7.png"
function Product() {

  return (
    <div className="card">
      <img src={image1} alt="Denim Jeans"/>
      <h3>Tailored Jeans</h3>
      <p className="price">$19.99</p>
      <p><button>Add to Cart</button></p>
    </div> 
  )
}

export default Product;
