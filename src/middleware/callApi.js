import axios from 'axios';
import data from '../data/product-list.json'
import C from '../constants'

console.log(data)
function callApi(endpoint, method, data, payload) {
  const requestOptions = {
    url: C.BASE_URL,
    method,
    data
  }

// headers : { 'Content-Type' : 'application/json' }
console.log(requestOptions)
  return axios(requestOptions)
    .then(response => {
      console.log(response.json())
      if(response.status < 200 || response.status >= 300) {
        return Promise.reject(response);
      }

      if(typeof response.data !== 'object' && payload) {
        return {
          message: response.data,
          payload
        };
      }

      return {
        message: response.statusText,
        payload: response.data
      }
    });
}

export default callApi;