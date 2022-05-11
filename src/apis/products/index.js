import axios from '../axios';

// * Get All Catagory

export const allCatagory = () => {
  return axios.get('/products/categories');
};
// * Get All Catagory

export const allProducts = () => {
  return axios.get('/products');
};
