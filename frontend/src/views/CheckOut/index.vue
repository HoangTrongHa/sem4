<template>
    <div class="check-out"> 
        <BaseBanner>
            <template v-slot:title>
                {{ $route.params.name }}
            </template>
      </BaseBanner>
      <div class="wrap-check-out">
        <div class="checkout__main">
            <div class="title">Thông tin đơn hàng</div>
            <div class="form-group">
                <div class="wrap-input">
                    <v-text-field
                        label="Họ Tên"
                        outlined
                    ></v-text-field>
                </div>
                <div class="wrap-input">
                    <v-text-field
                        label="Số Điện Thoại"
                        outlined
                    ></v-text-field>
                </div>
            </div>
            <div class="full-width">
                <v-text-field
                    label="Địa Chỉ EMail"
                    outlined
                ></v-text-field>
            </div>
            <div class="full-width">
                <v-text-field
                    label="Địa Chỉ Nhà"
                    outlined
                ></v-text-field>
            </div>
            <div class="form-field">
                <div class="wrap-item">
                    <v-select
                    :items="items"
                    label="Chọn Tỉnh/Thành"
                    outlined
                    ></v-select>
                </div>
                <div class="wrap-item">
                    <v-select
                    :items="items"
                    label="Chọn Quận/Huyện"
                    outlined
                    >
                    </v-select>
                </div>
                <div class="wrap-item">
                    <v-select
                        :items="items"
                        label="Chọn Phường/Xã"
                        outlined
                    ></v-select>
                </div>
            </div>
            <div class="full-width">
                <v-textarea
                outlined
                clearable
                clear-icon="mdi-close-circle"
                label="Ghi Chú Thêm"
                ></v-textarea>
            </div>
            <div class="title">Chọn hình thức thanh toán</div>
            <div class="full-width">
            <v-radio-group
                v-model="option"
                column
            >
            <div class="wrap-item-select">
                <v-radio
                    color="red"
                    value="reasdd"
                >
                </v-radio>
                <div class="payment-method__icon">
                  <img src="@/assets/shipping.svg" alt="">
                </div>
                <div class="wrap-content">
                    <div class="content">Thanh Toán Khi Nhận Hàng(COD)</div>
                    <div class="content">Miễn phí vận chuyển với mọi đơn hàng trên 300k</div>
                </div>
            </div>
              <div class="wrap-item-select">
                <v-radio
                    color="red"
                    value="zalo-pay"
                ></v-radio>
                <div class="payment-method__icon">
                    <img width="55" src="https://www.coolmate.me/images/logo-zalopay.svg">                
                </div>
                <div class="wrap-content">
                    <div class="content">Thanh Toán Khi Nhận Hàng(COD)</div>
                    <div class="content">Miễn phí vận chuyển với mọi đơn hàng trên 300k</div>
                </div>
            </div>
            <div class="wrap-item-select">
                <v-radio
                    color="red"
                    value="MOMO Pay"
                ></v-radio>
                <div class="payment-method__icon">
                    <img width="35" src="https://www.coolmate.me/images/momo-icon.png">                
                </div>
                <div class="wrap-content">
                    <div class="content">Thanh Toán Khi Nhận Hàng(COD)</div>
                    <div class="content">Miễn phí vận chuyển với mọi đơn hàng trên 300k</div>
                </div>
            </div>
            </v-radio-group>
            </div>
            <div class="full-width">
                <v-btn
                    class="button-submit"
                    :loading="loading"
                    :disabled="loading"
                    height="100"
                    @click="loader = 'loading'"
                >
                    <div class="title-button">Đặt Hàng </div>
                </v-btn>
            </div>
        </div>
        <div class="checkout__sidebar">
            <div class="overflow-y-auto checkout__cart"
            >
                <div class="wrap-cart">
                <div class="title">
                    Giỏ hàng của bạn
                </div>
                 <div class="wrapItem" v-for="items of cart" :key="items.id">
                        <div class="wrapImg">
                            <img :src="items.img" >
                        </div>
                        <div class="wrapContent">
                            <div class="name">
                                {{ items.name }}
                            </div>
                                <div class="price">
                                {{ items.price }}đ
                            </div>
                            <div class="size"
                            
                            >
                                Kích Thước: {{ items.size.size }}
                            </div>
                            <div class="size">
                                Số Lượng: {{ items.qtyCus }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="checkout__cart total-price">
                <div class="full-width">
                    <v-text-field
                        label="Nhập Mã Giảm Giá"
                        outlined
                    ></v-text-field>
                </div>
                <div class="full-width">
                    <div class="wrap-infor-total">
                        <div class="title-total">Tạm Tính</div>
                        <div class="total">
                            {{ calcSum | currency }}
                        </div>
                    </div> 
                    <div class="wrap-infor-total">
                        <div class="title-total">Mã giảm giá</div>
                        <div class="total">
                            0
                        </div>
                    </div> 
                    <div class="wrap-infor-total">
                        <div class="title-total">Mã giảm giá khác</div>
                        <div class="total">
                            0
                        </div>
                    </div> 
                    <div class="wrap-infor-total">
                        <div class="title-total">Phí giao hàng</div>
                        <div class="total">
                            Miễn phí
                        </div>
                    </div> 
                    <div class="wrap-infor-total">
                        <div class="title-total">Phí giao hàng</div>
                        <div class="total">
                            Miễn phí
                        </div>
                    </div> 
                    <div class="wrap-infor-total">
                        <div class="title-total">Tổng Cộng</div>
                        <div class="total total-price-bank">
                            {{ calcSum | currency }}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
      </div>
      
    </div>
</template>

<script>
import Vue from 'vue'

import BaseBanner from '@/components/base/Banner.vue'
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

export default {
    components: {
        BaseBanner,
    },
    data () {
      return {
        loader: null,
        loading: false,
        
      }
    },
    computed: {
        cart() {
            return JSON.parse(localStorage.getItem('Cart')) || [];
        },
        calcSum(){
            let total = 0;
            this.cart.forEach((item) => {
                total += item.price * item.qtyCus;
            });
            return total;
        }
    },
     mounted() {
            this.$store.dispatch('getProvince');
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
    },
}
</script>

<style lang="scss" scoped>
    @import "@/scss/CheckOut.scss";
</style>