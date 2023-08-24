import { combineReducers } from "redux";
import listMovieReducer from "pages/HomeTemplate/ListMoviePage/duck/reducer";
import detailMovieReducer from "pages/HomeTemplate/DetailMoviePage/duck/reducer";
import authReducer from "pages/AdminTemplate/AuthPage/duck/reducer";
import addUserReducer from "pages/AdminTemplate/AddUser/duck/reducer";
import listLichChieuReducer from "pages/HomeTemplate/_components/GetLich/duck/reducer";
import listPhongVeReducer from "pages/HomeTemplate/PhongVe/duck/reducer";
import listBannerReducer from "pages/HomeTemplate/_components/Banner/duck/reducer";
const rootReducer = combineReducers({
  //child reducer
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
  listLichChieuReducer,
  listPhongVeReducer,
  listBannerReducer,
});

export default rootReducer;
