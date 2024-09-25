import React, { useState } from 'react'
import { mocdata } from '../const/data';
import ProductContext from './ProductContext';

const Mystate = (props) => {
    const [Product,setProduct]=useState(mocdata);
  return (
   <ProductContext.Provider value={{Product,setProduct}}>{props.children}</ProductContext.Provider>
  )
}

export default Mystate