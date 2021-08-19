<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Dashboard</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
    <div class="row">
      <div class="col-xl-2 col-md-6 item-box" @click="$router.push({ name: `AllOrder`})">
         <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          height="150"
        >
        <v-card-text class="text-h5 font-weight-bold">
          <div>
            Số Lượng Đơn Hàng Hiện Có
          </div>
           <div>
            {{ getDataAll }}
          </div>
        </v-card-text>
      </v-card>
      </div>
      <div class="col-xl-2 col-md-6 item-box" @click="$router.push({ name: `OrderBuy`})">
         <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          height="150"
        >
        <v-card-text class="text-h5 font-weight-bold">
          <div>
            Số Lượng Đơn Hàng Mua
          </div>
           <div>
            {{ getOrderBuy }}
          </div>
        </v-card-text>
      </v-card>
      </div>
      <div class="col-xl-2 col-md-6 item-box"  @click="$router.push({ name: `OrderThue`})">
         <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          height="150"

        >
        <v-card-text class="text-h5 font-weight-bold" >
          <div>
            Số Lượng Đơn Hàng Thuê
          </div>
           <div>
            {{ getOrderThue }}
          </div>
        </v-card-text>
      </v-card>
      </div>
       <div class="col-xl-2 col-md-6 item-box" @click="$router.push({ name: `WaitForConfirmation`})">
         <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          height="150"

        >
        <v-card-text class="text-h5 font-weight-bold">
          <div>
            Số Lượng Đơn Hàng Mới
          </div>
           <div>
            {{ getOrderNew }}
          </div>
        </v-card-text>
      </v-card>
      </div>
       <div class="col-xl-2 col-md-6 item-box" @click="$router.push({ name: `OutOfDate`})">
         <v-card
          class="mx-auto"
          color="warning"
          dark
          height="150"
        >
        <v-card-text class="text-h5 font-weight-bold">
          <div>
            Số Lượng Đơn Hàng Hết Hạn Thuê Chưa TRả
          </div>
           <div>
            {{ getOrderEndThue }}
          </div>
        </v-card-text>
      </v-card>
      </div>
      <div class="col-xl-2 col-md-6 item-box">
         <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          height="150"
        >
        <v-card-text class="text-h5 font-weight-bold">
          <div>
            Số Lượng Đơn Đang Trong Quá Trình Thuê
          </div>
           <div>
            {{ getOrderInThue }}
          </div>
        </v-card-text>
      </v-card>
      </div>
      <div class="col-xl-2 col-md-6 item-box">
         <v-card
          class="mx-auto"
          color="#26c6da"
          dark
          height="150"
        >
        <v-card-text class="text-h5 font-weight-bold" @click="$router.push({ name: `getOrderRequestReturn`})">
          <div>
            Số Lượng Đơn Yêu Cầu Trả Hàng
          </div>
           <div>
            {{ getOrderReturn }}
          </div>
        </v-card-text>
      </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getData() {
      return this.$store.state.order
    },
    getDataAll() {
      return this.$store.state.order.length
    },
    getOrderBuy() {
      return this.$store.state.order.filter(items => items.statusRent !== "Xác Nhận Đơn Thuê").length
    },
    getOrderNew() {
      return this.$store.state.order.filter(items => items.status === "Chờ Xác Nhận").length
    },
    getOrderThue() {
      return this.$store.state.order.filter(items => items.statusRent === "Xác Nhận Đơn Thuê").length
    },
    getOrderHetHan() {
      return this.$store.state.order.filter(items => items.status === "Hết Hạn Thuê").length
    },
    getOrderEndThue() {
      return this.$store.state.order.filter(items => items.status === "Hết Hạn Thuê").length
    },
    getOrderInThue() {
      return this.$store.state.order.filter(items => items.status === "Đang Trong Quá Trình Thuê").length
    },
    getOrderReturn() {
      return this.$store.state.order.filter(items => items.status === "YÊU CẦU TRẢ HÀNG").length
    } 
  }
}
</script>

<style scoped>
.item-box{
  cursor: pointer;
}
</style>
