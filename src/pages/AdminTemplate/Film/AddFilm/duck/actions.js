import {
  ADD_NEW_FILM_REQUEST,
  ADD_NEW_FILM_SUCCESS,
  ADD_NEW_FILM_FAIL,
  CLEAR_NEW_FILM
} from './constants';
import api from 'utils/apiUtil';

const actAddNewFilm = () => {
  return (dispatch) => {
    dispatch(actAddNewFilmRequest());
    api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP02')
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actAddNewFilmSucess(result.data.content));
        }
      })
      .catch((error) => {
        dispatch(actAddNewFilmFail(error));
      })
  };
};

const actAddNewFilmRequest = () => {
  return {
    type: ADD_NEW_FILM_REQUEST,
  };
};

const actAddNewFilmSucess = (data) => {
  return {
    type: ADD_NEW_FILM_SUCCESS,
    payload: data
  };
};

const actAddNewFilmFail = (error) => {
  return {
    type: ADD_NEW_FILM_FAIL,
    payload: error
  };
};

const actClearNewFilm = (navigate) => {
  navigate('/admin/film', { replace: true })
  return {
    type: CLEAR_NEW_FILM,
    payload: null
  };
};

export { actAddNewFilm, actClearNewFilm };

