import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface selectedItem {
  id: number;
  title: string;
  type: 'user' | 'product';
}

interface InitialState {
  data: selectedItem[];
}
const initialState: InitialState = {
  data: [],
};

const selectedItems = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<selectedItem>) => {
      const isItemExist = state.data.find(
        (item) =>
          item.id === action.payload.id && item.type === action.payload.type
      );
      if (!isItemExist) {
        state.data.push(action.payload);
      }
    },
    deleteItem: (state, action: PayloadAction<selectedItem>) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    clearUsers: (state) => {
      state.data = state.data.filter((item) => item.type !== 'user');
    },
    clearProducts: (state) => {
      state.data = state.data.filter((item) => item.type !== 'product');
    },
    clearAll: (state) => {
      state.data = [];
    },
  },
});

export default selectedItems.reducer;
export const { addItem, deleteItem, clearAll, clearProducts, clearUsers } =
  selectedItems.actions;
