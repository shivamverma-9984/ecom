import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

const FilterData = () => {
const filterProduct=useSelector(state=>state.product.filterData)

  return (
    <div>
        {
            filterProduct.length>0?
            <div className="container mx-auto  items-center px-4  md:px-16 lg:px-24 py-4 gap-4">
            <h2 className="text-center mb-4 font-bold text-4xl">Shop</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filterProduct.map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
            </div>
          </div>:<div className='flex justify-center'>
            <img src="https://www.avisa.care//assets/img/No_Product_Found.png" className="" />
          </div>
        }
      
    </div>
  )
}

export default FilterData