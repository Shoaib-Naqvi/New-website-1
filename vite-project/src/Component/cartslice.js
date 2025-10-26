import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name : "cart",
    items: [],
    
};
const cartSlice = createSlice({
    name: initialState.name,
    initialState,
    reducers: {
        addtoCart(state, action) {
            state.items.push(action.payload);

        },
        removetoCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        resetCart(state) {
            state.items = [];
            state.totalAmount = 0;

        },
    }
});

export const {addtoCart, removetoCart, resetCart} = cartSlice.actions;
export default cartSlice.reducer;