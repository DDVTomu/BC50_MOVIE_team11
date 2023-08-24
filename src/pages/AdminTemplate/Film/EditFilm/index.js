import React, { Fragment, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Form,
  Input,
  Radio,
  DatePicker,
  InputNumber,
  Switch,
} from 'antd';
import { actDetailFilm, actUpdateFilm } from './duck/actions';
import { actDetailCinema } from '../Showtime/duck/actions';

const EditFilm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();

  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');
  const data = useSelector((state) => state.detailFilmReducer.data);

  useEffect(() => {
    dispatch(actDetailFilm(param.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: data?.maPhim,
      tenPhim: data?.tenPhim,
      trailer: data?.trailer,
      moTa: data?.moTa,
      ngayKhoiChieu: data?.ngayKhoiChieu,
      dangChieu: data?.dangChieu,
      sapChieu: data?.sapChieu,
      hot: data?.hot,
      danhGia: data?.danhGia,
      hinhAnh: null
    },

    onSubmit: (values) => {
      values.maNhom = 'GP03'
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key])
        } else {
          if (values.hinhAnh !== null) {
            formData.append('File', values.hinhAnh, values.hinhAnh.name)
          }
        }
      }
      dispatch(actUpdateFilm(formData, navigate));
    }
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeDate = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value)
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };
    formik.setFieldValue('hinhAnh', file);
  };

  return (
    <Fragment>
      <div
        className="heading-page text-yellow-700">
        CHỈNH SỬA THÔNG TIN
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
            value={data && data.tenPhim}
          />
        </Form.Item>

        <Form.Item
          label="Trailer"
        >
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={data && data.trailer}
          />
        </Form.Item>

        <Form.Item
          label="Mô tả"
        >
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={data && data.moTa}
          />
        </Form.Item>

        <Form.Item
          label="Ngày khởi chiếu"
        >
          <DatePicker
            format="DD/MM/YYYY"
            onChange={handleChangeDate}
            value={data && moment(data.ngayKhoiChieu)}
          />
        </Form.Item>

        <Form.Item
          label="Đang chiếu"
        >
          <Switch
            checked={formik.values.dangChieu}
            onChange={handleChangeSwitch('dangChieu')}
          />
        </Form.Item>

        <Form.Item
          label="Sắp chiếu"
        >
          <Switch
            checked={formik.values.sapChieu}
            onChange={handleChangeSwitch('sapChieu')}
          />
        </Form.Item>

        <Form.Item
          label="Hot"
        >
          <Switch
            checked={formik.values.hot}
            onChange={handleChangeSwitch('hot')}
          />
        </Form.Item>

        <Form.Item
          label="Số sao"
        >
          <InputNumber
            min={1}
            max={10}
            value={formik.values.danhGia}
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
            src={imgSrc === '' ? data?.hinhAnh : imgSrc}
            alt="..."
          />
        </Form.Item>

        <Form.Item label="Thao tác">
          <button
            type="submit"
            className="rounded-md bg-yellow-500 text-white p-2"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default EditFilm;



