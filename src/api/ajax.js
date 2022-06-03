import axios from 'axios'
/* 全部用 post 请求 */
const ajax = async function (url, data = {}) {
  return new Promise((resolve, reject) => {
    let promise;
    const query = Object.keys(data).reduce((pre, cur, index) => {
      return pre + `${cur}=${data[cur]}` + '&';
    }, '').slice(0,-1);
    promise = axios({
      method: 'post',
      url: url,
      // params 放在路径参数上
      params:data   
    });
    promise.then(response => {
      return resolve(response.data);
    }).catch(err => {
      console.log('返回数据错误。', err);
      return reject('error');
    })
  })
}

export default ajax;