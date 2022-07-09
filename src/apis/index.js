import axios from 'axios';
import {BASE_URL} from '../helper/constants';

export async function getApi(url, header) {
  console.log('GetApi: ', `${BASE_URL}/${url}`);

  return await axios.get(`${BASE_URL}/${url}`, {
    headers: {
      Accept: header.Accept,
      'Content-type': header.contenttype,
      Authorization: `Bearer ${header.authorization}`,
    },
  });
}

export async function getApiWithParam(url, param, header) {
  console.log('getApiWithParam: ', `${BASE_URL}/${url}`);

  return await axios({
    method: 'GET',
    baseURL: BASE_URL,
    url: url,
    params: param,
    headers: {
      Accept: header.Accept,
      'Content-type': header.contenttype,
      Auth,
    },
  });
}

export async function postApi(url, payload, header) {
  console.log('PostApi: ', `${BASE_URL}/${url}`);

  return await axios.post(`${BASE_URL}/${url}`, payload, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      Authorization: `Bearer ${header.authorization}`,
    },
  });
}
