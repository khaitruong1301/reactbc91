import React, { useState } from 'react'
import ModalContainer from '../HOC/ModalContainer'
import Login from '../Login'
import BaiTapGioHangRedux from '../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux'
import Register from '../Register'
import TinderClone from '../StateDemo/TinderClone'

const ContainerDemo = () => {

    const [Component,setComponent] = useState(<BaiTapGioHangRedux />)



  return (
    <div className='container'>
        <h3>Container component demo</h3>
        <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
            setComponent(<Login />)
        }}>Open login</button>

        <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
            setComponent(<Register />)
        }}>Open register</button>

         <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
            setComponent(<TinderClone />)
        }}>Open tinder clone</button>


        <ModalContainer title="abc" contentComponent={Component} />

    </div>
  )
}

export default ContainerDemo