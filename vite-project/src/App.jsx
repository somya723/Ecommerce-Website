import '../css/App.css'
import Header from '../components/Header.jsx'
import Category from '../components/Category.jsx'
import Featured from '../components/Featured.jsx'
import FeaturedProduct from '../components/FeaturedProduct.jsx'
import Footer from '../components/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Header/>
      <Category/>
      <Featured/>
      <FeaturedProduct/>
      <Footer/>
    </div>
  )
}

export default App
