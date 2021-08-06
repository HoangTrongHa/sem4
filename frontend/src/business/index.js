import http from "@/http";
import https from "@/https";

class index {
  addNewOrder(order) {
    return https.post("/order/add", order,{
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(order)
    });
  }
  addNewContact(data) {
    return http.post("/contact_new", data,{
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
  login (data) {
    return https.post("/auth/login",data, {
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
  editUser (id, data) {
    return https.post(`/user/update/${id}`, data,{
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}
export default new index();
