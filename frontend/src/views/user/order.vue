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
                            <div v-if="items.status == `Đơn Hàng Bị Hủy`" class="status error">
                                {{ items.status }}
                            </div>
                            <div v-if="items.status == `Chờ Vận Chuyển`" class="status success">
                                {{ items.status }}
                            </div>
                            <div v-if="items.status == `Đang Vận Chuyển`" class="status success">
                                {{ items.status }}
                            </div>
                            <div v-if="items.status == `Không Nhận Hàng`" class="status error">
                                {{ items.status }}
                            </div>
                            <div v-if="items.status == `Đang Trong Quá Trình Thuê`" class="status success">
                                {{ items.status }}
                            </div>
                            <div v-if="items.status == `Đã Tới Điểm Giao`" class="status button">
                                <div class="wrap-button-user-option">
                                    <v-btn 
                                        :loading="loading"
                                        color="success"
                                        @click="updateStatusOrder(items.id)">
                                        Xác Nhận Đơn Hàng
                                    </v-btn>
                                </div>
                                <div class="wrap-button-user-option">
                                    <v-btn 
                                        :loading="loading"
                                        color="error"
                                        @click="updateStatusOrderNot(items)">
                                            Không Nhận Hàng
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NotDeliveryComponents 
                        :dialog="dialog"
                        @update-dialog="updateCart"
                        :dataNotDeli="dataNotDeli"

                    />
                    <div class="wrap-footer">
                        <div class="wrap-title">
                            <div class="title">
                                Tổng Giá Trị Đơn Hàng:
                            </div>
                            <div class="total-price">
                                <!-- {{ items.total }}đ -->
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
import Service from '../../business/index'
import NotDeliveryComponents from '../../components/NotDeliveryComponents.vue'
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
            email:'',
            loading: false,
            dialog: false,
            dataNotDeli: {}
        }
    },
    components: {
        NotDeliveryComponents
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
        },
        updateStatusOrder(id) {
            this.loading = true
            var dataOrder = this.$store.state.order.find(item => item.id === id)
            console.log(dataOrder);
            var dataProduct = JSON.parse(dataOrder.item_cart) 
            console.log(dataProduct);
            if (dataProduct.thue.length === 0 ) {
                dataOrder.status = 'Đã Nhận Hàng'
                Service.editOrder(id,dataOrder).then((response) => {
                    console.log(response.data);
                })
            } else {
                dataOrder.status = 'Đang Trong Quá Trình Thuê'
                Service.editOrder(id,dataOrder).then((response) => {
                    console.log(response.data);
                })
            }
            this.$toast.success(`Cập Nhật Thành Công`);

            this.loading = false
        },
        updateStatusOrderNot(data) {
            this.dialog = true
            this.dataNotDeli = data
            console.log(this.dataNotDeli);
        },
        updateCart(e) {
            this.dataNotDeli = null
            this.dialog = e;
            console.log(this.dataNotDeli);

        },
    },
    created() {
        this.email = (JSON.parse(localStorage.getItem('user')) || []).email;
        console.log(this.email);
    }

}
</script>

<style lang="scss" scoped>
    @import "@/scss/user.scss";
</style>