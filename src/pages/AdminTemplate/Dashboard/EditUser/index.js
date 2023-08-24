import React, { Fragment, useState, useEffect } from 'react';
import { Form, Input, Radio, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { actUpdateUser } from './duck/actions';

const EditUser = () => {
  const [componentSize, setComponentSize] = useState('default');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const userDetail = useSelector(state => state.detailUserReducer.userDetail);

  const initialValues = {
    hoTen: userDetail ? userDetail.hoTen : '',
    taiKhoan: userDetail ? userDetail.taiKhoan : '',
    matKhau: userDetail ? userDetail.matKhau : '',
    email: userDetail ? userDetail.email : '',
    soDT: userDetail ? userDetail.soDT : '',
    maLoaiNguoiDung: userDetail ? userDetail.maLoaiNguoiDung : '',
  };

  const onSubmitEditForm = async (values) => {
    dispatch(actUpdateUser(values, navigate));
  };

  return (
    <Fragment>
      <div className='heading-page text-orange-800'>CHỈNH SỬA THÔNG TIN</div>
      <hr className='h-divider mb-4' />
      <Formik
        initialValues={initialValues} // Đảm bảo initialValues đã được định nghĩa
        onSubmit={onSubmitEditForm}
      >
        <Form
          // initialValues={initialValues}
          form={form}
          onFinish={onSubmitEditForm}
          onValuesChange={onFormLayoutChange}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout='horizontal'
          size={componentSize}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label='Kích thước chữ'
            name='size'>
            <Radio.Group>
              <Radio.Button value='small'>Small</Radio.Button>
              <Radio.Button value='default'>Default</Radio.Button>
              <Radio.Button value='large'>Large</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label='Họ Tên'
            htmlFor='hoTen'
          >
            <Input
              name='hoTen'
              placeholder='Nhập họ tên'
              value={userDetail && userDetail.hoTen}
            />
          </Form.Item>

          <Form.Item
            label='Tài Khoản'
            htmlFor='taiKhoan'
          >
            <Input
              name='taiKhoan'
              placeholder='Nhập tài khoản'
              value={userDetail && userDetail.taiKhoan}
            />
          </Form.Item>

          <Form.Item
            label='Mật Khẩu'
            htmlFor='matKhau'
          >
            <Input
              name='matKhau'
              placeholder='Nhập mật khẩu'
              value={userDetail && userDetail.matKhau}
            />
          </Form.Item>

          <Form.Item
            label='Email'
            htmlFor='email'
          >
            <Input
              name='email'
              placeholder='Nhập email'
              value={userDetail && userDetail.email}
            />
          </Form.Item>

          <Form.Item
            label='Số Điện Thoại'
            htmlFor='soDT'
          >
            <Input
              name='soDT'
              placeholder='Nhập số điện thoại'
              value={userDetail && userDetail.soDT}
            />
          </Form.Item>

          <Form.Item
            label='Mã Loại'
            htmlFor='maLoaiNguoiDung'
          >
            <Select
              placeholder='Chọn loại người dùng'
              value={userDetail && userDetail.maLoaiNguoiDung}
            >
              <Select.Option value='QuanTri'>Quản Trị</Select.Option>
              <Select.Option value='KhachHang'>Khách Hàng</Select.Option>
            </Select>
          </Form.Item >

          <Form.Item label='Thao tác'>
            <button
              type='submit'
              className='rounded-md bg-yellow-500 text-white p-2'
            >
              Cập nhật
            </button>
          </Form.Item>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default EditUser;

