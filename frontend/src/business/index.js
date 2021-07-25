import http from "@/http";

class index {
  addNewOrder(order) {
    return http.post("/order", order);
  }
}

export default new index();
