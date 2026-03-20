import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { loginActionApiAsync } from '../redux/reducers/UserLoginReducer'
import { useDispatch } from 'react-redux'


const Login = () => {
  //dispatch
  const dispatch = useDispatch();
  // Sử dụng formik để quản lý form login email password
  const loginFormik = useFormik({
    initialValues : {
      email : '',
      password : ''
    },
    //validation
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
    }),
    onSubmit : (values) => {
      // console.log('values', values)
      //impot action thunk call api
      const action = loginActionApiAsync(values);
      //dispatch action thunk
      dispatch(action);
    }
  })


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-5 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={loginFormik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={loginFormik.values.email}
              onChange={loginFormik.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={loginFormik.values.password}
              onChange={loginFormik.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}



export default Login