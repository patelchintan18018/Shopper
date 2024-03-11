import { createSlice } from "@reduxjs/toolkit";
import all_products from '../Assets/all_product'

const initialState = {all_products}

const productSlice = createSlice({
    name : 'all_products',
    initialState,
    reducers :{

    }
});

export default productSlice.reducer;