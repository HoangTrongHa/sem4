import axios from 'axios'
const apis = axios.create({
    baseURL : "https://bigboss-api-sem4.herokuapp.com/api/v1",
    transformRequest : [data => JSON.stringify((data))],
    headers : {
        "Content-type" : "application/json"
    }
});
export const api = {
    categoryList : () => apis.get("/category"),
    addCategory : (data) => apis.post("/category/add",data),
    productList : () => apis.get("/product"),
    addProduct : (data) => apis.post("/product/add",data)
}