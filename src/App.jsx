// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Header from "./components/header";
import Error from "./pages/404.jsx";
import Shop from "./pages/shop.jsx";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path="/shop"
            element={Shop}
          />
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path=""
            element={Error}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
