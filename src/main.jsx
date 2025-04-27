import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext"; // ✅ Import context provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <App /> {/* The BrowserRouter is already inside App.jsx */}
    </ShopContextProvider>
  </StrictMode>
);
