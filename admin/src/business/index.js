import https from "../../apis";

class index {
    editOrder(id, order) {
        return https.put(`/order/update/${id}`, order, {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(order)
        });
    }
}

export default new index();
