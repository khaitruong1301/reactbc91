import React, { useState } from 'react'
import ModalContainer from '../HOC/ModalContainer'
import Login from '../Login'
import BaiTapGioHangRedux from '../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux'

const ContainerDemo = () => {

    const [Component,setComponent] = useState(<BaiTapGioHangRedux />)



  return (
    <div className='container'>
        <h3>Container component demo</h3>
        <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId">Open login</button>

        <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId">Open register</button>

        <ModalContainer title="abc" contentComponent={Component} />

    </div>
  )
}

export default ContainerDemo