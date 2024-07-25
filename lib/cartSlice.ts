import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  description: string;
  qty: number;
  price: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      if (state.items.id === action.payload.id) {
        state.items.qty += 1;
      }

      state.items.push({
        name: action.payload.name,
        description: action.payload.description,
        image: action.payload.image,
        qty: 1,
        price: action.payload.price,
      });
    },

    removeItem: (state: any, action: any) => {
      if (state.items.id === action.payload.id) {
        state.items.qty -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
