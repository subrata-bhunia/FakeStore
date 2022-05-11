import {
  ALL_ITEMS_FAILURE,
  ALL_ITEMS_REQUEST,
  ALL_ITEMS_SUCCESS,
  CATEGORIES_FAILURE,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  WOMENS_CLOTHING_STOCK_FAILURE,
  WOMENS_CLOTHING_STOCK_REQUEST,
  WOMENS_CLOTHING_STOCK_SUCCESS,
  MENS_CLOTHING_STOCK_FAILURE,
  MENS_CLOTHING_STOCK_REQUEST,
  MENS_CLOTHING_STOCK_SUCCESS,
  ELECTRONICS_ITEMS_STOCK_FAILURE,
  ELECTRONICS_ITEMS_STOCK_REQUEST,
  ELECTRONICS_ITEMS_STOCK_SUCCESS,
  JEWELERY_ITEMS_STOCK_FAILURE,
  JEWELERY_ITEMS_STOCK_REQUEST,
  JEWELERY_ITEMS_STOCK_SUCCESS,
} from '../actions/types';
import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_TOKEN_FAILURE,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from '../actions/types';
const loginState = {
  status: '',
  loader: false,
  error: '',
  signinRes: {},
  forgotPassRes: {},
  token: null,
  loading: true,
};
const initialState = {
  status: '',
  loader: false,
  error: '',
  allItemsRes: [],
  itemStockRes: {},
  categoriesRes: [],
};
export const ListReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ALL_ITEMS_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case ALL_ITEMS_SUCCESS:
      return {
        ...state,
        status: action.type,
        allItemsRes: action.data,
        loader: false,
      };
    case ALL_ITEMS_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };

    case WOMENS_CLOTHING_STOCK_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case WOMENS_CLOTHING_STOCK_SUCCESS:
      return {
        ...state,
        status: action.type,
        itemStockRes: action.data,
        loader: false,
      };
    case WOMENS_CLOTHING_STOCK_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };
    case MENS_CLOTHING_STOCK_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case MENS_CLOTHING_STOCK_SUCCESS:
      return {
        ...state,
        status: action.type,
        itemStockRes: action.data,
        loader: false,
      };
    case MENS_CLOTHING_STOCK_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };
    case ELECTRONICS_ITEMS_STOCK_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case ELECTRONICS_ITEMS_STOCK_SUCCESS:
      return {
        ...state,
        status: action.type,
        itemStockRes: action.data,
        loader: false,
      };
    case ELECTRONICS_ITEMS_STOCK_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };
    case JEWELERY_ITEMS_STOCK_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case JEWELERY_ITEMS_STOCK_SUCCESS:
      return {
        ...state,
        status: action.type,
        itemStockRes: action.data,
        loader: false,
      };
    case JEWELERY_ITEMS_STOCK_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };

    case CATEGORIES_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        status: action.type,
        categoriesRes: action.data,
        loader: false,
      };
    case CATEGORIES_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };

    default:
      return state;
  }
};
export const AuthReducer = (state = loginState, action) => {
  console.log(action);
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        status: action.type,
        signinRes: action.signinRes,
        loader: false,
      };
    case SIGNIN_FAILURE:
      console.log({'failure res': action.error});
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };
    case GET_TOKEN_REQUEST:
      return {
        ...state,
        status: action.type,
      };

    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        status: action.type,
        token: action.token,
        loading: false,
      };

    case GET_TOKEN_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
        token: null,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        status: action.type,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        status: action.type,
        logout: true,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        status: action.type,
        loader: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        status: action.type,
        forgotPassRes: action.forgotPassRes,
        loader: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      // console.log({'failure res': action.error});
      return {
        ...state,
        status: action.type,
        error: action.error,
        loader: false,
      };
    default:
      return state;
  }
};
