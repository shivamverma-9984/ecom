import React, { useContext, useEffect } from "react";
import { categories, mocdata } from "../const/data";
import InfoSection from "../Components/InfoSection";
import CategorySection from "../Components/CategorySection";
import ProductCard from "../Components/ProductCard";
import Shop from "./Shop";
import Mystate from "../Context/Mystate";
import {setProducts } from "../Redux/ProductSlice" 
import ProductContext from './../Context/ProductContext';
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(setProducts(mocdata));
  });

  // console.log(products)
  // const {Product} =useContext(ProductContext)
  // console.log(Product)
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4  md:px-16 lg:px-24 py-4 gap-4 ">
        <div className="bg-gray-200 w-full md:w-3/12  ">
          <div className="text-center p-1 text-lg font-semibold bg-red-500 capitalize text-white">
            Shop by categories
          </div>
          <ul className="border p-3 space-y-3 capitalize">
            {categories.map((item, idx) => {
              return (
                <li key={idx} className="flex items-center  space-x-4">
                  <div className="h-2 w-2 rounded-full border top-2 border-red-500 mr-2"></div>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" w-full md:w-9/12 h-72 py-3 relative ">
          <img
            className="w-full h-64 md:h-96 "
            src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNob3BwaW5nfGVufDB8fDB8fHww"
            alt=""
            srcSet=""
          />
          <div className="absolute top-4 left-2 md:top-16 md:left-4 space-y-3">
            <p className="text-3xl font-bold uppercase">welcome to e-shop</p>
            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              million+products
            </h1>
            <button className="bg-red-500 font-bold px-4 py-1 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className="container mx-auto  items-center px-4  md:px-16 lg:px-24 py-4 gap-4">
        <h2 className="text-center mb-4 font-bold text-4xl">Top Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
          (idx+6)%6==0 && idx!=24&& idx!=30 ?<ProductCard key={idx} product={product} />:""
      
          ))}
        </div>
      </div>
      <Shop/>
    </div>
  );
};

export default Home;
