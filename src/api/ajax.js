import axios from 'axios'
const ajax = async function (url, data = {},type='GET') {
  return new Promise((resolve, reject) => {
    let promise;
    if (type == 'GET') {
      console.log(url);
      promise = axios.get(url);
    } else {
      promise = axios.post(url,JSON.stringify(data));
    }

    promise.then(response => {
      return resolve(response.data);
    }).catch(err => {
      console.log('返回数据错误。', err);
      return reject('error');
    })

  })
}

export default ajax;