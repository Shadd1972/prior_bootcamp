import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAILURE,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAILURE,
  } from "../constants/categoryActionConstants";
  
  export const listCategoriesReducer = (state = { categorys: [] }, action) => {
    switch (action.type) {
      case CATEGORY_LIST_REQUEST:
        return { ...state, loading: true };
      case CATEGORY_LIST_SUCCESS:
        return { ...state, loading: false, success: true, categories: action.payload };
      case CATEGORY_LIST_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const fetchCategoryDetailsReducer = (state = { category: {} }, action) => {
    switch (action.type) {
      case CATEGORY_DETAILS_REQUEST:
        return { ...state, loading: true };
      case CATEGORY_DETAILS_SUCCESS:
        return { ...state, loading: false, success: true, category: action.payload };
      case CATEGORY_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };