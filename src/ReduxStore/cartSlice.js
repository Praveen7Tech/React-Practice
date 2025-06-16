import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState :{
        Items : [],
    },
    reducers: {
        addItem :(state,actiom)=>{
            state.Items.push(actiom.payload)
        },
        removeItem : (state,action)=>{
            state.Items.pop()
        },
        clearCart:(state,action)=>{
            state.Items = []
        }
    }
})

export const {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;