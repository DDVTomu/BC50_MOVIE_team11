import { combineReducers } from "redux";
import listMovieReducer from "pages/HomeTemplate/ListMoviePage/duck/reducer";
import detailMovieReducer from "pages/HomeTemplate/DetailMoviePage/duck/reducer";
import listLichChieuReducer from "pages/HomeTemplate/_components/GetLich/duck/reducer";
import listPhongVeReducer from "pages/HomeTemplate/PhongVe/duck/reducer";
import listBannerReducer from "pages/HomeTemplate/_components/Banner/duck/reducer";

// import authReducer from "pages/AdminTemplate/AuthPage/duck/reducer";
import loginReducer from "../pages/AdminTemplate/LoginPage/duck/reducer";

import manageUserReducer from './../pages/AdminTemplate/Dashboard/duck/reducer';
import {
  updateUserReducer,
  detailUserReducer,
} from "./../pages/AdminTemplate/Dashboard/EditUser/duck/reducer";

import manageFilmReducer from "./../pages/AdminTemplate/Film/duck/reducer";
import addNewFilmReducer from "./../pages/AdminTemplate/Film/AddFilm/duck/reducer";
import {
  detailFilmReducer,
  updateFilmReducer
} from "./../pages/AdminTemplate/Film/EditFilm/duck/reducer";
import {
  manageCinemaReducer,
  detailCinemaReducer
} from "../pages/AdminTemplate/Film/Showtime/duck/reducer";

const rootReducer = combineReducers({
  //child reducer
  listMovieReducer,
  detailMovieReducer,
  listLichChieuReducer,
  listPhongVeReducer,
  listBannerReducer,

  // authReducer,
  loginReducer,

  manageUserReducer,
  updateUserReducer,
  detailUserReducer,

  manageFilmReducer,
  addNewFilmReducer,
  detailFilmReducer,
  updateFilmReducer,

  manageCinemaReducer,
  detailCinemaReducer,
});

export default rootReducer;
