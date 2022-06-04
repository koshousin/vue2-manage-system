import ajax from './ajax'

const BASE_URL = '/api'

/* 直接前台请求 */
export const reqPersons = () => ajax('/persons');

/* 后台请求 */
// 用户请求
export const reqLogin = ({ name, password }) => ajax(BASE_URL + '/users/login',{ name, password });
export const reqRegister = ({name, password,date}) => ajax(BASE_URL + "/users/register", { name, password,date});