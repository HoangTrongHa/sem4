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
                        v-model="userName"
                    ></v-text-field>
                  
                </div>
                <div class="wrap-input">
                    <v-text-field
                        label="Số Điện Thoại"
                        outlined
                        v-model="phoneNumber"
                    ></v-text-field>
                </div>
            </div>
            <div class="full-width">
                <v-text-field
                    label="Địa Chỉ EMail"
                    outlined
                    v-model="email"
                ></v-text-field>
            </div>
            <div class="full-width">
                <v-text-field
                    label="Địa Chỉ Nhà"
                    outlined
                    v-model="address"
                ></v-text-field>
            </div>
            <div class="form-field">
                <div class="wrap-item">
                    <v-select
                    :items="cities"
                    label="Chọn Tỉnh/Thành"
                    outlined
                    item-text="name"
                    item-value="id"
                    v-model="Vcity"
                    ></v-select>
                </div>
                <div class="wrap-item">
                    <v-select
                    :items="getDistrict"
                    label="Chọn Quận/Huyện"
                    outlined
                    item-text="name"
                    item-value="id"
                    v-model="Vdistrict"
                    >
                    </v-select>
                </div>
                <div class="wrap-item">
                    <v-select
                        :items="getWard"
                        label="Chọn Phường/Xã"
                        outlined
                        item-value="id"
                        item-text="name"
                        v-model="Vward"
                    ></v-select>
                </div>
            </div>
            <div class="full-width">
                <v-textarea
                outlined
                clearable
                clear-icon="mdi-close-circle"
                label="Ghi Chú Thêm"
                v-model="Vnote"
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
                    value="COD"
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
                    @click="submitForm"
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
import Service from '../../business/index'
Vue.use(Vue2Filters)
// import { StripeCheckout } from '@vue-stripe/vue-stripe';


export default {
    components: {
        BaseBanner,
    },
    data () {
      return {
        
        loading: false,
        userName: '',
        phoneNumber: '',
        email:'',
        address:'',
        Vcity:'',
        Vdistrict:'',
        Vward: '',
        Vnote: '',
        option:'',
        items:'',

    }
},
    computed: {
        cart() {
            console.log(this.Vdistrict)
            return JSON.parse(localStorage.getItem('Cart')) || [];
        },
        cities() {
            return this.$store.state.city
        },
        calcSum(){
            let total = 0;
            this.cart.forEach((item) => {
                total += item.price * item.qtyCus;
            });
            return total;
        },

        getDistrict () {
            return this.$store.state.district.filter(items => items.city_id === this.Vcity)
        },

        getWard() {
            return this.$store.state.ward.filter(items => items.district_id === this.Vdistrict)
        },
        
        getCode() {
            return  Math.random().toString(6).substring(2, 5) + Math.random().toString(6).substring(2, 5)
        }
        
    },
     mounted() {
        // this.$store.dispatch('getProvince');
        this.$store.dispatch('getCity');
        this.$store.dispatch('getDistrict');
        this.$store.dispatch('getWard');
    },
    methods: {
        async submitForm(){
            this.loading = true
            var getForm = {
                code_order : this.getCode,
                userName: this.userName,
                phoneNumber: this.phoneNumber,
                email: this.email,
                address: this.address,
                city: this.Vcity,
                district: this.Vdistrict,
                ward: this.Vward,
                note: this.Vnote,
                option: this.option
            }
            await new Promise(resolve => setTimeout(resolve, 2000))
            this.loading = false
            if (getForm.option == "COD") {  
                Service.addNewOrder(getForm)
                .then((response) => {
                    console.log(response.data);
                    alert("Cập nhật thành công");
                })
                .catch((errors) => {
                     alert("k Cập nhật thành công");
                    console.log(errors);
                });
            }
        }
    },
   
    created() {
        console.log(this.userName)
  }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/CheckOut.scss";
</style>