import logo from '../assets/logo.avif';
import cart from '../assets/cart.png';
function Header() {

  return (
    <div className="header">
        <div className="top-header">
            <div className="logo"> 
                <img src={logo} alt="logo"/>
            </div>
            
            <div className="cart-options">
                <img src={cart} alt="cart"/>
                <button>Login or Signup</button>
            </div>
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>Mens</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;
