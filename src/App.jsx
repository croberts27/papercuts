// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Header from "./components/header";
import Error from "./pages/404.jsx";
import Shop from "./pages/shop.jsx";
import About from "./pages/about.jsx";
import Product from "./pages/product.jsx";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
