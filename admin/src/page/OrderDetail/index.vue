<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Chi Tiết Đơn Hàng</h1>
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
          <hr/>
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
          </div>
        </div>
        <div class="product">
          <div class="wrapByItem">
            <div class="title">Danh sách Đơn Hàng Mua</div>
            <div class="wrapItemGroup" v-if="countLenghtBuy === 0">
              Khong co don hang
            </div>
            <div v-else class="wrapItemGroup">
              <BuyComponents 
              :dataBy="this.getProductItem.buy"
              :dataStatus="getOrderDetail.statusBuy" 
              @update-status="updateStatusBy"
              />
            </div>
          </div>
          <hr>
          <div class="wrapThueItem">
            <div class="title">Danh sách Đơn Hàng Thuê</div>
            <div class="wrapItemGroup" v-if="countLenghtThue === 0">
              Khong co don hang
            </div>
            <div v-else class="wrapItemGroup">
              <ThueComponents
                :dataBy="this.getProductItem.thue"
                :calcThue="calcThue"
                :calcCoc="calcCoc"
                :dataStatus="getOrderDetail.statusRent" 
                @update-status="updateStatusThue"
                @update-date-time="updateDateTime"
              />
            </div>
          </div>
          <div class="total-price">Tổng giá trị đơn hàng: 00000 VNĐ</div>
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
        total += item.price * item.qtyCus;
      });
      return total;
    },
    calcCoc() {
      let total = 0;
      this.getProductItem.buy.forEach((item) => {
        total += item.price * item.qtyCus;
      });
      return total;
    },
  },
  methods: {
    updateCart() {
      var data = this.getOrderDetail;
      data.status = this.status;
      data.statusBuy = this.statusBuy;
      data.statusRent = this.statusRent;
      console.log(data);
      this.loading = true;
      Service.editOrder(data.id, data).then((response) => {
        console.log(response.data);
        this.loading = false;
      });
    },
    updateStatusBy(e) {
      this.statusBuy = e;
      this.disable = false
    },
    updateStatusThue(e) {
      this.statusRent = e;
      this.disable = false
    },
    updateDateTime(e) {
      console.log(`asdsad${e}`);
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
.order-detail {
  display: flex;
  justify-content: space-between;

  .info-detail {
    width: 35%;
    padding: 20px;
    line-height: 50px;
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
          width: max-content;
          color: gray;
        }
        .data {
          width: 60%;
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
    width: 65%;
    .total-price{
      font-weight: bold;
      font-size: 30px;
    }
    .button {
      color: #fff;
    }
  }
}
</style>
