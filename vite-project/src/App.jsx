import '../css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Signup from './pages/SignUp'
import NoPage from './pages/NoPage';
// <<<<<<< HEAD
import ProductPage from './pages/ProductPage';
// =======
import Login from './pages/Login';

// >>>>>>> 1b4a7fe920297353e64d59d85ee6fe15cf1f78d6
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
{/* <<<<<<< HEAD */}
          <Route path="Product" element={<ProductPage />} />
{/* ======= */}
          <Route path="login" element={<Login />} />
{/* >>>>>>> 1b4a7fe920297353e64d59d85ee6fe15cf1f78d6 */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
