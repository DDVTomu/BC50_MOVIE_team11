import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./constants";
import api from "utils/apiUtil";

const actRegister = (user, navigate) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());
    api.post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          const user = result.data.content;
          dispatch(actRegisterSuccess(user));
          localStorage.setItem("Register", JSON.stringify(user));
          navigate("/auth", { replace: true });
        }
      })
      .catch((error) => {
        dispatch(actRegisterFail(error));
      })
  };
};

const actRegisterRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  };
};

const actRegisterFail = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: error
  };
};

export { actRegister };