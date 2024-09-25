import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { addTocart } from "../Redux/Cartslice";
import Rating from "../Components/Rating";
import RelatedProduct from "./RelatedProduct";


const SingleProduct = () => {
  const [color,setcolor]=useState(false)
  const { Product } = useContext(ProductContext);
  const { id } = useParams();
  const product = Product.find((item) => item.id == id);
  
  const dispatch = useDispatch();
  const handleAdd = (e, product) => {
    e.preventDefault();
    dispatch(addTocart(product));
    toast.success("Item Added Successfully", {
      style: {
        backgroundColor: "#22c55e",
        color: "white",
        boxShadow: "none",
        // border: "1px solid black",
      },
    });
  };
  
  const handleColor=()=>{
    setcolor(!color)
    color?toast.error("item removed from wishlist", {
      style: {
        backgroundColor: "red",
        color: "white",
        boxShadow: "none",
      },
    }):toast.success("Item added to wishlist", {
      style: {
        backgroundColor: "#22c55e",
        color: "white",
        boxShadow: "none",
      },
    })

  }
  return (
    <div className="container mx-auto  px-4  md:px-16 lg:px-24 py-4 ">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={product.imag}
                className=" h-[500px] w-[600px] mb-4 "
                alt=""
                srcSet=""
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                <img
                  src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick="changeImage(this.src)"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  ${product.price}
                </span>
                <span className="text-gray-500 line-through">$399.99</span>
              </div>
              <div className="flex items-center mb-4">
                <Rating rating={product.rating}/>

                <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Color:</h3>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                  <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                  <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value="1"
                  className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex space-x-4 mb-6">
                <button
                  onClick={(e) => handleAdd(e, product)}
                  className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <Toaster />

                <button onClick={handleColor} className={`  bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 object-cover ${color?"text-red-500  ":""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Wishlist
                </button>
              </div>

         
            </div>
          </div>
        </div>

        {/* <script>
    function changeImage(src) {
            document.getElementById('mainImage').src = src;
        }
  </script> */}
      </div>

      {/* second part */}

       <RelatedProduct related={product}/>
    </div>
  

  
  );
};

export default SingleProduct;
