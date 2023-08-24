import {
    MANAGE_CINEMA_REQUEST,
    MANAGE_CINEMA_SUCCESS,
    MANAGE_CINEMA_FAIL,
    DETAIL_CINEMA_REQUEST,
    DETAIL_CINEMA_SUCCESS,
    DETAIL_CINEMA_FAIL,
} from './constants';

const initailState = {
    loading: false,
    data: null,
    error: null
};

const manageCinemaReducer = (state = initailState, action) => {
    switch (action.type) {
        case MANAGE_CINEMA_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        };
        case MANAGE_CINEMA_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        };
        case MANAGE_CINEMA_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        };
        default:
            return { ...state };
    };
};

const detailCinemaReducer = (state = initailState, action) => {
    switch (action.type) {
        case DETAIL_CINEMA_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        };
        case DETAIL_CINEMA_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        };
        case DETAIL_CINEMA_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        };
        default:
            return { ...state };
    };
};

export { manageCinemaReducer, detailCinemaReducer };
