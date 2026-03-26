//Component là 1 thành phần của giao diện
/*
    class component (tham khảo)
    funtional component (chính)
    là funciton trả về jsx
    ->tạo bằng snippet (rafce)
*/

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ACCESSTOKEN, USERLOGIN } from "../util/Config";

export const HeaderHome = () => {
  const {userLogin} = useSelector(state => state.userLoginReducer);

  const renderLogin = () => {
    if(userLogin) {
      return (
        <>
          <NavLink className="nav-link" to="/profile">{userLogin}</NavLink>
          <button className="btn btn-link nav-link mx-2" onClick={logout}>Logout</button>
        </>
      );
    }
    return <NavLink className="nav-link" to="/login">Login</NavLink>
  }

  const logout = () => {
    localStorage.removeItem(ACCESSTOKEN);
    localStorage.removeItem(USERLOGIN);
    window.location.href = '/login'; //gọi reload lại trang (đồng với bấm phím f5 )
  }

  //bs5-navbar-background
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Cybersoft
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
           {renderLogin()}
          </li>
      

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/register"
              aria-current="page"
            >
              Register <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/about"
              aria-current="page"
            >
              About <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/contact"
              aria-current="page"
            >
              Contact <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/hook-toi-uu"
              aria-current="page"
            >
              Hook Toi Uu <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/custom-hook"
              aria-current="page"
            >
              Custom hook <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/hoc-demo"
              aria-current="page"
            >
              HOC <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/container-component-demo"
              aria-current="page"
            >
              Container Component{" "}
              <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/formik"
              aria-current="page"
            >
              Formik <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              React-router-com
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/data-binding">
                Databinding
              </NavLink>
              <NavLink className="dropdown-item" to="/change-carcolor">
                Change car color
              </NavLink>
              <NavLink className="dropdown-item" to="/demo-useNavigate">
                Demo use navigate
              </NavLink>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux - demo
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/redux-changenumber">
                Change number
              </NavLink>
              <NavLink className="dropdown-item" to="/redux-change-car">
                Change car
              </NavLink>
              <NavLink className="dropdown-item" to="/redux-tinder-clone">
                Tinder clone
              </NavLink>
              <NavLink className="dropdown-item" to="/bt-xem-chi-tiet-redux">
                BT Xem chi tiết redux
              </NavLink>
              <NavLink className="dropdown-item" to="/bt-giohang-redux">
                BT giỏ hàng
              </NavLink>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux Thunk- demo
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/redux-thunk-product-page">
                Product page
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/login-facebook"
              aria-current="page"
            >
              Login Facebook <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link bg-light text-dark" : "nav-link"
              }
              to="/demo-antd"
              aria-current="page"
            >
              Demo Antd <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
        </ul>

        <form className="d-flex my-2 my-lg-0">
          <NavLink to={"/cart"}>
            <i className="fs-3 text-white fa fa-cart-plus me-3"></i>
          </NavLink>
        </form>
      </div>
    </nav>
  );
};
