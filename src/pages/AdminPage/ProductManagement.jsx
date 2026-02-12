import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

//Quản lý tất cả sản phẩm của giao diện home (Cùng api với home)
const ProductManagement = () => {
  const [arrProduct, setArrayProduct] = useState([]);

  //Call api product get all
  const getAllProductApi = async () => {
    try {
      const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product`);
      setArrayProduct(res.data.content);
      console.log(res.data.content)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllProductApi();
  }, []);



  return (
    <div className='container'>

      <h3>Product management</h3>
      <NavLink to={'/admin/products/addNew'} className={'btn btn-success'}>Add new product</NavLink>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((item) => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt='...' width={50} height={50} />
              </td>
              <td>
                {item.name}
              </td>
              <td>{item.price}</td>
              <td>
                <NavLink to={`/admin/products/edit/${item.id}`} className='btn btn-primary mx-2'>Edit</NavLink>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>


    </div>
  )
}

export default ProductManagement