<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Thống kê</h1>
        <div class="row">
            <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box"
                    @click="$router.push({ name: `AllOrder` })"
            >
                <v-card class="mx-auto" color="#e1ba4b" dark height="150">
                    <v-card-text class="text-h5 font-weight-bold">
                        <div>
                            Số Lượng Đơn Hàng Hiện Có

                        </div>
                        <div class="data">
                            {{ getDataAll }}
                            <i class="far fa-chart-bar"></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box"
                    @click="$router.push({ name: `complete` })"
            >
                <v-card class="mx-auto" color="#198753" dark height="150">
                    <v-card-text class="text-h5 font-weight-bold">
                        <div>
                            Số Lượng Đơn Hàng Đã Hoàn Thành

                        </div>
                        <div class="data">
                            {{ getOrderComplete }}
                            <i class="fas fa-check"></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box"
                    @click="$router.push({ name: `WaitForConfirmation` })"
            >
                <v-card class="mx-auto" color="#ffc10b" dark height="150">
                    <v-card-text class="text-h5 font-weight-bold">
                        <div>
                            Số Lượng Đơn Hàng Mới
                        </div>
                        <div class="data">
                            {{ getOrderNew }}
                            <i class="fas fa-bell"></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box">
                <v-card class="mx-auto" color="#26c6da" dark height="150">
                    <v-card-text
                            class="text-h5 font-weight-bold"
                            @click="$router.push({ name: `InTheImplementationProcess` })"
                    >
                        <div>
                            Số Lượng Đơn Đang Trong Quá Trình Thuê
                        </div>
                        <div class="data">
                            {{ getOrderInThue }}
                            <i class="fas fa-clock"></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box"
                    @click="$router.push({ name: `OrderBuy` })"
            >
                <v-card class="mx-auto" color="#6b84a3" dark height="150">
                    <v-card-text class="text-h5 font-weight-bold">
                        <div>
                            Số Lượng Đơn Hàng Mua
                        </div>
                        <div class="data">
                            {{ getOrderBuy }}
                            <i class="fas fa-cart-arrow-down "></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box"
                    @click="$router.push({ name: `OrderThue` })"
            >
                <v-card class="mx-auto" color="#6b84a3" dark height="150">
                    <v-card-text class="text-h5 font-weight-bold">
                        <div>
                            Số Lượng Đơn Hàng Thuê
                        </div>
                        <div class="data">
                            {{ getOrderThue }}
                            <i class="fas fa-cart-arrow-down "></i>
                        </div>

                    </v-card-text>
                </v-card>
            </div>
            <div
                    class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box"
                    @click="$router.push({ name: `OutOfDate` })"
            >
                <v-card class="mx-auto" color="#db3544" dark height="150">
                    <v-card-text class="text-h5 font-weight-bold">
                        <div>
                            Số Lượng Đơn Hàng Hết Hạn Thuê Chưa TRả
                        </div>
                        <div class="data">
                            {{ getOrderEndThue }}
                            <i class="fas fa-exclamation-triangle "></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box">
                <v-card class="mx-auto" color="red" dark height="150">
                    <v-card-text
                            class="text-h5 font-weight-bold"
                            @click="$router.push({ name: `getOrderRequestReturn` })"
                    >
                        <div>
                            Số Lượng Đơn Yêu Cầu Trả Hàng
                        </div>
                        <div class="data">
                            {{ getOrderReturn }}
                            <i class="fas fa-envelope"></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-6 item-box">
                <v-card class="mx-auto" color="red" dark height="150">
                    <v-card-text
                            class="text-h5 font-weight-bold"
                            @click="$router.push({ name: `getBeingTransported` })"
                    >
                        <div>
                            Đang Vận Chuyển
                        </div>
                        <div class="data">
                            {{ BeingTransported }}
                            <i class="fas fa-envelope"></i>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            getData() {
                return this.$store.state.order;
            },
            getDataAll() {
                return this.$store.state.order.length;
            },
            getOrderComplete() {
                return this.$store.state.order.filter(
                    (items) => items.status === "Hoàn Thành"
                ).length;
            },
            getOrderBuy() {
                return this.$store.state.order.filter(
                    (items) => items.statusRent !== "Xác Nhận Đơn Thuê"
                ).length;
            },
            getOrderNew() {
                return this.$store.state.order.filter(
                    (items) => items.status === "Chờ Xác Nhận"
                ).length;
            },
            getOrderThue() {
                return this.$store.state.order.filter(
                    (items) => items.statusRent === "Xác Nhận Đơn Thuê"
                ).length;
            },
            getOrderHetHan() {
                return this.$store.state.order.filter(
                    (items) => items.status === "Hết Hạn Thuê"
                ).length;
            },
            getOrderEndThue() {
                return this.$store.state.order.filter(
                    (items) => items.status === "Hết Hạn Thuê"
                ).length;
            },
            getOrderInThue() {
                return this.$store.state.order.filter(
                    (items) => items.status === "Đang Trong Quá Trình Thuê"
                ).length;
            },
            getOrderReturn() {
                return this.$store.state.order.filter(
                    (items) => items.status === "YÊU CẦU TRẢ HÀNG"
                ).length;
            },
            BeingTransported() {
                return this.$store.state.order.filter(
                    (items) => items.status === "Đang vận chuyển"
                ).length;
            },
        },
    };
</script>

<style scoped>
    .item-box {
        cursor: pointer;
    }

    .data {
        margin: 20px 10px 0;
        font-size: 30px;
    }

    .row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row: auto auto auto;
        grid-gap: 20px;
    }

    .item-box {
        width: 100%;
    }

    .mx-auto {
        position: relative;
        z-index: 1;

    }

    .mx-auto::before {
        content: "";
        width: 0%;
        height: 0px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: rgb(177, 177, 177);
        transition: width 0.5s linear;
    }

    .mx-auto:hover:before {
        width: 100%;
        height: 5px;
    }

    .data {
        display: flex;
        justify-content: space-between;
    }

    .dat__icon {
        font-size: 100px;
        opacity: 0.8;
    }
</style>
