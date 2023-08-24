import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';

import { actAddNewFilm } from './duck/actions';

const AddFilm = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
        },

        onSubmit: (values) => {
            values.maNhom = 'GP01';
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                };
            }
            dispatch(actAddNewFilm(navigate));
        }
    })

    const [form] = Form.useForm();
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleChangeDate = (value) => {
        let ngayKhoiChieu = moment(value);
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    };

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeFile = (e) => {
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            }
            formik.setFieldValue('hinhAnh', file);
        };
    };

    return (
        <Fragment>
            <div
                className='heading-page text-cyan-800'>
                THÊM PHIM MỚI
            </div>
            <hr className='h-divider mb-4' />
            <Form
                form={form}
                onSubmitCapture={formik.handleSubmit}
                onValuesChange={onFormLayoutChange}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                layout='horizontal'
                size={componentSize}
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
                    label='Tên phim'
                    name='tenPhim'
                    rules={[{ required: true, message: 'Vui lòng nhập tên phim' }]}
                >
                    <Input
                        name='tenPhim'
                        placeholder='Nhập tên phim'
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label='Trailer'
                    name='trailer'
                    rules={[{ required: true, message: 'Vui lòng nhập đường dẫn trailer' }]}
                >
                    <Input
                        name='trailer'
                        placeholder='Nhập đường dẫn trailer'
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label='Mô tả'
                    name='moTa'
                    rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]}
                >
                    <Input
                        name='moTa'
                        placeholder='Nhập mô tả'
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label='Ngày khởi chiếu'
                    name='ngayKhoiChieu'
                    rules={[{ required: true, message: 'Vui lòng nhập ngày khởi chiếu' }]}
                >
                    <DatePicker
                        format={'DD/MM/YYYY'}
                        placeholder='Nhập ngày khởi chiếu'
                        onChange={handleChangeDate}
                    />
                </Form.Item>

                <Form.Item
                    label='Đang chiếu'
                    name='dangChieu'
                    rules={[{ required: true, message: 'Vui lòng nhập ngày đang chiếu' }]}
                >
                    <Switch
                        placeholder='Nhập ngày đang chiếu'
                        onChange={handleChangeSwitch('dangChieu')}
                    />
                </Form.Item>

                <Form.Item
                    label='Sắp chiếu'
                    name='sapChieu'
                    rules={[{ required: true, message: 'Vui lòng nhập ngày sắp chiếu' }]}
                >
                    <Switch
                        placeholder='Nhập ngày sắp chiếu'
                        onChange={handleChangeSwitch('sapChieu')}
                    />
                </Form.Item>

                <Form.Item
                    label='Hot'
                    name='hot'
                    rules={[{ required: true, message: 'Vui lòng nhập độ hot phim' }]}

                >
                    <Switch
                        placeholder='Nhập độ hot phim'
                        onChange={handleChangeSwitch('hot')}
                    />
                </Form.Item>

                <Form.Item
                    label='Số sao'
                    name='danhGia'
                    rules={[{ required: true, message: 'Vui lòng nhập số sao' }]}
                >
                    <InputNumber
                        placeholder='Nhập số sao'
                        min={1}
                        max={10}
                        onChange={handleChangeInputNumber('danhGia')}
                    />
                </Form.Item>

                <Form.Item
                    label='Hình ảnh'
                    name='hinhAnh'
                    rules={[{ required: true, message: 'Vui lòng nhập file hình ảnh' }]}
                >
                    <input
                        placeholder='Nhập file hình ảnh'
                        type='file'
                        onChange={handleChangeFile}
                        accept='image/png, image/jpeg,image/gif,image/png'
                    /><br />
                    <img
                        style={{ width: 150, height: 150 }}
                        src={imgSrc}
                        alt='...'
                    />
                </Form.Item>

                <Form.Item
                    label='Hành động'
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

export default AddFilm;