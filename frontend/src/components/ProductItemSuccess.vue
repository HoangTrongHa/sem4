<template>
    <v-container id="success_code">
        <div class="box">
            <div class="title">
                <h3>Đặt Hàng Thành Công!</h3>
                <span class="detail"
                >Đơn hàng của bạn đã được gửi tới hệ thống, nhân viên chúng tôi đang
          xử lí đơn hàng này</span
                >
            </div>
            <hr/>
            <div class="info-user">
                <div class="name">
                    Tên người nhận:<span class="info-content">{{
            getDataOrder.userName
          }}</span>
                </div>
                <div class="name">
                    Email:<span class="info-content">{{ getDataOrder.email }}</span>
                </div>
                <div class="name">
                    Địa chỉ nhận hàng:<span class="info-content"
                >{{ getDataOrder.address }}/{{ getDataOrder.ward }}/{{ getDataOrder.district }}/{{ getDataOrder.city }}</span
                >
                </div>
                <div class="name">
                    Phương thức thanh toán:<span class="info-content">{{
            getDataOrder.option
          }}</span>
                </div>
            </div>
            <hr/>
            <span class="nameOrder">Đơn Mua</span>
            <div v-for="(items, index) of getDataCart.buy" :key="index">
                <div class="product">
                    <img
                            :src="items.img"
                            alt=""
                    />
                    <div class="name">{{ items.name }}</div>
                    <div class="qty">
                        Số lượng:
                        <span class="qty-number">{{ items.qtyCus }}</span>
                    </div>
                </div>
                <hr/>
                <span class="nameOrder">Đơn Thuê</span>
                <div v-for="(items, index) of getDataCart.thue" :key="index">
                    <div class="product">
                        <img
                                :src="items.img"
                                alt=""
                        />
                        <div class="name">{{ items.name }}</div>
                        <div class="qty">
                            Số lượng:
                            <span class="qty-number">{{ items.qtyCus }}</span>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="price">
                    <div class="price-content">
                        <div class="subtotal">
                            Tổng thanh toán
                            <span class="total-price"> {{ calcSum }} VNĐ</span>
                        </div>
                        <div class="ship">Phí giao hàng: 0</div>
                        <div class="discount">Giảm giá: 0</div>
                    </div>
                </div>
                <hr/>
            </div>
            <hr/>
            <div class="thank">
                <div class="thank-title">
                    <i
                    >Chúng tôi sẽ gửi cho bạn email xác nhận của đơn hàng. Hy vọng nhận
                        được sự phản hồi của bạn sau khi nhận hàng.</i
                    >
                </div>
                <div class="thank-content"><i>Thank you!</i></div>
            </div>
            <hr/>
            <div class="right">Cổ Phục Việt Nam</div>
        </div>
    </v-container>
</template>

<script>
    export default {
        computed: {
            getCode() {
                return this.$route.params.code_order;
            },
            getDataOrder() {
                return this.$store.state.order.find(
                    (items) => items.code_order === this.$route.params.code_order
                );
            },
            getDataCart() {
                return JSON.parse(this.getDataOrder.item_cart);
            },
            calcBuy() {
                let total = 0;
                this.getDataCart.buy.forEach((item) => {
                    total += item.price * item.qtyCus;
                });
                return total;
            },
            calcThue() {
                let total = 0;
                this.getDataCart.thue.forEach((item) => {
                    total += item.price * item.qtyCus;
                });
                return total;
            },
            calcSum() {
                return this.calcBuy + this.calcThue;
            },
        },
        methods: {},
        created() {
            console.log(this.getDataCart);
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/scss/checkout-success.scss";
</style>
