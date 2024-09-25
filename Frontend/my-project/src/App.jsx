import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Mystate from "./Context/Mystate";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import FilterData from "./Pages/FilterData";
import Watchlists from './Pages/Watchlists';
import SingleProduct from "./Pages/SingleProduct";

Home;
Navbar;
const App = () => {
  return (
    <Mystate>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/filter-data" element={<FilterData/>}></Route>
          <Route path="/watch" element={<Watchlists/>}></Route>
          <Route path="/product/:id" element={<SingleProduct/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Mystate>
  );
};

export default App;
