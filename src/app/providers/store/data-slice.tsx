import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type Data = {
  total: number;
  limit: number;
  skip: number;
  products: [
    {
      id: string;
      title: string;
      category?: string;
      price: number;
      discountPercentage: number;
      brand: string;
      images: string[];
    },
  ];
};

export const fetchData = createAsyncThunk<Data[], undefined, { rejectValue: string }>(
  'data/fetchData',
  async function (_, { rejectWithValue }) {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      return rejectWithValue('Oops, something went wrong');
    }
    const data = (await response.json()) as Data;
    return data;
  },
);

type DataState = {
  list: {};
  loading: boolean;
  error: string | null;
  total: number;
  limit: number;
  skip: number;
  currentPage: number;
};
const initialState: DataState = {
  list: {},

  loading: false,
  error: null,
  total: 0,
  limit: 9,
  skip: 9,
  currentPage: 1,
};
const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default DataSlice;
