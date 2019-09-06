import axios from 'axios';
// import jQuery from "jquery";
import { API_ENDPOINT } from './config';
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

// const contentType = {
//   json: 'application/json',
//   multipart: 'application/json',
// };

/*function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
*/


/*---------new functionality testing----------*/
const config_custom = {  
  baseURL:  API_ENDPOINT,
  headers:  {
    
    'Content-Type': 'application/json',
    //'X-CSRFToken': getCookie('csrftoken'),
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
};

const instance_custom = axios.create(config_custom);
const errorResponseHandler = (error) => {
  if (error && error.status === 401) {
    console.log('401', error);
  } else if (error && error.status === 403) {
    console.log('403', error);
  }

  if (error) {
    throw error;
  }
};
instance_custom.interceptors.response.use(response => response, errorResponseHandler);

/*--------------------*/




const readFromLocalStorage = key => window.localStorage.getItem(key);

export default class API {
  
  constructor(config = { contentType: 'json' }) {
    this.config = {
      withCredentials : true,
      baseURL: config.baseURL || API_ENDPOINT,
      headers: config.headers || {
        'Content-Type': 'multipart/form-data', //contentType[config.contentType] || contentType.json,
        Authorization: `Token ${readFromLocalStorage('token')}`,
      },
    };

    this.instance = axios.create(this.config);
    this.instance.interceptors.response.use(response => response, errorResponseHandler);
  }

  get(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.get(url);
        resolve(res.data || res);
      } catch (e) {
        reject(e);
      }
    });
  }

  post(url, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.post(url, body);
        resolve(res.data || res);
      } catch (e) {
        reject(e);
      }
    });
  }

  post_custom(url, body) {
    //var csrftoken = getCookie('csrftoken');
    //console.log(csrftoken);
    return new Promise(async (resolve, reject) => {
      try {
        const res = await instance_custom.post(url, body);
        resolve(res.data || res.error || res);
      } catch (e) {
        reject(e);
      }
    });
  }

  delete(url, id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.delete(`${url}/${id}`);
        resolve(res.data || res);
      } catch (e) {
        reject(e);
      }
    });
  }

  put(url, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.put(url, body);
        resolve(res.data || res);
      } catch (e) {
        reject(e);
      }
    });
  }

  patch(url, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.patch(url, body);
        resolve(res.data || res);
      } catch (e) {
        reject(e);
      }
    });
  }
}



// apply interceptor on response
axios.interceptors.response.use(response => response, errorResponseHandler);

