import {
    ADD_NEW_USER_REQUEST,
    ADD_NEW_USER_SUCCESS,
    ADD_NEW_USER_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actAddNewUser = () => {
    return (dispatch) => {
        dispatch(actAddNewRequest());
        api.get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
            .then((result) => {
                dispatch(actAddNewSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actAddNewFail(error));
            })
    };
};

const actAddNewRequest = () => {
    return {
        type: ADD_NEW_USER_REQUEST,
    };
};

const actAddNewSuccess = (data) => {
    return {
        type: ADD_NEW_USER_SUCCESS,
        payload: data
    };
};

const actAddNewFail = (error) => {
    return {
        type: ADD_NEW_USER_FAIL,
        payload: error
    };
};

export { actAddNewUser };
