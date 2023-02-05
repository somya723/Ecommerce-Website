import ProductCard from '../components/ProductCard'
function FeaturedProduct() {

  return (
    <div className="featured-product">
        <h2>FEATURED PRODUCTS</h2>
        <div className="featured-pro-section">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default FeaturedProduct;
