import logo from '../assets/logo.avif';
import cart from '../assets/cart.png';
import { Nav, NavLink, NavMenu } 
    from  "react-router-dom";
function Header() {

  return (
    <div className="header">
        <div className="top-header">
            <div className="logo"> 
                <img src={logo} alt="logo"/>
            </div>
            
            <div className="cart-options">
                <img src={cart} alt="cart"/>
                <button className="black-button">Login or Signup</button>
            </div>
        </div>
        <div className="menu">
            
            <Nav>
                <NavMenu>
                    <NavLink to="/Home">
                        Home
                    </NavLink>
                    <NavLink to="/Shop">
                        Shop
                    </NavLink>
                    <NavLink to="/Blogs">
                        Blogs
                    </NavLink>
                    <NavLink to="/Sign-up">
                       Sign-up
                    </NavLink>
                </NavMenu>
             </Nav>
        </div>
    </div>
  )
}

export default Header;
