//rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { set } from "lodash";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const ProductPageReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProduct: (state, action) => {
      state.arrProduct = action.payload;
    },

    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { setArrProduct, setProductDetail } = ProductPageReducer.actions;

export default ProductPageReducer.reducer;

//-----------------------action thunk-----------------------
export const getAllProductActionThunk = () => {
  return async (dispatch) => {
    try {
      //thực thi api
      const res = await axios.get(
        `https://apistore.cybersoft.edu.vn/api/Product`,
      );
      //dispatch lên reducer
      const actionPayload = setArrProduct(res.data.content);
      dispatch(actionPayload);
      console.log(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetailActionThunk = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`,
      );
      //Sau khi lấy dữ liệu từ api về thì đưa vào state
      const actionPayload = setProductDetail(res.data.content);
      dispatch(actionPayload);
      console.log(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};
