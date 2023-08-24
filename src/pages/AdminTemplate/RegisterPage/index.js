import React, { useState } from 'react';
import { actRegister } from './duck/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.registerReducer);

  const [state, setState] = useState({
    hoTen: '',
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: 'GP01',
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actRegister(state, navigate));
  };

  const renderError = () => {
    return (
      error && (
        <div className='alert alert-danger'>{error}</div>
      )
    );
  };

  return (
    <div>
      <div className="container">
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
            <div
              className="mt-3  text-center text-3xl text-blue-900 font-medium">
              ĐĂNG KÝ
            </div>
            <hr className='h-divider my-3'/>
            <form
              onSubmit={handleSubmit}
            >
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <input
                  name='hoTen'
                  className="form-control"
                  placeholder="Họ tên"
                  type="text"
                  onChange={handleOnchange}
                />
              </div> {/* form-group// */}

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text">
                    <i className="fa fa-building" />
                  </span>
                </div>
                <input
                  name='taiKhoan'
                  className="form-control"
                  placeholder="Tên đăng nhập"
                  type="text"
                  onChange={handleOnchange}
                />
              </div> {/* form-group// */}

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" />
                  </span>
                </div>
                <input
                  name='matKhau'
                  className="form-control"
                  placeholder="Create password"
                  type="text"
                />
              </div> {/* form-group// */}

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope" />
                  </span>
                </div>
                <input
                  name='email'
                  className="form-control"
                  placeholder="Email"
                  type="email"
                />
              </div> {/* form-group// */}

              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone" />
                  </span>
                </div>
                <input
                  name='soDt'
                  className="form-control"
                  placeholder="Số điện thoại"
                  type="text"
                />
              </div> {/* form-group// */}

              {error && renderError}

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success btn-block"> Đăng Ký
                </button>
              </div> {/* form-group// */}

              <div className='btn-redirect-login text-center'>
                <div>
                  <NavLink to={'/auth'} className=''>
                    <p>Bạn đã có tài khoản! Hãy đăng nhập tại đây</p>
                  </NavLink>
                </div>
              </div>
            </form>
          </article>
          
        </div> {/* card.// */}
      </div>
      {/*container end.//*/}
    </div>

  )
}
