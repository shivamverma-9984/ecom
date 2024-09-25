import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import ProductSlice from "./ProductSlice";
import Favourite from "./Favourite";

const store=configureStore({
    reducer:{
        cart:Cartslice,
        product:ProductSlice,
        favourite:Favourite
    }
})


export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./Cartslice";

// const store = configureStore({
//     reducer :{
//         cart : cartSlice
//     },
//     // devTools : true
// })

// export default store;