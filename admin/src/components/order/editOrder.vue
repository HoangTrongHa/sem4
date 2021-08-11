<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="`#modal${orderEdit.id}`"
      class="btn-warning text-white btn btn-sm"
    >
      Detail
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="`modal${orderEdit.id}`"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Detail order
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="detail-order">
              <label class="detail-order__label">User name :</label>
              <span>{{ orderEdit.userName }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">Phone number :</label>
              <span>{{ orderEdit.phoneNumber }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">Email :</label>
              <span>{{ orderEdit.email }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">Delivery status :</label>
              <span>{{ orderEdit.option }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">Note :</label>
              <span>{{ orderEdit.note }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">User resgister :</label>
              <span>{{ orderEdit.user_register }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">Email resgister :</label>
              <span>{{ orderEdit.email_register }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">Email resgister :</label>
              <span>{{ orderEdit.email_register }}</span>
            </div>
            <div class="detail-order">
              <label class="detail-order__label">Order status :</label>
              <span>{{ orderEdit.status }}</span>
            </div>

            <h4 class="text-start">List product</h4>
            <table class="table table-striped">
              <thead class="text-center">
                <tr>
                  <td></td>
                  <td>Name</td>
                  <td>Image</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Service</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in itemCart" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td><img :src="item.img" alt="" width="40" /></td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.qtyCus }}</td>
                  <td>{{ item.service }}</td>
                  <td>{{ item.TotalPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer" v-if="orderEdit.status !== 'Hoàn Thành'">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              :disabled="orderEdit.status === 'Đang giao'"
              @click="changeOrderStatus('Đang giao', orderEdit)"
            >
              Approve
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              :disabled="orderEdit.status === 'Chờ Xác Nhận'"
              @click="changeOrderStatus('Hoàn Thành', orderEdit)"
            >
              Done
            </button>
          </div>
          <div class="modal-footer" v-else>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              disabled
            >
              Hoàn Thành
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../../apis";

export default {
  name: "editOrder",
  data() {
    return {
      orderCopy: {}
    };
  },
  computed: {
    address() {
      return `${this.orderEdit.district} ${this.orderEdit.city}`;
    },
    itemCart() {
      return JSON.parse(this.orderEdit.item_cart);
    }
  },
  props: {
    orderEdit: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async changeOrderStatus(status, order_copy) {
      const order = { ...order_copy };
      order.status = status;
      await api.orderUpdate(order.id, order);
      this.$emit("refreshData");
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-order {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
  &__label {
    padding-right: 30px;
  }
}
.table {
  max-height: 100%;
}
</style>
