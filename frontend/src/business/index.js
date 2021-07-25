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
}

export default new index();
