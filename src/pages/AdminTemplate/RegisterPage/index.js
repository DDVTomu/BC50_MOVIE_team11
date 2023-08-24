import React, { useState } from 'react';
import { actRegister } from './duck/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.registerReducer.error);

  const [state, setState] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
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
    return <div div className='alert alert-danger'>{error.response.data.content}</div>
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">

        <div className="fadeIn first p-5 bg-yellow-200 text-gray-600 text-2xl font-medium">
          <p>ĐĂNG KÝ</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className=" mt-3">
            {/* <div className="card-body " > */}

              <div className="flex justify-end">
                <div>Họ Tên</div>
                <input type="text" name='hoTen' className="form-control" onChange={handleOnchange} />
              </div>

              <div className="flex justify-end">
                <label>Tên đăng nhập</label>
                <input type="text" name='taiKhoan' className="form-control" onChange={handleOnchange} />
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <input type="text" name='matKhau' className="form-control" onChange={handleOnchange} />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="text" name='email' className="form-control" onChange={handleOnchange} />
              </div>

              <div className="form-group">
                <label>Số Điện Thoại</label>
                <input type="text" name='soDt' className="form-control" onChange={handleOnchange} />
              </div>
              {error && renderError()}

              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
                <button className='btn btn-success w-100' >Đăng Ký</button>
              </div>

              <div className='btn-redirect-login mt-3'>
                <div>
                  <NavLink to={'/auth'} className=''>
                    <h3>Bạn đã có tài khoản!!! Hãy đăng nhập tại đây</h3>
                  </NavLink>
                </div>
              </div>

            {/* </div> */}
          </div>
        </form>

      </div>
    </div>
  )
}
