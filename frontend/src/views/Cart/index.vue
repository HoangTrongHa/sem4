<template>
<div class="wrap-cart">
    <BaseBanner>
        <template v-slot:title>
            Giỏ Hàng
        </template>
    </BaseBanner>
    <v-container id="cart">
        <div class="content-wrap">
            <div class="content-area">
                <div class="woocommerce">
                    <table class="woocommerce-cart-form__contents" 
                        v-if="countCart > 0"
                    >
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
                            v-for="(item, index) of this.cart" :key="index"
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
                                    <img :src="item.img"/>					
                                </td>
                                <td class="product-name" data-title="Sản phẩm">
                                    {{ item.name }}		
                                </td>
                                <td class="product-price" data-title="Giá">
                                    {{ item.price }}đ						
                                </td>
                                <td class="product-quantity"> 
                                    <div class="wrap-product-quantity">
                                        <div class="button-option">
                                            -
                                        </div>
                                        <div class="content">
                                            {{ item.qtyCus }}
                                        </div>
                                        <div class="button-option" @click="Demo(index)">
                                            +
                                        </div>
                                    </div>
                                </td>
                                <td class="product-subtotal" data-title="Tạm tính">
                                <span class="woocommerce-Price-amount amount"><bdi>250.000<span class="woocommerce-Price-currencySymbol">₫</span></bdi></span>						</td>
                                </tr>
                        </tbody>
                    </table>
                    <div v-else>
                    <div class="wrapper-not-item">
                            Chưa có sản phẩm nào trong giỏ hàng.
                    </div>
                    <div class="wrapper-not-item-button">
                        <v-btn
                            tile
                            class="button-to-store"
                        >
                            <icon class="map-icon" name="arrow-circle-left" size="15px"/>
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
                                :disabled="disabled" 
                            >
                                Cập Nhật Giỏ Hàng
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap-total-cart">
                <div class="title">Cộng Giỏ Hàng</div>
                    <table class="total-cart">
                        <tbody>
                            <tr class="cart-subtotal">
                                <th class="title-subtotal">Tạm tính</th>
                                <td class="money">{{ calcSum | currency }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="wrap-button">
                <v-btn
                    tile
                    class="button-to-store"
                    @click="$router.push({name: `CheckOut`})"
                >
                        Tiền Hành Thanh Toán
                        <icon class="map-icon" name="arrow-alt-circle-right" size="15px"/>
                </v-btn>
            </div>
    </v-container> 
</div>   
</template>

<script>
import Vue from "vue";
import Vue2Filters from 'vue2-filters'

import BaseBanner from '@/components/base/Banner.vue'

Vue.use(Vue2Filters);
export default {
    components: {
        BaseBanner
    },
    data() {
        return {
            cart: [],
            disabled: true,
            discount: ''
        }
    },
    computed: {
        countCart() {
            return this.cart.length
        },
        calcSum(){
            let total = 0;
            this.cart.forEach((item) => {
                total += item.price * item.qtyCus;
            });
            return total;
        }
    },
    methods: {
        removeItemInCart(cartId) {
            let found = this.cart.filter(items => items.id !== cartId)
            localStorage.removeItem("Cart")
            localStorage.setItem("Cart",JSON.stringify(found))
        },
    },
    created(){
        this.cart = JSON.parse(localStorage.getItem('Cart')) || [];
        console.log(this.cart);
    }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/cart.scss";
</style>