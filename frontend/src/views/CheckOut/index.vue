<template>
    <div class="check-out"> 
        <BaseBanner>
            <template v-slot:title>
                Thanh Toán
            </template>
        </BaseBanner>
      <div class="wrap-check-out">
        <div class="checkout__main">
            <div class="title">Thông tin đơn hàng</div>
        <validation-observer
            ref="observer"
        >
            <div class="form-group">
                <div class="wrap-input">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Họ Và Tên"
                        rules="required"
                    >
                        <v-text-field
                            label="Họ Tên"
                            outlined
                            v-model="userName"
                            :error-messages="errors"
                        ></v-text-field>
                    </validation-provider>
                </div>
                <div class="wrap-input">
                    <validation-provider
                            v-slot="{ errors }"
                            name="Số Điện Thoại"
                            rules="required"
                    >
                        <v-text-field
                            label="Số Điện Thoại"
                            outlined
                            v-model="phoneNumber"
                            type="number"
                            :error-messages="errors"
                        ></v-text-field>
                    </validation-provider>
                </div>
            </div>
            <div class="full-width">
                <validation-provider
                    v-slot="{ errors }"
                    name="Địa Chỉ EMail"
                    rules="required||email"
                    >
                    <v-text-field
                        label="Địa Chỉ EMail"
                        outlined
                        v-model="email"
                        :error-messages="errors"
                    ></v-text-field>
                </validation-provider>
            </div>
            <div class="full-width">
                <validation-provider
                    v-slot="{ errors }"
                    name="Địa Chỉ Nhà"
                    rules="required"
                    >
                    <v-text-field
                        label="Địa Chỉ Nhà"
                        outlined
                        v-model="address"
                        :error-messages="errors"
                    ></v-text-field>
                </validation-provider>
            </div>
            <div class="form-field">
                <div class="wrap-item">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Tỉnh/Thành"
                        rules="required"
                    >
                    <v-select
                        :items="cities"
                        label="Chọn Tỉnh/Thành"
                        outlined
                        item-text="name"
                        item-value="name"
                        v-model="Vcity"
                        :error-messages="errors"
                    ></v-select>
                </validation-provider>
                </div>
                <div class="wrap-item">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Quận/Huyện"
                        rules="required"
                    >
                    <v-select
                        :items="getDistrict"
                        label="Chọn Quận/Huyện"
                        outlined
                        item-text="name"
                        item-value="name"
                        v-model="Vdistrict"
                        :error-messages="errors"
                    ></v-select>
                </validation-provider>
                </div>
                <div class="wrap-item">
                <validation-provider
                        v-slot="{ errors }"
                        name="Phường/Xã"
                    >
                    <v-select
                        :items="getWard"
                        label="Chọn Phường/Xã"
                        outlined
                        item-text="name"
                        item-value="name"
                        v-model="Vward"
                        :error-messages="errors"
                    ></v-select>
                </validation-provider>
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
        </validation-observer>

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
import Vue from "vue";

import BaseBanner from '@/components/base/Banner.vue'
import Vue2Filters from 'vue2-filters'
import Service from '../../business/index'
import {  ValidationObserver, ValidationProvider } from 'vee-validate'
import Toast from "vue-toastification";
import router from "@/router/index"
import "vue-toastification/dist/index.css";
 Vue.use(Vue2Filters, Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });
// import { StripeCheckout } from '@vue-stripe/vue-stripe';


export default {
    components: {
        BaseBanner,
        ValidationProvider,
        ValidationObserver
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
        cityId: null,
        districtId: null
    }
},
    computed: {
        cart() {
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
            return this.$store.state.district.filter(items => items.city_id === this.cityId)
        },

        getWard() {
            return this.$store.state.ward.filter(items => items.district_id === this.districtId)
        },
        
        getCode() {
            return  Math.random().toString(6).substring(2, 5) + Math.random().toString(6).substring(2, 5)
        },
        getUser() {
            return JSON.parse(localStorage.getItem('user')) || [];
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
            await new Promise(resolve => setTimeout(resolve, 2000))
            this.loading = false
            if (localStorage.getItem("token") === null) {
                this.$router.push({name: "Login"})
            } else {
                var getCart = {
                    thue: this.$store.state.thue,
                    buy: this.$store.state.cart
                }
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
                    option: this.option,
                    user_register: this.getUser.username,
                    email_register: this.getUser.email,
                    create_at: new Date().toLocaleString(),
                    item_cart : JSON.stringify(getCart),
                    status: '',
                    total: this.calcSum
                }
                if (getForm.option == "COD") {  
                    getForm.status = "Chờ Xác Nhận"
                    Service.addNewOrder(getForm)
                    .then((response) => {
                        console.log(response.data);
                        this.$toast.success(`Đơn hàng ${getForm.code_order} đã được đặt thành công.`);
                        router.push({ 
                            name: "Success_COD",
                            params: { code_order: getForm.code_order}
                        })
                    })
                    .catch((errors) => {
                        alert("Không thành công");
                        console.log(errors);
                    });
                }
            }
        }
    },
    watch: {
        Vcity(newValue) {
            console.log(newValue)
            var find  =  this.$store.state.city.find(items => items.name == newValue)
            this.cityId = find.id

        },
        Vdistrict (newValue) {
            console.log(newValue)
            var findDdistrict  =  this.$store.state.district.find(items => items.name == newValue)
            this.districtId = findDdistrict.id
        }
    },
    created() {
        if (this.getUser !== [] || this.getUser !== null || this.getUser !== undefined) {
            this.userName = this.getUser.username
            this.email =   this.getUser.email
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/CheckOut.scss";
</style>