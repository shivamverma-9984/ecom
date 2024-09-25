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
 const [color,setcolor]=useState(false)


  }
  return (
  //   <div className="container mx-auto  px-4  md:px-16 lg:px-24 py-4 ">
  //     <div className="bg-gray-100">
  //       <div className="container mx-auto px-4 py-8">
  //         <div className="flex flex-wrap -mx-4">
  //           <div className="w-full md:w-1/2 px-4 mb-8">
  //             <img
  //               src={product.imag}
  //               className=" h-[500px] w-[600px] mb-4 "
  //               alt=""
  //               srcSet=""
  //             />
  //             <div className="flex gap-4 py-4 justify-center overflow-x-auto">
  //               <img
  //                 src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
  //                 alt="Thumbnail 1"
  //                 className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
  //                 onClick="changeImage(this.src)"
  //               />
  //             </div>
  //           </div>

  //           <div className="w-full md:w-1/2 px-4">
  //             <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
  //             <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
  //             <div className="mb-4">
  //               <span className="text-2xl font-bold mr-2">
  //                 ${product.price}
  //               </span>
  //               <span className="text-gray-500 line-through">$399.99</span>
  //             </div>
  //             <div className="flex items-center mb-4">
  //               <Rating rating={product.rating}/>

  //               <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
  //             </div>
  //             <p className="text-gray-700 mb-6">{product.description}</p>

  //             <div className="mb-6">
  //               <h3 className="text-lg font-semibold mb-2">Color:</h3>
  //               <div className="flex space-x-2">
  //                 <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
  //                 <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
  //                 <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
  //               </div>
  //             </div>

  //             <div className="mb-6">
  //               <label
  //                 htmlFor="quantity"
  //                 className="block text-sm font-medium text-gray-700 mb-1"
  //               >
  //                 Quantity:
  //               </label>
  //               <input
  //                 type="number"
  //                 id="quantity"
  //                 name="quantity"
  //                 min="1"
  //                 value="1"
  //                 className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  //               />
  //             </div>

  //             <div className="flex space-x-4 mb-6">
  //               <button
  //                 onClick={(e) => handleAdd(e, product)}
  //                 className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   strokeWidth="1.5"
  //                   stroke="currentColor"
  //                   className="size-6"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  //                   />
  //                 </svg>
  //                 Add to Cart
  //               </button>
  //               <Toaster />

  //               <button onClick={handleColor} className={`  bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}>
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   strokeWidth="1.5"
  //                   stroke="currentColor"
  //                   className={`size-6 object-cover ${color?"text-red-500  ":""}`}
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  //                   />
  //                 </svg>
  //                 Wishlist
  //               </button>
  //             </div>

         
  //           </div>
  //         </div>
  //       </div>

  //       {/* <script>
  //   function changeImage(src) {
  //           document.getElementById('mainImage').src = src;
  //       }
  // </script> */}
  //     </div>

  //     {/* second part */}

  //      <RelatedProduct related={product}/>
  //   </div>
  
  <div class="font-sans">
  <div class="p-4 max-w-6xl max-md:max-w-xl mx-auto">
    <div class="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
      <div class="w-full lg:sticky top-0 flex gap-3">
        <img
          // src="https://readymadeui.com/images/product2.webp"
          src={product.imag}
          alt="Product"
          class="w-3/4 rounded-lg object-cover"
        />

        <div class="w-20 flex flex-col max-sm:mb-4 gap-3">
          <img
            src="https://readymadeui.com/images/product1.webp"
            alt="Product1"
            class="w-full cursor-pointer rounded-lg"
          />
          <img
            src="https://readymadeui.com/images/product6.webp"
            alt="Product2"
            class="w-full cursor-pointer rounded-lg"
          />
          <img
            src="https://readymadeui.com/images/product7.webp"
            alt="Product3"
            class="w-full cursor-pointer rounded-lg"
          />
          <img
            src="https://readymadeui.com/images/product3.webp"
            alt="Product4"
            class="w-full cursor-pointer rounded-lg"
          />
        </div>
      </div>

      <div>
        <h2 class="text-2xl max-sm:text-2xl font-bold text-gray-800">
          {product.name} | T-shirt
        </h2>
        <div class="mt-8">
          <h3 class="text-gray-800 text-4xl max-sm:text-3xl font-bold">
            ${product.price}
          </h3>
        </div>

        <div class="mt-8">
          <h3 class="text-xl font-bold text-gray-800">Sizes</h3>
          <div class="flex flex-wrap gap-4 mt-4">
            <button
              type="button"
              class="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0"
            >
              SM
            </button>
            <button
              type="button"
              class="w-12 h-11 border-2 hover:border-gray-800 border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0"
            >
              MD
            </button>
            <button
              type="button"
              class="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0"
            >
              LG
            </button>
            <button
              type="button"
              class="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0"
            >
              XL
            </button>
            <button
              type="button"
              class="w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0"
            >
              XXL
            </button>
          </div>
        </div>

        <div class="mt-8">
          <h3 class="text-xl font-bold text-gray-800">Colors</h3>
          <div class="flex flex-wrap gap-4 mt-4">
            <button
              type="button"
              class="w-12 h-11 bg-black border-2 border-white hover:border-gray-800 rounded-lg shrink-0"
            ></button>
            <button
              type="button"
              class="w-12 h-11 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"
            ></button>
            <button
              type="button"
              class="w-12 h-11 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"
            ></button>
            <button
              type="button"
              class="w-12 h-11 bg-red-400 border-2 border-white hover:border-gray-800 rounded-lg shrink-0"
            ></button>
          </div>
        </div>

        <div class="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            class="flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white border border-gray-800 text-base rounded-lg"
            onClick={(e) => handleAdd(e, product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 cursor-pointer fill-current inline mr-3"
              viewBox="0 0 512 512"
            >
              <path
                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                data-original="#000000"
              ></path>
            </svg>
            Add to cart
          </button>

          <button
            type="button"
            class=" flex items-center justify-center px-8 py-4 bg-transparent hover:bg-gray-50 text-gray-800 border border-gray-800 text-base rounded-lg"
          
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 cursor-pointer fill-current inline mr-3 "
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
            Add to wishlist
          </button>
        </div>

        <ul class="grid grid-cols-2 mt-10">
          <li class="text-gray-800 font-semibold text-base text-center bg-gray-50 py-3 px-4 border-b-2 border-gray-800 cursor-pointer">
            Details
          </li>
          <li class="text-gray-800 font-semibold text-base text-center py-3 border-b-2 px-4 cursor-pointer">
            Description
          </li>
        </ul>

        <ul class="space-y-3 list-disc pl-4 text-sm text-gray-600 mt-8">
          <li>
            A gray t-shirt is a wardrobe essential because it is so
            versatile.
          </li>
          <li>
            Available in a wide range of sizes, from extra small to extra
            large, and even in tall and petite sizes.
          </li>
          <li>
            This is easy to care for. They can usually be machine-washed
            and dried on low heat.
          </li>
          <li>
            You can add your own designs, paintings, or embroidery to make
            it your own.
          </li>
        </ul>
      </div>
    </div>
  </div>
  
      <RelatedProduct related={product}/>
</div>
  
  );
};

export default SingleProduct;
