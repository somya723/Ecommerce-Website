import logo from '../assets/logo.avif';
import cart from '../assets/cart.png';
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="header">
        <div className="top-header">
            <div className="logo"> 
                <img src={logo} alt="logo"/>
            </div>
            
            <div className="cart-options">
                <img src={cart} alt="cart"/>
                <button className="black-button"><Link className='button-link' to="/SignUp">Login or Sign Up</Link></button>
            </div>
        </div>
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <Link className="header-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/blog">Blogs</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header;
