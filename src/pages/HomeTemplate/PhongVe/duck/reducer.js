import {
  LIST_PHONGVE_REQUEST,
  LIST_PHONGVE_SUCCESS,
  LIST_PHONGVE_FAIL,
} from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  orderList: [],
};

const listPhongVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PHONGVE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case LIST_PHONGVE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;

      return { ...state };
    }

    case LIST_PHONGVE_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default listPhongVeReducer;
