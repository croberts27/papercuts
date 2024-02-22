// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Header from "./components/header";
import Error from "./pages/404.jsx";
import Shop from "./pages/shop.jsx";
import About from "./pages/about.jsx";
import Checkout from "./pages/checkout.jsx";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
