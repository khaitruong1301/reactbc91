import { createRoot } from "react-dom/client";
//css cho toàn ứng dụng
import "./assets/css/index.css";
import HomePage from "./pages/HomePage";
import DataBinding from "./pages/DataBinding";
import CarDemo from "./pages/StateDemo/CarDemo";
//import react router dom
import { BrowserRouter, Routes, Route, Navigate,unstable_HistoryRouter as HistoryBrowser } from "react-router-dom";
import { HeaderHome } from "./components/HeaderHome";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BaiTapGioHang from "./pages/LiftingStateUpDemo/BaiTapGioHang/BaiTapGioHang";
import AdminTemplate from "./Templates/AdminTemplate";
import AdminDashBoard from "./pages/AdminPage/AdminDashBoard";
import UserManagement from "./pages/AdminPage/UserManagement";
import ProductManagement from "./pages/AdminPage/ProductManagement";
import HomeTemplate from "./Templates/HomeTemplate";
import DemoUserNavigate from "./pages/HookRouting/DemoUserNavigate";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
import Detail from "./pages/Detail";
import GetAllProductPage from "./pages/Api/GetAllProductPage";
import Search from "./pages/Search";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import ProductAddNewEdit from "./pages/ProductAddnewEdit";
//import store và react redux : để nối với ứng dụng
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DemoChangeNumber from "./pages/ReduxDemo/DemoChangeNumber";
import DemoChangeCarRedux from "./pages/ReduxDemo/DemoChangeCarRedux";
import TinderClone from "./pages/StateDemo/TinderClone";
import DemoTinderCloneRedux from "./pages/ReduxDemo/DemoTinderCloneRedux";
import LiftingStateUpDemo from "./pages/LiftingStateUpDemo/LiftingStateUpDemo";
import BTXemChiTietRedux from "./pages/ReduxDemo/BTXemChiTietRedux/BTXemChiTietRedux";
import ExerciseCarStore from "./pages/LiftingStateUpDemo/ExerciseCarStore";
import BaiTapGioHangRedux from "./pages/ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux";
import HookToiUu from "./pages/HookToiUu/HookToiUu";
import DemoCustomHook from "./pages/CustomHooks/DemoCustomHook";
import HOCDemo from "./pages/HOCDemo/HOCDemo";
import ContainerDemo from "./pages/HOCDemo/ContainerDemo";
import DrawerContainer from "./pages/HOC/DrawerContainer";
import DemoFormikYup from "./pages/ReactFormDemo/DemoFormikYup";
import ResponsiveComponent from "./pages/HOC/ResponsiveComponent";
import DeskTopHome from "./pages/HomePage/DeskTopHome";
import MobileHome from "./pages/HomePage/MobileHome";
import ProductPage from "./pages/ReduxThunk/ProductPage";
import ProductDetail from "./pages/ReduxThunk/ProductDetail";
import LoginPage from "./pages/ReduxThunk/LoginPage/LoginPage";
import DemoAntd from "./pages/Antd/DemoAntd";

import {createBrowserHistory} from'history'

//tương ứng với useNavigate trong component, tuy nhiên có thể sử dụng được ở file không phải component như file cấu hình redux, file cấu hình router
export const history = createBrowserHistory();


createRoot(document.getElementById("root")).render(
  <HistoryBrowser history={history}>
    <Provider store={store}>
      {/* <HeaderHome /> */}
      <DrawerContainer />
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<ResponsiveComponent Component={<GetAllProductPage />} MobileComponent={<MobileHome />}/>}></Route>
          <Route path="index" element={<HomePage />}></Route>
          <Route path="data-binding" element={<DataBinding />}></Route>
          <Route path="change-carcolor" element={<CarDemo />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="cart" element={<BaiTapGioHang />}></Route>
          <Route path="demo-useNavigate" element={<DemoUserNavigate />}></Route>
          <Route path="forgot-pass" element={<ForgotPass />}></Route>
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="profile" element={<Profile />}></Route>

          <Route
            path="redux-changenumber"
            element={<DemoChangeNumber />}
          ></Route>
          <Route
            path="redux-change-car"
            element={<DemoChangeCarRedux />}
          ></Route>
          <Route path="tinder" element={<TinderClone />}></Route>
          <Route
            path="redux-tinder-clone"
            element={<DemoTinderCloneRedux />}
          ></Route>
          <Route
            path="lifting-stateup"
            element={<LiftingStateUpDemo />}
          ></Route>
          <Route
            path="bt-xem-chi-tiet-redux"
            element={<BTXemChiTietRedux />}
          ></Route>
          <Route path="bt-gioHang" element={<BaiTapGioHang />}></Route>
          <Route
            path="bt-gioHang-redux"
            element={<BaiTapGioHangRedux />}
          ></Route>
          <Route path="hook-toi-uu" element={<HookToiUu />}></Route>
          <Route path="custom-hook" element={<DemoCustomHook />}></Route>
          <Route path="hoc-demo" element={<HOCDemo />}></Route>
          <Route
            path="container-component-demo"
            element={<ContainerDemo />}
          ></Route>
          <Route path="formik" element={<DemoFormikYup />}></Route>
          <Route
            path="responsive-demo"
            element={
              <ResponsiveComponent
                Component={<DeskTopHome />}
                MobileComponent={<MobileHome />}
              />
            }
          ></Route>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
          <Route
            path="redux-thunk-product-page"
            element={<ProductPage />}
          ></Route>
          <Route
            path="redux-thunk-product-detail/:id"
            element={<ProductDetail />}
          ></Route>
          <Route path="login-facebook" element={<LoginPage />}></Route>
          <Route path="demo-antd" element={<DemoAntd />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<AdminDashBoard />}></Route>
          <Route path="users" element={<UserManagement />}></Route>
          <Route path="products" element={<ProductManagement />}></Route>
          <Route path="products/addNew" element={<CreateProduct />}></Route>
          <Route path="products/edit/:id" element={<EditProduct />}></Route>
          <Route path="product/:id?" element={<ProductAddNewEdit />}></Route>
        </Route>
      </Routes>
    </Provider>
  </HistoryBrowser>,
);
