import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Form,
  Input,
  Select,
  Radio
} from 'antd';
import { Formik} from 'formik';
import { actAddNewUser } from './duck/actions';

const AddUser = () => {
  const [componentSize, setComponentSize] = useState('default');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const initialValues = {
    hoTen: '',
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDT: '',
    maLoaiNguoiDung: '',
  };

  const onSubmitForm = () => {
    dispatch(actAddNewUser(navigate));
  };

  return (
    <Fragment>
      <div
        className='heading-page text-cyan-700'>
        THÊM NGƯỜI MỚI
      </div>
      <hr className='h-divider mb-4' />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
      >
        <Form
          form={form}
          onFinish={onSubmitForm}
          onValuesChange={onFormLayoutChange}
          labelCol={{ span: 4, }}
          wrapperCol={{ span: 14, }}
          layout='horizontal'
          size={componentSize}
          style={{ maxWidth: 600, }}


        >
          <Form.Item
            label='Kích thước chữ'
            name='size'
          >
            <Radio.Group>
              <Radio.Button value='small'>Small</Radio.Button>
              <Radio.Button value='default'>Default</Radio.Button>
              <Radio.Button value='large'>Large</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label='Họ Tên'
            name='hoTen'
            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
          >
            <Input
              name='hoTen'
              placeholder='Nhập họ tên'
            />
          </Form.Item>

          <Form.Item
            label='Tài Khoản'
            name='taiKhoan'
            rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}
          >
            <Input
              name='taiKhoan'
              placeholder='Nhập tài khoản'
            />
          </Form.Item>

          <Form.Item
            label='Mật Khẩu'
            name='matKhau'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input
              name='matKhau'
              placeholder='Nhập mật khẩu'
              type='password'
            />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Vui lòng nhập email' }]}
          >
            <Input
              name='email'
              placeholder='Nhập email'
            />
          </Form.Item>

          <Form.Item
            label='Số Điện Thoại'
            name='soDT'
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
          >
            <Input
              name='soDT'
              placeholder='Nhập số điện thoại'
            />
          </Form.Item>

          <Form.Item
            label='Mã Loại'
            name='maLoaiNguoiDung'
            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
          >
            <Select
              placeholder='Chọn loại người dùng'
            >
              <Select.Option value='QuanTri'>Quản Trị</Select.Option>
              <Select.Option value='KhachHang'>Khách Hàng</Select.Option>
            </Select>
          </Form.Item >

          <Form.Item
            label='Thao tác'
          >
            <button
              type='submit'
              className='rounded-md bg-green-600 text-white p-2'
            >
              Thêm phim
            </button>
          </Form.Item>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default AddUser;