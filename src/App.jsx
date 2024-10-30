import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing"; 
import Home from "./pages/Home";

import { Error404 } from "./components/Error404";
import { Cart } from "./components/Cart";


function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Landing/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App