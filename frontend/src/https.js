import axios from "axios";
export default axios.create({
  baseURL: "https://bigboss-api-sem4.herokuapp.com/api/v1",
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
});
