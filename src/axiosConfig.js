import axios from "axios";

const token = JSON.parse(localStorage.getItem("token")) || ""
const axiosBase = axios.create({
  baseURL: `https://digihosein.pythonanywhere.com/`,
  headers: {
    Authorization: token.token,
    "User-Agent": "Your User Agent String",
    Host: "www.example.com",
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
  },
});
export default axiosBase;
