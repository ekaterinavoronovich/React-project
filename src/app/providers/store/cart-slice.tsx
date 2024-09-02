import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartVisible: false,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ToggleCartVisibility(state) {
            state.isCartVisible = !state.isCartVisible;
        },
    },
});
export const CartSliceActions = CartSlice.actions;
export default CartSlice;
