import axios from "axios";
const axiosHttp=axios.create({
    baseURL:"https://appy.trycatchtech.com/v3/puneri_paltan"
})
export default axiosHttp;