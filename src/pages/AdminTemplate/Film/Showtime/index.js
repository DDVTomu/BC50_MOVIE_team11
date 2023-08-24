import React, { Fragment, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Form,
    Button,
    Select,
    DatePicker,
    InputNumber
} from 'antd';

import { actManageCinema, actDetailCinema } from './duck/actions';
import { actDetailFilm } from '../EditFilm/duck/actions';

function ShowTime(props) {
    const dispatch = useDispatch();
    const { id, name } = useParams();
    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    });

    const [imgSrc, setImgSrc] = useState('');
    const dataImg = useSelector((state) => state.detailFilmReducer.data);
    const dataManageCinema = useSelector((state) => state.manageCinemaReducer.data);
    const dataDetailCinema = useSelector((state) => state.detailCinemaReducer.data);

    useEffect(() => {
        dispatch(actDetailFilm(id));
        dispatch(actManageCinema());
        dispatch(actDetailCinema(id));
    }, [dispatch, id]);

    const formik = useFormik({
        initialValues: {
            maPhim: id,
            tenPhim: name,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
    });

    // NOT SUCCESS
    //=================================
    // const handleChangeHeThongRap = async (value) => {
    //     // Dispatch action for fetching cinema details based on cinema chain id
    //     dispatch(actDetailCinema(value));
    // };
    //=================================

    const handleChangeHeThongRap = async (value) => {
        const selectedCinema = dataDetailCinema.find(cinema => cinema.maHeThongRap === value);
        if (selectedCinema) {
            setState({
                ...state,
                cumRapChieu: selectedCinema.danhSachRap
            });
        }
    };

    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap', value);
    };

    const onOk = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'));
    };

    const onChangeDate = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss A'));
    };

    const onchangeInputNumber = (value) => {
        formik.setFieldValue('giaVe', value);
    };

    const convertSelectHTR = () => {
        return dataManageCinema?.map((htr, index) => {
            return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
        });
    };


    return (
        <Fragment>
            <div
                className="heading-page text-green-700">
                THÊM LỊCH CHIẾU MỚI
            </div>
            <hr className="h-divider mb-4" />
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onSubmitCapture={formik.handleSubmit}
            >
                <h3
                    className="text-2xl text-center"
                >{name}
                </h3>
                <div
                    className="flex justify-center my-4"
                >
                    <img
                        style={{ width: 300, height: 300 }}
                        src={imgSrc === '' ? dataImg?.hinhAnh : imgSrc}
                        alt="..."
                    />
                </div>

                <Form.Item label="Hệ thống rạp">
                    <Select
                        options={convertSelectHTR()}
                        onChange={handleChangeHeThongRap}
                        placeholder="Chọn hệ thống rạp"
                    />
                </Form.Item>

                <Form.Item label="Cụm rạp">
                    <Select
                        options={state.cumRapChieu?.map((cumRap, index) => ({
                            label: cumRap.tenRap,
                            value: cumRap.maRap
                        }))}
                        onChange={handleChangeCumRap}
                        placeholder="Chọn cụm rạp"
                    />
                </Form.Item>

                <Form.Item label="Ngày chiếu giờ chiếu">
                    <DatePicker
                        format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChangeDate}
                        onOk={onOk} />
                </Form.Item>

                <Form.Item label="Giá vé">
                    <InputNumber
                        onChange={onchangeInputNumber} />
                </Form.Item>

                <Form.Item label="Thao tác">
                    <button
                        type="submit"
                        className="rounded-md bg-cyan-500 text-white p-2"
                    >
                        Tạo lịch chiếu
                    </button>
                </Form.Item>
            </Form>
        </Fragment>
    );
};

export default ShowTime;

// const handleChangeHeThongRap = async (value) => {
//     try {
//         let result = await actDetailCinema(value);
//         setState({
//             ...state,
//             cumRapChieu: result.data.content
//         })
//     }
//     catch (error) {
//     }
// };

// ShowTime.defaultProps = {
//     match: {
//         params: {
//             maPhim: '',
//             tenphim: ''
//         }
//     }
// };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let result = await actManageCinema();
//                 if (result.data && result.data.content) {
//                     setState({
//                         ...state,
//                         heThongRapChieu: result.data.content,
//                     });
//                 } else {
//                     console.log('actManageCinema() did not return expected data:', result);
//                 }
//             } catch (error) {
//                 console.log('Error during actManageCinema() call:', error);
//             }
//         };

//         fetchData();
//     }, []);
