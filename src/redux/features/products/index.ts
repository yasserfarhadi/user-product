import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { Users } from '../../../api/Models/Users';

// import { fetchUsers } from '../../../api';
// import { Row } from '../../../types/CardRow';
import { fetchProducts } from '../../../api';
import { Products } from '../../../api/models/products';

interface InitialState {
  isLoading: boolean;
  data: Products;
  error: string | null;
  searchParam: string;
}

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: '',
  searchParam: '',
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_data, thunkApi) => {
    try {
      const users = await fetchProducts();
      return users;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
      return [];
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // setSearchParam: (state, action: PayloadAction<string>) => {
    //   state.searchParam = action.payload;
    // },
    // editItem: (state, action: PayloadAction<Row>) => {
    //   const foundItem = state.data.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (foundItem) {
    //     Object.assign(foundItem, action.payload);
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Products>) => {
          state.isLoading = false;
          if (action.payload && action.payload.length !== 0) {
            state.data = action.payload;
          }
          state.error = null;
        }
      )
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Somthing went wrong';
      });
  },
});

export default productsSlice.reducer;
// export const { setSearchParam, editItem } = productsSlice.actions;
