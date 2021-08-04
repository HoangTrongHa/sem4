<template>
  <div class="wrap-cart">
    <h1> GIỎ HÀNG</h1>
    <h2>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</h2>
    <v-container id="cart">
      <div class="content-wrap">
        <div class="content-area">
          <div class="woocommerce">
            <table class="woocommerce-cart-form__contents" v-if="countCart > 0">
              <thead>
                <tr>
                  <th class="product-remove">&nbsp;</th>
                  <th class="product-thumbnail">&nbsp;</th>
                  <th class="product-name">Sản phẩm</th>
                  <th class="product-price">Giá</th>
                  <th class="product-quantity">Số lượng</th>
                  <th class="product-subtotal">Tạm tính</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="woocommerce-cart-form__cart-item cart_item"
                  v-for="(item, index) of getAllCart"
                  :key="index"
                >
                  <td class="product-remove">
                    <div>
                      <v-btn
                        color="error"
                        fab
                        width="30"
                        height="30"
                        @click="removeItemInCart(item.id)"
                      >
                        X
                      </v-btn>
                    </div>
                  </td>
                  <td class="product-thumbnail">
                    <img :src="item.img" />
                  </td>
                  <td class="product-name" data-title="Sản phẩm">
                    {{ item.name }}
                  </td>
                  <td class="product-price" data-title="Giá">
                    {{ item.price }}đ
                  </td>
                  <td class="product-quantity">
                    <div class="wrap-product-quantity">
                      <div class="button-option" @click="removeQty(item.id)">
                        -
                      </div>
                      <div class="content">
                        {{ item.qtyCus }}
                      </div>
                      <div class="button-option" @click="addQty(item.id)">
                        +
                      </div>
                    </div>
                  </td>
                  <td class="product-subtotal" data-title="Tạm tính">
                    <span class="woocommerce-Price-amount amount"
                      ><bdi
                        >{{ item.price * item.qtyCus | currency }}<span class="woocommerce-Price-currencySymbol"
                          >₫</span
                        ></bdi
                      ></span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <div class="wrapper-not-item">
                Chưa có sản phẩm nào trong giỏ hàng.
              </div>
              <div class="wrapper-not-item-button">
                <v-btn tile class="button-to-store">
                  <icon class="map-icon" name="arrow-circle-left" size="15px" />
                  Trở Lại Sản Phẩm
                </v-btn>
              </div>
            </div>
            <div class="wrap-button-total-cart">
              <div class="wrap-discount">
                <v-text-field
                  label="Mã Giảm Giá"
                  filled
                  dense
                  v-model="discount"
                ></v-text-field>
              </div>
              <div class="wrap-discount">
                <v-btn
                  class="button"
                  :disabled="updateCart"
                  @click="cartUpdateNew"
                >
                  Cập Nhật Giỏ Hàng
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="wrap-total-cart">
          <div class="title">
            Tổng thanh toán(Tạm tính):
            <span class="money">{{ calcSum | currency }}</span>
          </div>
          <div class="wrap-button">
            <v-btn
              tile
              class="button-to-store"
              @click="$router.push({ name: `CheckOut` })"
            >
              Mua hàng  
              <icon
                class="map-icon"
                name="arrow-alt-circle-right"
                size="30px"
              />
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Vue2Filters from "vue2-filters";

import BaseBanner from "@/components/base/Banner.vue";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
Vue.use(Vue2Filters, Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
});
export default {
  components: {
    BaseBanner
  },
  data() {
    return {
      cart: [],
      discount: "",
      updateCart: true,
    };
  },
  computed: {
    countCart() {
      return this.cart.length;
    },
    calcSum() {
      let total = 0;
      this.getAllCart.forEach((item) => {
        total += item.price * item.qtyCus;
      });
      return total;
    },
    getAllCart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeItemInCart(cartId) {
      this.updateCart = false;
      console.log(this.getAllCart);
      let found = this.getAllCart.filter((items) => items.id === cartId);
      this.getAllCart.splice(found, 1);
    },
    addQty(id) {
      this.updateCart = false;
      let found = this.getAllCart.find((items) => items.id === id);
      var plusQty = found.qtyCus++;
      if (found.size.qty <= plusQty) {
        this.updateCart = true;
        this.$toast.error(`Không Đủ Số Lượng`);
      }
    },
    removeQty(id) {
      this.updateCart = false;
      let found = this.getAllCart.find((items) => items.id === id);
      var minusQty = found.qtyCus--;
      console.log(minusQty);
      if (minusQty < 1 || minusQty == 1) {
        this.updateCart = true;
        this.$toast.error(`Không Đủ Số Lượng`);
      }
    },
    cartUpdateNew() {
      var newCart = this.$store.state.cart;
      localStorage.removeItem("Cart");
      localStorage.setItem("Cart", JSON.stringify(newCart));
      this.$toast.success(`Cập Nhật Giỏ Hàng Thành Công`);
      this.updateCart = true;
    },
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("Cart")) || [];
    this.$store.dispatch("getCart");
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/cart.scss";
</style>
