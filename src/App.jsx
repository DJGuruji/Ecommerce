import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUsPage from "./pages/AboutUsPage"
import ProductPage from './pages/ProductPage';
import ProductView from './pages/ProductView';
import CategoryView from './pages/CategoryView';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmationPage";
import ProductDetail from "./pages/ProductDetail";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/category/:id" element={<CategoryView />} />

        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
        <Route path="/productsdetail" element={<ProductDetail />} />
        <Route path="/search" element={<SearchPage />} />
    
      </Routes>
    {/* <div className='sticky bottom-0'>
    <Footer />
    </div> */}
    </Router>
  );
}

export default App;