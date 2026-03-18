import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginActionThunk } from "../../../redux/reducers/UserReducer";

/**
 * 1. tạo store(state, reducer,....) quản lý user state
 * 2. tạo UI đăng nhập thẻ form đăng nhập -> useFormik để quản lý form, khi submit form gọi api đăng nhập
 * 3. tạo action thunk gọi api đăng nhập, sau khi đăng nhập thành công thì lưu thông tin user vào store
 * 4. thông báo đăng nhập thành công
 */
const LoginPage = () => {
  const dispatch = useDispatch();
  const formData = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginActionThunk(values))
    },
  });
  //điều hướng sau khi đăng nhập thành công

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#f0f2f5" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1
              className="fw-bold"
              style={{ color: "#1877f2", fontSize: "4rem" }}
            >
              facebook
            </h1>
            <p className="fs-4 text-dark">
              Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </p>
          </div>

          <div className="col-md-8 col-lg-4">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4">
                <form onSubmit={formData.handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Email hoặc số điện thoại"
                      name="email"
                      value={formData.values.email}
                      onChange={formData.handleChange}
                    />
                    
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Mật khẩu"
                      name="password"
                      value={formData.values.password}
                      onChange={formData.handleChange}
                    />
                  </div>

                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg fw-bold"
                      style={{ backgroundColor: "#1877f2" }}
                    >
                      Đăng nhập
                    </button>
                  </div>

                  <div className="text-center mb-3">
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#1877f2" }}
                    >
                      Quên mật khẩu?
                    </a>
                  </div>

                  <hr />

                  <div className="d-grid justify-content-center mt-4">
                    <button
                      type="button"
                      className="btn btn-success fw-bold px-4 py-2"
                    >
                      Tạo tài khoản mới
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <p className="text-center mt-4 small text-dark">
              <strong>Tạo Trang</strong> dành cho người nổi tiếng, thương hiệu
              hoặc doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
