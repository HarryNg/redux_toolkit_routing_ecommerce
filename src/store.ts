import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice';
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
      products: productReducer,
      users: userReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;