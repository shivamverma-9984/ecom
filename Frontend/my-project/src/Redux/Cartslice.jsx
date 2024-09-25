import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalQuantity: 0,
  totalprice: 0,
};

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const newItem = action.payload;
      const ItemIndex = state.carts.find((item) => item.id === newItem.id);
  
      if (ItemIndex) {
        ItemIndex.quantity+=1;
        ItemIndex.totalQuantity += newItem.price;
      } else {
        state.carts.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalprice:newItem.price,
          image:newItem.image
        });
      }
      state.totalprice+=newItem.price
      state.totalQuantity++
    },
    removeFromcart(state,action){
      const id=action.payload;
     const findItem=state.carts.find(item=>item.id===id)
     if(findItem){
      state.totalprice-=findItem.totalprice 
      state.totalQuantity-=findItem.totalQuantity 
      state.carts=state.carts.filter(item=>item.id!==id)
     }
    },
    increaseQuantity(state,action){


      const id=action.payload;
      const findItem=state.carts.find(item=>item.id===id)
        if(findItem){
          findItem.quantity++
          findItem.totalprice+=findItem.totalprice 
          state.totalQuantity++;
          state.totalprice+=findItem.totalprice 
         }
     
    },
    decreaseQuantity(state,action){
      const id=action.payload;
      const findItem=state.carts.find(item=>item.id===id)
      if(findItem.quantity>1){
        if(findItem){
          findItem.quantity--
          findItem.totalprice-=findItem.totalprice 
          state.totalQuantity--;
          state.totalprice-=findItem.totalprice 
         }
      }
      
    }
  },
});



export const { addTocart ,removeFromcart ,increaseQuantity,decreaseQuantity} = Cartslice.actions;
export default Cartslice.reducer;



