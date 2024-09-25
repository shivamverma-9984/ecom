import React, { useContext, useState } from "react";
import { addTocart } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";
import ProductContext from "../Context/ProductContext";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Rating from "../Components/Rating";

const RelatedProduct = ({ related }) => {
  const [color, setcolor] = useState(false);
  const { Product } = useContext(ProductContext);
  const filterproduct = Product.filter(
    (item) => item.category == related.category
  );
  console.log(filterproduct);
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

  const handleColor = () => {
    setcolor(!color);
  };
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-serif text-center">Related Product</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {filterproduct.map((item) => {
          return (
            <div
              key={item.id}
              className="group  flex w-full max-w-xs flex-col overflow-hidden bg-white"
            >
              {console.log(item.imag)}
              <Link
                to={`/product/${item.id}`}
                className="relative flex h-40 sm:h-52 overflow-hidden"
              >
                <img
                  className="absolute top-0 right-0 h-full w-full object-fill"
                  // src={
                  //   "data:image/jpeg;base64,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"
                  // }
                  src={item.img}
                  alt="product image"
                />

                <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                  <button
                    onChange={handleColor}
                    className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${color ? "text-green-500" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                        className={`${color ? "bg-green-500" : ""}`}
                      />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => handleAdd(e, item)}
                    className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                  <Toaster />
                </div>
              </Link>
              <div className="mt-2 pb-5">
                <Link to="#">
                  <h5 className="text-center tracking-tight text-gray-500">
                    {item.name}
                  </h5>
                  <h5 className="text-center tracking-tight text-gray-500">
                    {item.ratimg}
                  </h5>
                </Link>
                <div className="mb-5 flex justify-center">
                  <p>
                    <span className="text-sm font-bold text-gray-900">
                      ${item.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      $499
                    </span>
                  </p>
                </div>
              </div>
              <span className="text-center -mt-[48px]">
                {<Rating rating={item.rating}></Rating>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
