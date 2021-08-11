import axios from 'axios'
export default axios.create({
  baseURL: "https://bigboss-api-sem4.herokuapp.com/api/v1",
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  },
});

const apis = axios.create({
  baseURL: "https://bigboss-api-sem4.herokuapp.com/api/v1"
});


export const api = {
  categoryList: () => apis.get("/category"),
  addCategory: data => apis.post("/category/add", data),
  productList: () => apis.get("/product"),
  addProduct: data => apis.post("/product/add", data),
  orderList: () => apis.get("/order"),
  orderUpdate: (id, data) => apis.put(`/order/update/${id}`, data)
};
