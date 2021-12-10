import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      if (state.quantity === 0) {
        state.products.pop(action.payload);
        state.total -= action.payload.price * action.payload.quantity;
      } else if (state.quantity > 0) {
          state.quantity -= 1;
          state.products.pop(action.payload);
          state.total -= action.payload.price * action.payload.quantity;
      }
    },
    clearResults: (state, action) => {
      state.quantity = 0;
      state.total = 0;
      state.products.splice(0, state.products.length);
    }
  },
});

export const { addProduct, removeProduct, clearResults } = cartSlice.actions;
export default cartSlice.reducer;
