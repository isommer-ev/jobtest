import _axios from 'axios';

const baseUrl=process.env.NODE_ENV==='development'?"http://127.0.0.1:8080":"http://127.0.0.1:8080";
const _axios=_axios.create({
    baseURL:baseUrl,
    timeout:1000
})
export default _axios;