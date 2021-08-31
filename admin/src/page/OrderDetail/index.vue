<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Chi Tiết Đơn Hàng </h1>
    <v-row>
      <div class="order-detail">
        <div class="info-detail">
          <div class="order-info">
            <h3>Thông tin đơn hàng</h3>
            <div class="order-detail-item">
              <div class="order-detail-item-title">ID</div>
              <div class="data">#{{ getOrderDetail.code_order }}</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Thời gian đặt hàng</div>
              <div class="data">{{ getOrderDetail.create_at }}</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Hình thức thanh toán</div>
              <div class="data">{{ getOrderDetail.option }}</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Ghi chú của khách hàng</div>
              <div class="data">{{ getOrderDetail.note }}</div>
            </div>          
          </div>
          <div class="user-info">
            <h3>Thông tin khách hàng</h3>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Tên người đặt hàng</div>
              <div class="data">{{ getOrderDetail.user_register }}</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Tên người nhận hàng</div>
              <div class="data">{{ getOrderDetail.userName }}</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Số điện thoại</div>
              <div class="data">{{ getOrderDetail.phoneNumber }}</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Email</div>
              <div class="data">{{ getOrderDetail.email }}</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Địa chỉ nhận hàng</div>
              <div class="data">
                {{ getOrderDetail.address }}/{{ getOrderDetail.ward }}/{{
                  getOrderDetail.district
                }}/{{ getOrderDetail.city }}
              </div>
            </div>
            <div class="order-detail-item">
                <div class="order-detail-item-title">Trạng thái đơn hàng</div>
              <div class="status">
                <v-select
                  id="status"
                  :items="items"
                  label="Chuyển Trạng Thái"
                  outlined
                  v-model="status"
                >
                </v-select>
              </div>
            </div>          
          </div>
        </div>
        <div class="product">
          <div class="wrapByItem" v-show="countLenghtBuy > 0">
            <div class="title">Danh sách Đơn Hàng Mua</div>
            <div
              class="wrapItemGroup">
                <BuyComponents 
                :countLenghtBuy="countLenghtBuy"
                :dataBy="this.getProductItem.buy"
                :dataStatus="getOrderDetail.statusBuy" 
                @update-status="updateStatusBy"
                :calcBuy="calcBuy"
              />
            </div>
          </div>
          <hr>
          <div class="wrapThueItem"                 
            v-show="countLenghtThue > 0"
          >
            <div class="title">Danh sách Đơn Hàng Thuê</div>
            <div class="wrapItemGroup">
              <ThueComponents
                :dataBy="this.getProductItem.thue"
                :countLenghtBuy="countLenghtBuy"
                :calcThue="calcThue"
                :calcCoc="calcCoc"
                :dataStatus="getOrderDetail.statusRent" 
                @update-status="updateStatusThue"
                @update-date-time="updateDateTime"
              />
            </div>
          </div>
          <div class="total-price">Tổng Số Tiền Phải Thanh Toán: {{ calcTotal }} VNĐ</div>
          <div class="total-price" v-if="countLenghtThue > 0 && this.calcCoc > this.calcThue"> Số Tiền Phải Trả Lại Khách: {{ calcAfterThue }} VNĐ</div>
          <div class="total-price" v-if="countLenghtThue > 0 && this.calcCoc < this.calcThue"> Số Tiền Khách Phải Trả Thêm: {{ calcAfterThue }} VNĐ</div>

          <div class="updateButton">
            <v-btn
              tile
              :disabled="disable"
              color="success"
              class="button"
              @click="updateCart"
              :loading="loading"
            >
              <v-icon left>
                mdi-pencil
              </v-icon>
              Cập Nhật Đơn Hàng
            </v-btn>
          </div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
import BuyComponents from "@/components/OrderDetail/BuyComponents.vue";
import ThueComponents from "@/components/OrderDetail/ThueComponents.vue";
import Service from "../../business/index";

export default {
  data() {
    return {
      status: "",
      items: [
        {
          id: 1,
          text: "Chờ Xác Nhận",
        },
        {
          id: 2,
          text: "Đơn Hàng Bị Hủy",
        },
        {
          id: 3,
          text: "Chờ Vận Chuyển",
        },
        {
          id: 4,
          text: "Đang Vận Chuyển",
        },
        {
          id: 5,
          text: "Đã Tới Điểm Giao",
        },
        {
          id: 6,
          text: "Hết Hạn Thuê",
        },
        {
          id: 7,
          text: "Hoàn Thành",
        },
        {
          id: 8,
          text: "Đang Trong Quá Trình Thuê",
        },
        {
          id: 9,
          text: "Quá Hạn Thuê",
        },
        {
          id: 10,
          text: "Xác Nhận Trả Hàng",
        },
      ],
      disable: Boolean,
      getStatus: "",
      loading: false,
      statusBuy:'',
      statusRent:''
    };
  },
  props: {
    getOrder: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    BuyComponents,
    ThueComponents,
  },
  computed: {
    getOrderDetail() {
      return this.$store.state.order.find(
        (item) => item.id === this.$route.params.params
      );
    },
    calcAfterThue() {
      var total = 0
      if(this.calcCoc > this.calcThue) {
        total =  this.calcCoc - this.calcThue
      }
      if(this.calcCoc < this.calcThue) {
        total = this.calcThue - this.calcCoc
      }
      return total
    },
    getProductItem() {
      return JSON.parse(this.getOrderDetail.item_cart);
    },
    countLenghtThue() {
      return this.getProductItem.thue.length;
    },
    countLenghtBuy() {
      return this.getProductItem.buy.length;
    },
    calcThue() {
      let total = 0;
      this.getProductItem.thue.forEach((item) => {
        total += (item.price * item.qtyCus) * Math.floor(( new Date(item.endDay) - new Date(item.startDay)) / (1000 * 60 * 60 * 24));
      });
      return total;
    },
    calcBuy() {
      let total = 0;
      this.getProductItem.buy.forEach((item) => {
        total += item.price * item.qtyCus;
      });
      return total;
    },
    calcCoc() {
      let total = 0;
      this.getProductItem.thue.forEach((item) => {
        total += item.deposit_price * item.qtyCus;
      });
      return total;
    },
    calcTotal() {
      let total = 0;
      total = this.calcCoc + this.calcBuy
      return total
    }
  },
  methods: {
    updateCart() {
      var data = this.getOrderDetail;
      data.item_cart = JSON.stringify(this.getProductItem)
      data.status = this.status;
      data.statusBuy = this.statusBuy;
      data.statusRent = this.statusRent;
      console.log(data);
      this.loading = true;
      Service.editOrder(data.id, data).then((response) => {
        console.log(response.data);
        this.loading = false;
      });
      this.$toast.success(`Cập Nhật Thành Công`);
    },
    updateStatusBy(e) {
      this.statusBuy = e;
      this.disable = false
    },
    updateStatusThue(e) {
      this.statusRent = e;
      this.disable = false
    },
    updateDateTime(e,id) {
      this.getProductItem.thue.find(items => items.id === id).endDay = e
      console.log(this.getProductItem.thue);
      this.disable = false;
    }
  },
  created() {
    this.status = this.$store.state.order.find(
      (item) => item.id === this.$route.params.params
    ).status;
    this.disable = true;
    this.getStatus = this.$store.state.order.find(
      (item) => item.id === this.$route.params.params
    ).status;
  },

  watch: {
    status: function(val) {
      if (val !== this.getStatus) {
        this.disable = false;
      } else {
        console.log(2);
      }
    },
  },
};
</script>

<style scoped lang="scss">
h1{
  text-align: center;
  margin-bottom: 30px;
}
.order-detail {
  display: flex;
  flex-direction: column;
  .info-detail {
    padding: 20px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    .order-info{
      flex: 1;
    }
    .user-info{
      flex: 1;
    }
    .order-info,
    .user-info {
      display: flex;
      flex-direction: column;
      h3 {
        width: 100%;
      }
      .order-detail-item {
        display: flex;
        justify-content: space-between;
        .order-detail-item-title {
          flex: 1;
          color: gray;
        }
        .data {
          flex: 1;
          font-weight: bold;
        }
        .status{
          width: 50%;
          height: min-content;
        }
      }
    }
  }
  .product {
    .total-price{
      font-weight: bold;
      font-size: 30px;
    }
    .button {
      color: #fff;
      margin: 30px 0;
    }
  }
}
</style>
