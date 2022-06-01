import ajax from './ajax'

const BASE_URL = '/api'

/* 直接前台请求 */
export const reqPersons = () => ajax('/persons');


/* 后台请求 */
export const reqLogin = ({ username, password }) => ajax(BASE_URL + '/login',
                                          { username, password },'post');