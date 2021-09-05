<template>
    <div class="body-container">
        <div class="container">
            <div class="container-fluid px-4">
                <h1 class="mt-4" style="display:flex;justify-content:center;margin-bottom:30px ">Chi Tiết Đơn Hàng</h1>
                <v-row style="justify-content:center">
                    <div class="order-detail">
                        <div class="info-detail">
                            <div class="user-info">
                                <h3>Thông tin khách hàng</h3>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Tên người đặt hàng</div>
                                    <div class="data">{{ dataOrder.user_register }}</div>
                                </div>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Tên người nhận hàng</div>
                                    <div class="data">{{ dataOrder.userName }}</div>
                                </div>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Số điện thoại</div>
                                    <div class="data">{{ dataOrder.phoneNumber }}</div>
                                </div>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Email</div>
                                    <div class="data">{{ dataOrder.email }}</div>
                                </div>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Địa chỉ nhận hàng</div>
                                    <div class="data">
                                        {{ dataOrder.address }}/{{ dataOrder.ward }}/{{ dataOrder.city }}/ {{
                                        dataOrder.district }}
                                    </div>
                                </div>
                            </div>

                            <div class="order-info">
                                <h3>Thông Tin Đơn Hàng</h3>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Mã đơn hàng</div>
                                    <div class="data">#{{ dataOrder.code_order }}</div>
                                </div>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Thời gian đặt hàng</div>
                                    <div class="data">{{ dataOrder.create_at }}</div>
                                </div>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Hình thức thanh toán</div>
                                    <div class="data">{{ dataOrder.option }}</div>
                                </div>
                                <div class="order-detail-item">
                                    <div class="order-detail-item-title">Ghi chú của khách hàng</div>
                                    <div class="data">{{ dataOrder.note }}</div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="product">
                            <div class="wrapByItem">
                                <div class="title">Danh sách Đơn Hàng Mua</div>
                                <div class="wrapItemGroup" v-if="dataItemCart.buy.length == 0">
                                    Không có đơn hàng 
                                </div>
                                <div class="wrapItemGroup" v-else>
                                    <div>
                                        <table class="table mb-0" v-for="(items,index) of dataItemCart.buy"
                                               :key="index">
                                            <thead>
                                            <tr class="text-muted">
                                                <th scope="col"></th>
                                                <th scope="col">Tên Sản Phẩm</th>
                                                <th scope="col">Kích cỡ</th>
                                                <th scope="col" class="text-right">Số Lượng</th>
                                                <th scope="col" class="text-right">Giá Tiền</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div class="active-project d-flex align-items-center mt-0 ">

                                                        <div class="h-avatar is-medium">
                                                            <img
                                                                    class="avatar rounded"
                                                                    :src="items.img"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span class="font-weight-bold" style="margin-left:auto;">{{ items.name }}</span>
                                                </td>
                                                <td class="text-right">
                                                    {{ items.size }}
                                                </td>
                                                <td class="text-right">
                                                    {{ items.qtyCus }}
                                                </td>
                                                <td class="text-right">
                                                    {{ items.price }}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div class="wrapTotalBy">
                                            <div class="title">Tổng tiền đơn mua:</div>
                                            <div class="value">{{ calcBuy }} VNĐ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                           <div class="wrapThueItem">
                                <div class="title">Danh sách Đơn Hàng Thue</div>
                                <div class="wrapItemGroup" v-if="dataItemCart.thue.length == 0">
                                    Không có đơn hàng 
                                </div>
                                <div class="wrapItemGroup" v-else>
                                    <div>
                                        <table class="table mb-0" v-for="(items,index) of dataItemCart.thue"
                                               :key="index">
                                            <thead>
                                            <tr class="text-muted">
                                                <th scope="col"></th>
                                                <th scope="col">Tên Sản Phẩm</th>
                                                <th scope="col">Kích cỡ</th>
                                                <th scope="col" class="text-right">Số Lượng</th>
                                                <th scope="col" class="text-right">Giá Tiền</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div class="active-project d-flex align-items-center mt-0 ">

                                                        <div class="h-avatar is-medium">
                                                            <img
                                                                    class="avatar rounded"
                                                                    :src="items.img"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span class="font-weight-bold" style="margin-left:auto;">{{ items.name }}</span>
                                                </td>
                                                <td class="text-right">
                                                    {{ items.size }}
                                                </td>
                                                <td class="text-right">
                                                    {{ items.qtyCus }}
                                                </td>
                                                <td class="text-right">
                                                    {{ items.price }}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div class="wrapTotalBy">
                                            <div class="title">Tổng tiền đơn mua:</div>
                                            <div class="value">{{ calcBuy }} VNĐ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-row>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                getOrder: []
            }
        },
        computed: {
            dataOrder() {
                return this.$store.state.order.find(items => items.code_order === this.$route.params.code_order)
            },
            dataItemCart() {
                return JSON.parse(this.getOrder.item_cart)
            },
            dataBuy() {
                return this.getOrder.buy
            },
            dataThue() {
                return this.getOrder.thue
            },
            calcBuy() {
                let total = 0;
                this.dataItemCart.buy.forEach((item) => {
                    total += item.price * item.qtyCus;
                });
                return total;
            },
        },
        mounted() {
            this.$store.dispatch('getAllOrder');
            this.getOrder = this.$store.state.order.find(items => items.code_order === this.$route.params.code_order)
            if (this.getOrder === undefined) {
                this.$router.push({name: 'OrderInfor'})
            }
        },
        // created() {
        //     window.addEventListener('beforeunload', function(event) {
        //       console.log(event);
        //     })
        //   },
    };
</script>

<style lang="scss" scoped>
    .body-container {
        width: 100%;
        padding-bottom: 50px;
        background: #f8f8f8;

        .container {
            box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
            background: #fefefe;
            padding-bottom: 40px;
            @media (min-width: 1904px) {
                max-width: 1200px;
            }

            .contaner-fluid {
                width: 100%;
                padding-right: var(--bs-gutter-x, 0.75rem);
                padding-left: var(--bs-gutter-x, 0.75rem);
                margin-right: auto;
                margin-left: auto;

                h1 .mt-4 {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 30px;
                }
            }

            .order-detail {
                width: 100%;
                display: flex;
                flex-wrap: wrap;

                justify-content: center;

                .info-detail {
                    width: 100%;
                    line-height: 50px;
                    display: flex;
                    flex-wrap: wrap;

                    .order-info,
                    .user-info {
                        width: 49%;
                        margin-right: 10px;
                        display: flex;

                        flex-direction: column;

                        h3 {
                            width: 100%;
                        }

                        .order-detail-item {
                            display: flex;
                            justify-content: space-between;

                            .order-detail-item-title {
                                width: max-content;
                                color: gray;
                            }

                            .data {
                                width: 60%;
                                font-weight: bold;
                            }

                            .status {
                                width: 50%;
                                height: min-content;
                            }
                        }
                    }
                }

                .product {
                    width: 100%;

                    .status {
                        float: right;
                        width: 20%;
                        height: min-content;
                        padding: 10px;
                        border: 1px solid #ddd;
                        font-weight: bolder;
                        background: #ddd;
                        text-align: center;
                        border-radius: 10px;
                        margin-left: 10px;
                    }

                    .table {
                        width: 100%;

                        thead {
                            tr {
                                .endDay {
                                    text-align: center !important;
                                }
                            }
                        }

                        tbody {
                            tr {
                                td {

                                    .active-project {
                                        .h-avatar {
                                            margin: 0 10px 0 0;

                                            .avatar {
                                                height: 70px;
                                                width: 70px;
                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }

                    .wrapTotalBy {
                        display: flex;
                        width: 100%;
                        justify-content: flex-end;
                        align-items: center;

                        .value {
                            font-size: 32px;
                            font-weight: bolder;
                            margin: 0 0 0 20px;
                            color: #d0221d;
                        }
                    }

                    .button {
                        color: #fff;
                    }
                }
            }
        }
    }


</style>
