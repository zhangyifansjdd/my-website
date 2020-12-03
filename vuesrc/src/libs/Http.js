import axios from 'axios'
import qs from 'qs'

// axios.defaults.withCredentials = true
// axios.defaults.crossDomain=true
// 发送时
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

function checkStatus(res) {
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
}

// 响应时
axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))
export default {
  get(url, params) {
    if (!url) return
    return axios({
      method: 'get',
      url: url,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus)
  },
  post(url, data) {
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus)
  },
  postBody(url, data) {
    return axios({
      method: 'post',
      url: url,
      data: data,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(checkStatus)
  }
}
