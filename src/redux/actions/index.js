import {
  ALL_ITEMS_REQUEST,
  CATEGORIES_REQUEST,
  WOMENS_CLOTHING_STOCK_REQUEST,
  MENS_CLOTHING_STOCK_REQUEST,
  ELECTRONICS_ITEMS_STOCK_REQUEST,
  JEWELERY_ITEMS_STOCK_REQUEST,
} from './types';
import {
  FORGOT_PASSWORD_REQUEST,
  GET_TOKEN_REQUEST,
  LOGOUT_REQUEST,
  SIGNIN_REQUEST,
} from './types';

export const getAllItems = () => ({
  type: ALL_ITEMS_REQUEST,
});

// export const getItemsStock_WOMENS_CLOTHING = payload => {
//   return {
//     type: WOMENS_CLOTHING_STOCK_REQUEST,
//     payload,
//   };
// };
// export const getItemsStock_MENS_CLOTHING = payload => {
//   return {
//     type: MENS_CLOTHING_STOCK_REQUEST,
//     payload,
//   };
// };
// export const getItemsStock_ELECTRONICS_ITEMS = payload => {
//   return {
//     type: ELECTRONICS_ITEMS_STOCK_REQUEST,
//     payload,
//   };
// };
// export const getItemsStock_JEWELERY_ITEMS = payload => {
//   return {
//     type: JEWELERY_ITEMS_STOCK_REQUEST,
//     payload,
//   };
// };

export const getAllCategories = () => ({
  type: CATEGORIES_REQUEST,
});

//  Auth

export const getSignin = payload => {
  console.log(payload);
  return {
    type: SIGNIN_REQUEST,
    payload,
  };
};

export const getTokenAction = () => ({
  type: GET_TOKEN_REQUEST,
});
