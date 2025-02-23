import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import productSlice from "./slices/productslice"
import AddproductSlice from "./slices/addProductSlice"
import categorySlice from "./slices/CategorySlice"
import subCtegoryslice from "./slices/subCategoryslice";
import userSlice from "./slices/userSlice";

import orderSlice from "./slices/orderSlice";

import adminsSlice from "./slices/adminsSlice";

const store = configureStore({
    reducer: {
        user:userSlice,
        productSlice,
        AddproductSlice,
        categorySlice,
        subCategory: subCtegoryslice,
        admins: adminsSlice,
        orderSlice
    }
    
});

export default store;
