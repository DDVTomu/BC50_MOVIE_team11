import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_CLEAR,
} from "./constants";
import api from "utils/apiUtil";

const actAuth = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest())
        api.post('QuanLyNguoiDung/DangNhap', user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const user = result.data.content
                    if ((user.maLoaiNguoiDung === 'QuanTri')) {
                        dispatch(actAuthSuccess(user));
                        localStorage.setItem('UserAdmin', JSON.stringify(user));
                        navigate('/admin/dashboard', { replace: true })
                    } else {
                        dispatch(actAuthSuccess(user));
                        localStorage.setItem('Customer', JSON.stringify(user));
                        navigate('/', { replace: true })
                    }
                }
            })
            .catch((error) => {
                dispatch(actAuthFail(error.response.data.content))
            })
    };
};

const actLogout = (navigate) => {
    if (localStorage.getItem('UserAdmin')) {
        localStorage.removeItem('UserAdmin')
        navigate('/auth', { replace: true })
    } else if (localStorage.getItem('Customer')) {
        localStorage.removeItem('Customer')
        navigate('/', { replace: true })
    }
    return {
        type: AUTH_CLEAR
    };
};

const actAuthRequest = () => {
    return {
        type: AUTH_REQUEST
    };
};

const actAuthSuccess = (data) => {
    return {
        type: AUTH_SUCCESS,
        payload: data
    };
};

const actAuthFail = (error) => {
    return {
        type: AUTH_FAIL,
        payload: error
    };
};

export { actAuth, actLogout }