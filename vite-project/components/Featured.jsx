import image1 from '../assets/feature.png';
function Featured() {

  return (
    <div className="featured">
        <h2>FEATURED COLLECTIONS</h2>
        <div className="featured-collection">
            <div className="featured-image">
                <img src={image1} alt="image1"/>
            </div>

            <div className="featured-child">
                <h3>Krishna - The All Attractive</h3>
                <p>God has many names, and the most attractive of all infinite such names is Krishna. Krishna literally means - The All Attractive One - and we invite Him in our hearts and on our Ts.</p>
                <button className="black-button">View Collection</button>
            </div>
        </div>
    </div>
  )
}

export default Featured;
