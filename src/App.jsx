import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing"; 
import Home from "./pages/Home";
import  DetailsProduct  from "./pages/DetailsProduct";

import { Error404 } from "./components/Error404";
import { CartProvider } from "./context/CartContext";



function App() {
    return (
      <>
        <CartProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/items/:id" element={<DetailsProduct />} />
          <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </>
    );
  }

  export default App