import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { addTocart } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";
import { addTocart } from "../Redux/Cartslice";
import { setFavourite } from "../Redux/Favourite";
import toast, { Toaster } from "react-hot-toast";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = (e, product) => {
    e.preventDefault();
    dispatch(addTocart(product));
    toast.success("Item Added Successfully", {
      style: {
        backgroundColor: "#22c55e",
        color: "white",
        boxShadow: "none",
      },
    });
  };
  const handleFavourite = (e, product) => {
    e.preventDefault();

    dispatch(setFavourite(product));
    alert("done");
  };

  return (
    // <div className="group  flex w-full max-w-xs flex-col overflow-hidden bg-white">
    //   <Link
    //     to={`/product/${product.id}`}
        
    //     className="relative flex h-40 sm:h-52 overflow-hidden"
    //     onClick={window.scrollTo(0,0)}
    //   >
    //     <img onClick={window.scrollTo(0,0)}
    //       className="absolute top-0 right-0 h-full w-full object-fill"
    //       src={product.imag}
    //       alt="product image"
    //     />
    //     {/* <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
    //         <div className="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
    //         <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
    //         <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
    //       </div> */}
    //     <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
    //       <button
    //         onClick={(e) => handleFavourite(e, product)}
    //         className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className={`h-5 w-5`}
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </button>
    //       <button
    //         onClick={(e) => handleAdd(e, product)}
    //         className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="mr-2 h-5 w-5"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    //         </svg>
    //       </button>
    //       <Toaster />
    //     </div>
    //   </Link>
    //   <div className="mt-2 pb-5">
    //     <Link to="#">
    //       <h5 className="text-center tracking-tight text-gray-500">
    //         {product.name}
    //       </h5>
    //       <h5 className="text-center tracking-tight text-gray-500">
    //         {product.ratimg}
    //       </h5>
    //     </Link>
    //     <div className="mb-5 flex justify-center">
    //       <p>
    //         <span className="text-sm font-bold text-gray-900">
    //           ${product.price}
    //         </span>
    //         <span className="text-sm text-gray-400 line-through">$499</span>
    //       </p>
    //     </div>
    //   </div>
    //   <span className="text-center -mt-[48px]">
    //     {<Rating rating={product.rating}></Rating>}
    //   </span>
    // </div>

    <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <Link to={`/product/${product.id}`} className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img
                src={product.imag}
                alt="Product 2"
                className="h-[200px] sm:h-[200px] w-full object-fill object-top"
              />
            </Link>

            <div className="p-1 text-sm">
              <div className="capitalize  text-gray-800">
                {product.name} | T-shirt
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <h4 className="text-md font-bold text-gray-800">₹{product.price}</h4>

                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    >
                    
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
  );
};

export default ProductCard;
