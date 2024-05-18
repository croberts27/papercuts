import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Header from "./components/header";
import Error from "./pages/404.jsx";
import Shop from "./pages/shop.jsx";
import About from "./pages/about.jsx";
import Product from "./pages/product.jsx";
import Review from "./pages/review.jsx";
import Art from "./pages/art.jsx";
import Checkout from "./pages/checkout.jsx";
import Payment from "./pages/payment.jsx";
import { CartProvider } from "./context/CartContext";
import StripeProvider from "./context/StripeProvider.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <StripeProvider>
          <>
            <Header />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/available-prints" element={<Shop />} />
              <Route path="/art" element={<Art />} />
              <Route path="/order-review" element={<Review />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </>
        </StripeProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
