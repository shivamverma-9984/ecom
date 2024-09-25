import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromcart} from "../Redux/Cartslice";
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
  const cart = useSelector(state=> state.cart.carts);
  const dispatch=useDispatch();
  console.log(cart.length)
  const handleRemove=(id)=>{
    dispatch(removeFromcart(id))
    toast.error("Item Remove Successfully",{
    // style:{
    // width:'45%',
    // backgroundColor:"",
    // boxShadow:'none',
    // border:'4px solid bold',
    // borderRadius:"2px solid bold"
    // }
    style: {
        
      backgroundColor: "red",
      color:'white',
      boxShadow: "none",
      // border: "1px solid black",

    },
  })
  }
  return (
    <div>
      
     { 
     cart.length>0?
        <div className="container mx-auto  items-center px-4  md:px-16 lg:px-24 py-4 gap-4">
          <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="md:col-span-2 space-y-4">
              {cart.map((product) => {
               
                return (
                  <div className="flex gap-4 bg-white px-4 py-4 rounded-md  border-2">
                    <div className="flex gap-4">
                      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                        <img
                          src={product.imag}
                          className="w-full h-full object-contain"
                        srcSet=""
                        />
                      </div>

                      <div className="flex flex-col gap-4">
                        <div>
                          <h3 className="text-base font-bold text-gray-800">
                            Stylish Golden Watch
                          </h3>
                          <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                            Color:{" "}
                            <span className="inline-block w-5 h-5 rounded-md bg-[#ac7f48]"></span>
                          </p>
                        </div>

                        <div className="mt-auto flex items-center gap-3">
                          <button
                            type="button"
                            className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                          onClick={()=>dispatch(decreaseQuantity(product.id))}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2 fill-white"
                              viewBox="0 0 124 124"
                            >
                              <path
                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                          <span className="font-bold text-sm leading-[18px]">
                            {product.quantity}
                          </span>
                          <button
                            type="button"
                            className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
                          onClick={()=>dispatch(increaseQuantity(product.id))}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2 fill-white"
                              viewBox="0 0 42 42"
                            >
                              <path
                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ml-auto flex flex-col">
                      <div className="flex items-start gap-4 justify-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 cursor-pointer fill-gray-400 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>

                        <svg onClick={()=>handleRemove(product.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 cursor-pointer fill-gray-400 inline-block"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        <Toaster/>
                      </div>
                      <h3 className="text-base font-bold text-gray-800 mt-auto">
                        {(product.price*product.quantity).toFixed(2)}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
         {
          cart.map((product)=>{
            return 
          })
         }

            <div className="bg-white rounded-md px-4 py-4 h-max border-2">
              <ul className="text-gray-800 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Subtotal <span className="ml-auto font-bold">$200</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping <span className="ml-auto font-bold">$2.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax <span className="ml-auto font-bold">$4.00</span>
                </li>
                <hr className="border-gray-300" />
                <li className="flex flex-wrap gap-4 text-sm font-bold">
                  Total <span className="ml-auto">$206.00</span>
                </li>
              </ul>

              <div className="mt-6 space-y-2">
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
                >
                  Continue Shopping{" "}
                </button>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <img
                  src="https://readymadeui.com/images/master.webp"
                  alt="card1"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/visa.webp"
                  alt="card2"
                  className="w-10 object-contain"
                />
                <img
                  src="https://readymadeui.com/images/american-express.webp"
                  alt="card3"
                  className="w-10 object-contain"
                />
              </div>
            </div>
          </div>


        </div>
        
        
        
        :<div className="flex justify-center">
          <img src="data:image/jpeg;base64,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" alt="" srcset="" />
        </div>
       
            }
    </div>
  );
};

export default Cart;
