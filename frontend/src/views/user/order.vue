<template>
    <v-container>
        <div class="title">
            {{ `DANH SÁCH ĐƠN HÀNG (${getOrder.length} ĐƠN HÀNG)` }}
        </div>

        <div class="wrap-form">
            <div class="wrap-nav-bar">
                <ul>
                    <li
                    :class="'UserInfor' === $route.name ? 'active' :''"
                    >
                        <div class="title">
                            <icon class="map-user-tie" name="user-tie" size="20px"/>
                            <div @click="$router.push({
                                name:`UserInfor`
                            })">
                            Thông Tin Cá Nhân
                            </div>
                        </div>
                    </li>
                    <li
                        :class="'OrderInfor' === $route.name ? 'active' :''"
                    >
                        <div class="title">
                            <icon class="map-list-alt" name="list-alt" size="20px"/>
                            <div @click="$router.push({
                                name:`OrderInfor`
                            })">                                         
                                Danh Sách Đơn Hàng
                            </div>
                        </div>
                    </li>
                    <li @click="logout">
                        <div class="title">
                            <icon class="map-sign-out-alt" name="sign-out-alt" size="20px"/>
                            <div>
                                Thoát
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="wrap-infor-order">
                <div class="wrap-order" v-for="(items,index) of getOrder" :key="index">
                    <div class="wrap-title">
                        <div class="wrap-left">
                            <div class="title-code">
                                #{{ items.code_order }}
                            </div>
                            <div class="create-at">
                                {{ items.create_at }}
                            </div>
                        </div>
                        <div class="wrap-right">
                            <div v-if="items.status == `Chờ Xác Nhận`" class="status warning">
                                {{ items.status }}
                            </div>
                        </div>
                    </div>
                    <div class="wrap-content" v-for="(product,i) of items.item_cart" :key="i">
                        <div class="wrap-img">
                            <img :src="product.img">
                        </div>
                        <div class="wrap-infor-product">
                            <div class="name-product">
                                {{ product.name }}
                            </div>
                             <div class="qty-product">
                               X {{ product.qtyCus }}
                            </div>
                            <div class="size-product">
                                {{ product.size.size }}
                            </div>
                        </div>
                    </div>
                    <div class="wrap-footer">
                        <div class="wrap-title">
                            <div class="title">
                                Tổng Giá Trị Đơn Hàng:
                            </div>
                            <div class="total-price">
                                  {{ items.total }}đ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import Vue from "vue";

import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
 Vue.use( Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });
export default {
    data() {
        return {
            email:''
        }
    },
    computed: {
        getOrder() {
            return this.$store.state.order.filter(item => item.email == this.email)
        }
    },
    methods: {
        logout() {
            var value = []
            var token = ''
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            this.$store.dispatch('updateUser', value);
            this.$store.dispatch('updateToken', token);
            this.$toast.success(`Chào tạm biệt. Hãy quay lại với chúng tôi nhé😍`);
            this.$router.push({name: 'Login'})
        }
    },
    created() {
            this.email = (JSON.parse(localStorage.getItem('user')) || []).email;
        }

}
</script>

<style lang="scss" scoped>
    @import "@/scss/user.scss";
</style>