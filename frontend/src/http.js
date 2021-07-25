import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:15000",
  headers: {
    "Content-type": "application/json",
  },
});
