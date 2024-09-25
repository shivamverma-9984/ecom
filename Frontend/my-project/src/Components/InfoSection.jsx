import React from "react";
import { FaShoppingCart ,FaHeadset,FaMoneyBillWave ,FaLock ,FaTag } from 'react-icons/fa';

const infodata=[
    {
     icon:<FaShoppingCart className='text-xl sm:text-2xl text-red-600'/> ,
     title:"free shopping" ,
     description: "get your orders delivered with no extra cost"
    
    },
    {
     icon:<FaHeadset className='text-xl sm:text-2xl text-red-600'/> ,
     title:"support 24/7" ,
     description: "we are here to assist you anything"
    
    },
    {
     icon:<FaMoneyBillWave className='text-xl sm:text-2xl text-red-600'/> ,
     title:"100% money back" ,
     description: "full refund of you are not satified"
    
    },
    {
     icon:<FaLock  className='text-xl sm:text-2xl text-red-600'/> ,
     title:"payment secure" ,
     description: "your payment information is  safe with us"
    
    },
    // {
    //  icon:<FaTag  className='text-xl sm:text-2xl text-red-600'/> ,
    //  title:"discount " ,
    //  description: "enjoy the best price on our products"
    
    // },
    
    ]
const InfoSection = () => {
  return (
    <div className="container mx-auto px-4  md:px-16 lg:px-24  py-4 md:mt-36">
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 ">
        {infodata.map((item, index) => {
          return <div key={index} className="flex flex-col text-center items-center p-2 sm:p-4 border border-gray-300 shadow-lg capitalize transform transition-transform duration-300 hover:scale-105">
            <div className=""> {item.icon}</div>
            <h3 className="text-sm sm:text-lg mt-2 font-bold">{item.title}</h3>
            <p className="mt-2 text-[12px] sm:text-sm text-gray-500">{item.description}</p>
          </div>
})}
      </div>
    </div>
  );
};

export default InfoSection;
