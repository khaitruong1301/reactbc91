import React, { useState } from 'react'
import ModalHOC from '../HOC/ModalHOC'
import Register from '../Register'
import Login from '../Login'
import GioHang from '../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux'
import BaiTapGioHangRedux from '../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux'
// const ModalRegister = ModalHOC('Register',Register);
// const ModalGioHang = ModalHOC('Giỏ hàng',GioHang);

/*
  Thay vì truyên tham số function thì có thể truyền jsxElement

*/



const HOCDemo = () => {

  const [Component, setComponent] = useState(<Register />);

  const ModalComponent = ModalHOC(Component); //HOC truyền component 

  //Container component truyền jsx qua props 

  return (
    <div className='container'>
      <h3>Demo hoc modal</h3>
      <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark me-2' onClick={() => {
        setComponent(<Register />)
      }}>Open popup đăng ký</button>
      <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark me-2' onClick={() => {
        setComponent(<Login />)
      }}>Open popup đăng nhập</button>

      <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark me-2' onClick={() => {
        setComponent(<BaiTapGioHangRedux />)
      }}>Open popup bt giỏ hàng</button>
      
      {<ModalComponent />}




    </div>
  )
}

export default HOCDemo


//higher order component -> higher order function


/*
    HOF: higher order function
    hàm nhận tham số là 1 hàm và trả về 1 hàm
*/

// function main (callback){
//     return function () {
//         callback();
//         ////

//         return 1;
//     }
// }

// const res = main(()=> {console.log(123)})
// res();