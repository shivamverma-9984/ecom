import React,{useContext, useState} from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import ProductContext from "../Context/ProductContext";

const Shop = () => {
  const {Product} =useContext(ProductContext)
  

  return (
    <div>
      <div className="container mx-auto  items-center px-4  md:px-16 lg:px-24 py-4 gap-4">
        <h2 className="text-center mb-4 font-bold text-4xl">Shop</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Product.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
