import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true, // Opt-in to React.startTransition behavior in v7
        v7_relativeSplatPath: true, // Opt-in to relative route resolution changes in v7
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        
        <Route path="/product/:productId" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
