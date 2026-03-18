import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducers/numberReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberPeopleReducer } from "./reducers/numPeopleReducer";
import { phoneDetailReducer } from "./reducers/phoneDetailReducer";
import BTGioHangReducer from "./reducers/BTGioHangReducer";
import BTXucXacReducer from "./reducers/BTXucXacReducer";
import DrawerReducer from "./reducers/DrawerReducer";
/*
    reducer: là hàm trả về state, khi state thay đổi thì component nào follow từ state sẽ tự động chạy lại (render lại). Hàm này sẽ được kích hoạt khi ứng dụng khởi tạo và mỗi lần gửi dữ liệu lên
*/
import ProductPageReducer from "./reducers/ProductPageReducer";
import UserReducer from "./reducers/UserReducer";

export const store = configureStore({
  reducer: {
    //Nơi chứa toàn bộ state của ứng dụng
    numberReducer: numberReducer, //numberReducer: numberReducer => numberReducer
    abcReducer: (state = "string", action) => {
      console.log("abcReducer", action);
      return state;
    },
    imgCarReducer,
    numPeopleReducer: numberPeopleReducer,
    phoneDetailReducer,
    BTGioHangReducer, //object literal
    BTXucXacReducer: BTXucXacReducer,
    DrawerReducer: DrawerReducer,
    ProductPageReducer: ProductPageReducer,
    UserReducer: UserReducer,
  },
});
