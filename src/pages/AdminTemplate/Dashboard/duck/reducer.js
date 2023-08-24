import {
    MANAGE_USER_REQUEST,
    MANAGE_USER_SUCCESS,
    MANAGE_USER_FAIL,
    SEARCH_USER
} from './constants';

const initailState = {
    loading: false,
    data: null,
    error: null,
    users: [],
    searchResults: [],
};

const manageUserReducer = (state = initailState, action) => {
    switch (action.type) {
        case MANAGE_USER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }
        case MANAGE_USER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }
        case MANAGE_USER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }
        case SEARCH_USER:
            const searchTerm = action.payload;
            const searchResults = state.users.filter((user) =>
                user.hoTen.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return {
                ...state,
                searchResults,
            };
        default:
            return { ...state };
    }
};

export default manageUserReducer;