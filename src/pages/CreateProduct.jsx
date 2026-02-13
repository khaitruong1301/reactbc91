import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


//Bước 1: tạo giao diện html cho component để người dùng có chỗ input data vào như API
//Bước 2: Gọi api thêm tương ứng


const CreateProduct = () => {

  const navigate =useNavigate();
  const productInfo = useFormik({
    initialValues: {
      "id": 0,
      "name": "string",
      "price": 0,
      "description": "string",
      "shortDescription": "string",
      "quantity": 0,
      "imgLink": "string"
    },
    onSubmit: async (values) => {
      console.log(values)
      //Gọi api create product
      try{
        const res = await axios.post(`https://apistore.cybersoft.edu.vn/api/Product/addNew`,values);

        console.log(res.data.content);
        //Nếu thành công 
        alert('Thêm sản phẩm thành công !');
        //Thành công chuyển vào trang admin/products
        navigate('/admin/products');



      }catch(err){
        console.log(err.response.data)
        alert('Thêm sản phẩm thất bại !');

      }

    }
  })


  return (
    <div className="container mt-4 ">
      <h1 className="card-header fw-bold mt-2">
        Product Information
      </h1>
      <div className="card shadow-sm ">

        <div className="card-body">
          <form onSubmit={productInfo.handleSubmit}>
            {/* ID */}
            <div className="mb-3">
              <label className="form-label">ID</label>
              <input
                type="number"
                className="form-control"
                name="id"
                placeholder="Enter product ID"
                value={productInfo.values.id}
                onInput={productInfo.handleChange}
              />
            </div>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter product name"
                 value={productInfo.values.name}
                onInput={productInfo.handleChange}
              />
            </div>

            {/* Price */}
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Enter price"
                 value={productInfo.values.price}
                onInput={productInfo.handleChange}
              />
            </div>

            {/* Quantity */}
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                placeholder="Enter quantity"
                 value={productInfo.values.quantity}
                onInput={productInfo.handleChange}
              />
            </div>

            {/* Short Description */}
            <div className="mb-3">
              <label className="form-label">Short Description</label>
              <input
                type="text"
                className="form-control"
                name="shortDescription"
                placeholder="Short description"
                 value={productInfo.values.shortDescription}
                onInput={productInfo.handleChange}
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                placeholder="Full description"
                 value={productInfo.values.description}
                onInput={productInfo.handleChange}
              />
            </div>

            {/* Image Link */}
            <div className="mb-3">
              <label className="form-label">Image Link</label>
              <input
                type="text"
                className="form-control"
                name="imgLink"
                placeholder="Image URL"
                 value={productInfo.values.imgLink}
                onInput={productInfo.handleChange}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-100">
              Save Product
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct