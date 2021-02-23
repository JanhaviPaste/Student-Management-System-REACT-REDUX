import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
} from "./studentTypes";

const initialState = {
  loading: false,
  students: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        loading: false,
        students: action.payload,
        error: "",
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        loading: false,
        students: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
