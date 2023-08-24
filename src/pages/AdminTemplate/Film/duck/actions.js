import {
  MANAGE_FILM_REQUEST,
  MANAGE_FILM_SUCCESS,
  MANAGE_FILM_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actManageFilm = () => {
  return (dispatch) => {
    dispatch(actManageFilmRequest());
    api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actManageFilmSucess(result.data.content));
        }
      })
      .catch((error) => {
        dispatch(actManageFilmFail(error));
      })
  };
};

const actSearchFilm = (searchTerm) => {
  if (searchTerm.trim() != '') {
    return (dispatch) => {
      dispatch(actManageFilmRequest());
      api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${searchTerm}`)
        .then((result) => {
          if (result.data.statusCode === 200) {
            dispatch(actManageFilmSucess(result.data.content));
          }
        })
        .catch((error) => {
          dispatch(actManageFilmFail(error));
        })
    };
  };
};

const actManageFilmRequest = () => {
  return {
    type: MANAGE_FILM_REQUEST,
  };
};

const actManageFilmSucess = (data) => {
  return {
    type: MANAGE_FILM_SUCCESS,
    payload: data
  };
};

const actManageFilmFail = (error) => {
  return {
    type: MANAGE_FILM_FAIL,
    payload: error
  };
};

export { actManageFilm, actSearchFilm };
