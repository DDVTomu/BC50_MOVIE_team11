import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actAuth } from './duck/actions'
import { NavLink, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { useFormik } from 'formik';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Text } = Typography;

  const [componentSize, setComponentSize] = useState('default');
  const error = useSelector((state) => state.loginReducer.error);

  const [state, setState] = useState({
    taiKhoan: '',
    matKhau: '',
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actAuth(state, navigate))
  };

  const renderError = () => {
    return (
      error && (
        <div className='alert alert-danger'>{error}</div>
      )
    )
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">

        <div className="fadeIn first p-5 bg-cyan-400 text-gray-950 text-2xl font-medium">
          <p>ĐĂNG NHẬP</p>
        </div>

        <form className='m-3'>
          <input type="text" id="login" className="fadeIn second p-4" name="login" placeholder="Email" />
          <input type="text" id="password" className="fadeIn third " name="login" placeholder="Password" />


          <div className='bg-green-400 rounded-md py-3 mx-24 my-2 hover:bg-green-600 duration-300'>Log in</div>

          <p>or</p>

          <div className='bg-blue-400 rounded-md py-3 mx-24 my-2 hover:bg-blue-500 duration-300'>Register</div>
        </form>
      </div>
    </div>

  )
}
