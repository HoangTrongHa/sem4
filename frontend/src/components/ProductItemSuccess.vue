<template>
    <div class="wrap-table-products-item">
        <table class="table-products__item" style="margin-bottom: 5px"
            v-for="(items,index) of getDataOrder" :key="index"
        >
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th width="120px">Giá niêm yết</th>
                    <th>Biến thể</th>
                    <th>Thành tiền</th>
                </tr>
            </thead>
            <tbody v-for="(item,index) of items.item_cart" :key="index">                                                                                                                        <tr class="table-products__item-payment">
                <td class="infor-product">{{ item.name }}</td>
                <td class="infor-product">1</td>
                <td class="infor-product">289.000đ</td>
                <td class="infor-product">
                    Đen/L                                        
                </td>
                <td class="infor-product">289.000đ</td>
            </tr>                           
            </tbody>
        </table>
        <table class="table-product"
         v-for="(items,index) of getDataOrder" :key="index"
        >
            <tbody>
                <tr>
                    <td class="left">Mã Giảm Giá</td>
                    <td class="right"></td>
                </tr>
                <tr>
                    <td class="left">Tổng giá trị sản phẩm	</td>
                    <td class="right"> {{ items.total }} đ</td>
                </tr>
                <tr>
                    <td class="left">Phí giao hàng</td>
                    <td class="right">0</td>
                </tr>
            </tbody>
        </table>
        <div class="wrap-infor-order"
            v-for="(items,index) of getDataOrder" :key="index"
        >
            <div class="title">Thông tin khách hàng </div>
            <div class="wrap-infor">
            <div>Tên người nhận: {{ items.userName }}</div>
            <div>Email: {{ items.email }}</div>
            <div>Số điện thoại: {{ items.phoneNumber }}</div>
            <div>Hình thức thanh toán: Thanh toán khi nhận hàng {{ items.option }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        getDataOrder: []
    },
    methods: {
        test() {
            console.log(this.getDataOrder);
        }
    }
    
}
</script>

<style lang="scss" scoped>
.wrap-table-products-item {
    width: 100%;
    .table-products__item {
        width: 100%;
        margin: 50px 0;
    }
    .infor-product {
        text-align: center;
        padding: 10px 0;
    }
    .table-product {
        width: 100%;
        tbody {
            tr {
                .left {
                    font-style: italic;
                    background-color: #f2f2f2;
                    padding: 10px 15px;
                    text-align: left;
                }
                .right {
                    font-style: italic;
                    background-color: #f2f2f2;
                    padding: 10px 15px;
                    text-align: right;
                }
            }
        }

    }
    .wrap-infor-order {
        width: 100%;
        margin: 100px 0;
        .title {
            width: 100%;
            text-align: center;
        }
        .wrap-infor {
            div {
                padding: 15px 0;
                font-style: italic;
            }
        }
    }
}
</style>