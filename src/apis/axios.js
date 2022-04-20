import axios from 'axios';

const intance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default intance;
