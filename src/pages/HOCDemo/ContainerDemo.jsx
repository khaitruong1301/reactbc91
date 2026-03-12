import React, { useState } from 'react'
import ModalContainer from '../HOC/ModalContainer'
import Login from '../Login'
import BaiTapGioHangRedux from '../ReduxDemo/BaiTapGioHangRedux/BaiTapGioHangRedux'
import Register from '../Register'
import TinderClone from '../StateDemo/TinderClone'
import useRedux from '../Hooks/useRedux'
import { changeContentDrawerAction } from '../../redux/reducers/DrawerReducer'
import DemoChangeCarRedux from '../ReduxDemo/DemoChangeCarRedux'
import DemoFormikYup from '../ReactFormDemo/DemoFormikYup'

const ContainerDemo = () => {
    const {dispatch,rootState} = useRedux();
    const [Component, setComponent] = useState(<BaiTapGioHangRedux />)
    return (
        <div className='container'>
            <h3>Container component demo</h3>
            <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                setComponent(<Login />)
            }}>Open login</button>

            <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                setComponent(<Register />)
            }}>Open register</button>

            <button className='btn btn-dark me-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                setComponent(<TinderClone />)
            }}>Open tinder clone</button>


            <ModalContainer title="abc" contentComponent={Component} />


            <button className='btn btn-dark my-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" onClick={()=>{
                const action = changeContentDrawerAction({
                    title:'Change car color',
                    contentComponent: <div>abc</div>
                })
                //dispatch action lên redux
                dispatch(action);
            }}>Open drawer</button>



            <button className='btn btn-dark my-2 mx-2' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" onClick={()=>{
                const action = changeContentDrawerAction({
                    title:'Change car color',
                    contentComponent: <DemoFormikYup />
                })
                //dispatch action lên redux
                dispatch(action);
            }}>Open formik</button>
        </div>
    )
}

export default ContainerDemo