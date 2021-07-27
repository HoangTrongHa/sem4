import http from "@/http";

class index {
  addNewOrder(order) {
    return http.post("/order", order,{
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
}

export default new index();
