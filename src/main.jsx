import { createRoot } from 'react-dom/client'
//css cho toàn ứng dụng
import './assets/css/index.css'

import HomePage from './pages/HomePage'
import DataBinding from './pages/DataBinding'
import CarDemo from './pages/StateDemo/CarDemo'
//import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeaderHome } from './components/HeaderHome'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import BaiTapGioHang from './pages/LiftingStateUpDemo/BaiTapGioHang/BaiTapGioHang'
import AdminTemplate from './Templates/AdminTemplate'
import AdminDashBoard from './pages/AdminPage/AdminDashBoard'
import UserManagement from './pages/AdminPage/UserManagement'
import ProductManagement from './pages/AdminPage/ProductManagement'
import HomeTemplate from './Templates/HomeTemplate'
import DemoUserNavigate from './pages/HookRouting/DemoUserNavigate'
import Profile from './pages/Profile'
import ForgotPass from './pages/ForgotPass'


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        {/* <HeaderHome /> */}
        <Routes>
            <Route path='' element={<HomeTemplate />} >
                <Route index element={<div>Home page</div>} ></Route>
                <Route path='index' element={<HomePage />} ></Route>
                <Route path='data-binding' element={<DataBinding />}></Route>
                <Route path='change-carcolor' element={<CarDemo />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='cart' element={<BaiTapGioHang />}></Route>
                <Route path='demo-useNavigate' element={<DemoUserNavigate />}></Route>
                <Route path='profile' element={<Profile />}></Route>
                <Route path='forgot-pass' element={<ForgotPass />}></Route>
            </Route>
        </Routes>
        <Routes>
            <Route path='admin' element={<AdminTemplate />}>
                <Route index element={<AdminDashBoard />}></Route>
                <Route path='users' element={<UserManagement />}></Route>
                <Route path='products' element={<ProductManagement />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>

)

