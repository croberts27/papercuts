// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./main.css";
import Header from "./components/header";
import Error from "./pages/404.jsx";
import Shop from "./pages/shop.jsx";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Use Switch to render only the first matching route */}
          <Route
            target="_blank"
            rel="noopener noreferrer"
            path="/shop"
            element={Shop}
          />
          <Switch
            target="_blank"
            rel="noopener noreferrer"
            path=""
            element={Error}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
