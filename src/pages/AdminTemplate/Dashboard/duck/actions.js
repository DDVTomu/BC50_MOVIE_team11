import {
    MANAGE_USER_REQUEST,
    MANAGE_USER_SUCCESS,
    MANAGE_USER_FAIL,
    SEARCH_USER
} from './constants';
import api from 'utils/apiUtil';

const actManageUser = () => {
    return (dispatch) => {
        dispatch(actUserRequest());
        api.get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
            .then((result) => {
                dispatch(actUserSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actUserFail(error));
            })
    };
};

const actUserRequest = () => {
    return {
        type: MANAGE_USER_REQUEST,
    };
};

const actUserSuccess = (data) => {
    return {
        type: MANAGE_USER_SUCCESS,
        payload: data
    };
};

const actUserFail = (error) => {
    return {
        type: MANAGE_USER_FAIL,
        payload: error
    };
};

const actSearchUser = (searchTerm) => {
    return {
        type: SEARCH_USER,
        payload: searchTerm,
    };
};

export { actManageUser, actSearchUser };