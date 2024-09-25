import {createSlice} from "@reduxjs/toolkit"

const initialState={
    favourite:[]

}


const favourite=createSlice({
    name:'favourite',
    initialState,
    reducers :{
        setFavourite(state,action){
            state.favourite=action.payload
        },
       
    }
})
export const {setFavourite}=favourite.actions;
export default favourite.reducer;