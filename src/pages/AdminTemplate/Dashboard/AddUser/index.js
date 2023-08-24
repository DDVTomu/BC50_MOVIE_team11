import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Form,
  Input,
  Select,
  Radio
} from 'antd';
import * as yup from 'yup';
import { actAddNewUser } from './duck/actions';

const addUserSchema = yup.object().shape({
  hoTen: yup.string().required('Vui lòng nhập họ tên'),
  taiKhoan: yup.string().required('Vui lòng nhập tài khoản'),
  matKhau: yup.string().required('Vui lòng nhập mật khẩu'),
  email: yup.string().required('Vui lòng nhập email').email('nhập email'),
  soDT: yup.string().required('Vui lòng nhập số điện thoại').matches(/^[0-9]+$/, 'Phải nhập dạng số'),
  maLoaiNguoiDung: yup.string().required('Chọn loại người dùng cần thêm'),
});

const yupSync = {
  async validator({ field }, value) {
    await addUserSchema.validateSyncAt(field, { [field]: value });
  },
};

const AddUser = () => {
  const [componentSize, setComponentSize] = useState('default');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onSubmitForm = (values) => {
    values.maNhom = 'GP02';
    dispatch(actAddNewUser(values, navigate));
  };

  return (
    <Fragment>
      <div
        className="heading-page text-cyan-700">
        THÊM NGƯỜI MỚI
      </div>
      <hr className="h-divider mb-4" />
      <Form
        form={form}
        onFinish={onSubmitForm}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout='horizontal'
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
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
        // rules={[yupSync]}
        >
          <Input
            name='hoTen'
            placeholder='Nhập họ tên'
          />
        </Form.Item>

        <Form.Item
          label='Tài Khoản'
          rules={[{ validator: yupSync }]}
        // rules={[yupSync]}
        >
          <Input
            name='taiKhoan'
            placeholder='Nhập ID tài khoản'
          />
        </Form.Item>

        <Form.Item
          label='Mật Khẩu'
        // rules={[yupSync]}
        >
          <Input
            name='matKhau'
            placeholder='Nhập mật khẩu'
          />
        </Form.Item>

        <Form.Item
          label='Email'
        // rules={[yupSync]}
        >
          <Input
            name='email'
            placeholder='Nhập email'
          />
        </Form.Item>

        <Form.Item
          label='Số Điện Thoại'
        // rules={[yupSync]}
        >
          <Input
            name='soDT'
            placeholder='Nhập số điện thoại'
          />
        </Form.Item>

        <Form.Item
          label='Mã Loại'
          name='maLoaiNguoiDung'
          rules={[yupSync]}
        > <Select>
            <Select.Option value='QuanTri'>Quản Trị</Select.Option>
            <Select.Option value='KhachHang'>Khách Hàng</Select.Option>
          </Select>
        </Form.Item>

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
    </Fragment>
  );
};

export default AddUser;