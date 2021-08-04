<template>
<v-row justify="center">
    <v-dialog :value="dialog" max-width="1000" @input="updateDialog">
      <v-card>
        <v-card-title class="text-h5">Thêm Vào Giỏ Hàng</v-card-title>
            <v-spacer></v-spacer>
            <div class="wrap-cart">
              <div class="wrap-img">
                <img :src="getDataProduct.img" alt="">
              </div>
              <div class="wrap-infor-product">
                <p class="name-product">{{ getDataProduct.name }}</p>
                <div class="price" v-if="status == 0">{{ getDataProduct.price }}</div>
                <div class="price" v-else>{{ getDataProduct.price_to_rent }}</div>
                <div class="title-size">
                  Chọn size
                </div>
                <div class="item-size">
                  <ul class="wrap-item-size">
                    <li 
                      v-for="size of getDataProduct.size" 
                      :key="size.id"
                      @click="findSizeQty(size)"
                      :class="{ active :selected == size.id }"
                      >
                      <span>{{ size.size }}</span>
                    </li>
                  </ul>
                </div>
                <div class="wrapQuantity">
                  <v-text-field 
                  type="number" 
                  label="Số Lượng Hiện Có"
                  v-model="getSize.qty"
                  outlined
                  :class="isActive == true ? 'notNone' : 'disnone'"
                  disabled
                  >
                  </v-text-field>
                </div>
                <div class="wrapChooseQty">
                    <v-slider
                      v-model="qtyCustomer"
                      :class="isActive == true ? 'notNone' : 'disnone'"
                      color="orange"
                      label="Số Lượng"
                      hint="Số Lượng Quá Ít"
                      min="0"
                      :max="getSize.qty"
                      thumb-label
                    ></v-slider>
                </div>
                <div class="wrapDatePicker" v-if="status == 1">
                  <DataPicker 
                  @date-start="dataStart"
                  :label="labelStart"
                  />
                </div>
                <div class="wrapDatePicker"  v-if="status == 1">
                  <DataPicker 
                  @date-start="dateEnd"
                  :label="labelEnd"
                  />
                </div>
                <div class="wrapTotalPriceCart">
                <div :class="isActive == true ? 'notNone' : 'disnone'">
                    {{ this.TotalQty }} đ
                  </div>
                </div>
              </div>
            </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="updateDialog(false)">
            Đóng
          </v-btn>
          <v-btn color="green darken-1" v-if="status == 0" text @click="updataCart()"> Thêm sản phẩm vào giỏ hàng </v-btn>
          <v-btn color="green darken-1" v-else text @click="thue()"> Đăng Ký Thuê </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

import DataPicker from '../base/Datepicker.vue'
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

Vue.use(Vue2Filters, Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
});
export default {
  components: {
    DataPicker
  },
  data() {
    return {
        getSize: {},
        selected: Number,
        isActive: false,
        CustomerQty: String,
        totalMoney: Number, 
        qtyCustomer: '',
        TotalQty:'',
        cart:[],
        labelStart:'Thuê Từ Ngày',
        labelEnd: 'Ngày Trả',
        startDay: '',
        endDay:'',
    }
  },
  props: {
      dialog: Boolean,
      getDataProduct: {},
      toRent: Boolean,
      status: Number
  },
  watch: {
    qtyCustomer: function ( newValue ) {
      this.qtyCustomer = newValue
      if (this.status == 1) {
          if ((this.startDay == undefined || this.startDay == '') && (this.endDay == undefined || this.endDay == '')) {
            this.$toast.warning(`Hãy Chọn Ngày Trước Khi Chọn Số Lượng. Như Vậy Chúng Tôi Sẽ Tính Toán Chuẩn Xác Nhất. Xin Cảm Ơn`);
          }   
          var date = new Date(this.startDay);
          var dateEnd = new Date(this.endDay);
          var currentDay = Math.round((dateEnd-date)/(1000*60*60*24));
          this.TotalQty = this.getDataProduct.price_to_rent * this.qtyCustomer * currentDay
      } else {
        this.TotalQty = this.qtyCustomer * this.getDataProduct.price
      }
    },
    // startDay: function (newValue, ol)
  },

  methods: {
    updateDialog(item) {
        this.$emit('update-dialog', item)
    },
    findSizeQty(size) {
      this.getSize = size
      this.selected = size.id
      this.isActive = true;
      console.log();
    },
    dataStart(e) {
      this.startDay = e
      console.log( this.startDay);
    },
    dateEnd(e) {
      this.endDay = e
      console.log( this.endDay);

    },
    updataCart() {
      var checkCart = JSON.parse(localStorage.getItem('Cart')) || [];
      var value = {
          id:this.getDataProduct.id,
          name:this.getDataProduct.name,
          price:this.getDataProduct.price,
          TotalPrice: this.TotalQty,
          qtyCus: this.qtyCustomer,
          img: this.getDataProduct.img,
          size: this.getSize,
          startDay: this.startDay,
          endDay: this.endDay,
          service: ''
      } 
      if (this.status == 1) {
        value.service = 'Thuê'
      } else {
        value.service = 'Mua'
      }
      let duplicate = checkCart.find(items => items.id == value.id)
      if ( duplicate !== undefined) {
        let found = checkCart.filter(items => items.id !== value.id)
        duplicate.qtyCus += this.qtyCustomer
        localStorage.removeItem("Cart")
        found.push(duplicate)
        localStorage.setItem("Cart",JSON.stringify(checkCart))
        this.$store.dispatch('updateCart',checkCart);
      } else {
        checkCart.push(value)
        this.$store.dispatch('updateCart',checkCart);
        localStorage.setItem("Cart",JSON.stringify(checkCart))
      }
      this.updateDialog(false)    
      this.$toast.warning(`Kiểm Tra Lại Trong Giỏ Hàng`);    
    },
    
  },
  create () {
    console.log(123);
  }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/addtocart.scss";
</style>