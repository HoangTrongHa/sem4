<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Chi Tiết Đơn Hàng #{{ getOrderDetail.code_order }}</h1>
        <v-row>
            <h3>Đơn Thuê</h3>
            <div class="wrapDonThue">
                <div v-if="countLenghtThue === 0 ">
                    Khong co don hang
                </div>
                <div v-else>
                    Có Đơn Hàng
                </div>
            </div>
        </v-row> 
        <v-row>
            <h3>Đơn Mua</h3>
            <div class="wrapBuy">
                <div v-if="countLenghtBuy === 0 ">
                    Khong co don hang
                </div>

                <div v-else>
                    Có Đơn Hàng
                </div>
            </div>
        </v-row>  
    </div>
</template>

<script>
import Buy from "@/components/Orderdetail/BuyComponents.vue"

export default {
  props : {
    getOrder : {
      type : Array,
      default : () => []
    }
  },
  components : {
      
  },
  computed: {
    getOrderDetail() {
        return this.$store.state.order.find(item => item.id === this.$route.params.params)
    },
    getProductItem() {
        return JSON.parse(this.getOrderDetail.item_cart)
    },
    countLenghtThue() {
        return this.getProductItem.thue.length
    },
    countLenghtBuy() {
        return this.getProductItem.buy.length
    },
  },
  methods: {
    
  },

}
</script>

<style scoped>
  .button {
    background: #4caf50 !important;
    color: #fff;
  }
</style>
