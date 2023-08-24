import React, { Fragment, useEffect, useState } from 'react';
import Topbar from '../../_components/Topbar';
import { useFormik } from 'formik';
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
            values.maNhom = 'GP02';
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                };
            }
            dispatch(actAddNewFilm(formData));
        }
    })

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
        <div>
            <div
                className="heading-page text-cyan-800">
                THÊM PHIM MỚI
            </div>
            <hr className="h-divider mb-4" />
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item
                    label="Kích thước chữ"
                    name="size"
                >
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Tên phim"
                >
                    <Input
                        name="tenPhim"
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label="Trailer"
                >
                    <Input
                        name="trailer"
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                >
                    <Input
                        name="moTa"
                        onChange={formik.handleChange}
                    />
                </Form.Item>

                <Form.Item
                    label="Ngày khởi chiếu"
                >
                    <DatePicker
                        format={"DD/MM/YYYY"}
                        onChange={handleChangeDate}
                    />
                </Form.Item>

                <Form.Item
                    label="Đang chiếu"
                >
                    <Switch
                        onChange={handleChangeSwitch('dangChieu')}
                    />
                </Form.Item>

                <Form.Item
                    label="Sắp chiếu"
                >
                    <Switch
                        onChange={handleChangeSwitch('sapChieu')}
                    />
                </Form.Item>

                <Form.Item
                    label="Hot"
                >
                    <Switch
                        onChange={handleChangeSwitch('hot')}
                    />
                </Form.Item>

                <Form.Item
                    label="Số sao"
                >
                    <InputNumber
                        min={1}
                        max={10}
                        onChange={handleChangeInputNumber('danhGia')}
                    />
                </Form.Item>

                <Form.Item
                    label="Hình ảnh"
                >
                    <input
                        type="file"
                        onChange={handleChangeFile}
                        accept="image/png, image/jpeg,image/gif,image/png"
                    /><br />
                    <img
                        style={{ width: 150, height: 150 }}
                        src={imgSrc}
                        alt="..."
                    />
                </Form.Item>

                <Form.Item
                    label="Hành động"
                >
                    <button
                        type="submit"
                        className="rounded-md bg-green-600 text-white p-2"
                    >
                        Thêm phim
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddFilm;