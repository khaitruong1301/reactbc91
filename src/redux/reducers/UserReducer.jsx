import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";
const handleUserLogin = () => {
  if (localStorage.getItem("ACCESS_TOKEN")) {
    return JSON.parse(localStorage.getItem("ACCESS_TOKEN"));
  }
  return null;
};

const initialState = {
  userLogin: handleUserLogin(),
};

const UserReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { setUserLogin } = UserReducer.actions;

export default UserReducer.reducer;

//-----------------------action thunk-----------------------
export const loginActionThunk = (userData) => {
  //closure function
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `https://apistore.cybersoft.edu.vn/api/Users/signin`,
        userData,
      );

      console.log(res.data.content);
      dispatch(setUserLogin(res.data.content));
      message.success("Đăng nhập thành công");
      localStorage.setItem(
        "ACCESS_TOKEN",
        JSON.stringify(res.data.content.accessToken),
      );
    } catch (err) {
      console.log(err);
      message.error("Đăng nhập thất bại");
    }
  };
};
