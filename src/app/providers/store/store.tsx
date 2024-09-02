import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart-slice';
import DataSlice from './data-slice';
import DataCategoriesSlice from './dataCategories-slice';

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    data: DataSlice.reducer,
    categories: DataCategoriesSlice.reducer,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
