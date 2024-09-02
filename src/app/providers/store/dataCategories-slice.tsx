import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type DataCategories = {
  slug: string;
  name: string;
  url?: string;
};

export const fetchDataCategories = createAsyncThunk<
  DataCategories[],
  undefined,
  { rejectValue: string }
>('categories/fetchDataCategories', async function (_, { rejectWithValue }) {
  const response = await fetch('https://dummyjson.com/products/categories');
  if (!response.ok) {
    return rejectWithValue('Oops, something went wrong');
  }
  const data = (await response.json()) as DataCategories;
  return data;
});

type DataCategoriesState = {
  list: DataCategories[];
  loading: boolean;
  error: string | null;
};

const initialState: DataCategoriesState = {
  list: [],
  loading: false,
  error: null,
};
const DataCategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDataCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default DataCategoriesSlice;
