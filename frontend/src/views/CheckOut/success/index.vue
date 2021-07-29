<template>
    <div>
        <v-container id="success_code">
            <div class="title_success_code">
               ĐẶT HÀNG THÀNH CÔNG!
            </div>
            <div class="dicription">
                Trên thị trường có quá nhiều sự lựa chọn, cảm ơn bạn đã lựa chọn mua sắm tại Ối zời ơi <br>

                Đơn hàng của bạn CHẮC CHẮN đã được chuyển tới hệ thống xử lý đơn hàng của Ối zời Ơi.<br>
                Trong quá trình xử lý Ối zời Ơi sẽ liên hệ lại nếu như cần thêm thông tin từ bạn.<br>
                Ngoài ra Ối zời Ơi cũng sẽ có gửi xác nhận đơn hàng bằng Email và tin nhắn<br>

                Do ảnh hưởng dịch bệnh, đơn hàng của bạn có thể được giao chậm hơn bình thường. Ối zời Ơi sẽ cố gắng hết sức, bạn chờ Ối zời Ơi nha.<br>

                Tham gia cộng đồng Mặc Đẹp Sống Chất cùng Ối zời ơi
            </div>
            <div class="wrap-infor-order">
                <div class="title">
                    Dưới đây là thông tin đơn hàng <span>#{{ getCode  }}</span> của bạn - 21:38 29-07-2021:
                </div>
            </div>
            <div class="wrap-product-item">
                <ProductItemSuccess />
            </div>
        </v-container>
    </div>
</template>

<script>
import ProductItemSuccess from '@/components/ProductItemSuccess.vue'

export default {
    components: {
        ProductItemSuccess
    },
    data () {
        return {
            dataOrder:[]
        }
    },
    computed: {
        getCode() {
            return this.$route.params.code_order;
        },
        getDataOrder() {
            return this.$store.state.order.filter(items => items.code_order === this.$route.params.code_order)
        }
    }
}
</script>

<style scoped lang="scss">
#success_code {
    @media (min-width: 1904px){
        max-width: 1200px;
    }
    .title_success_code {
        text-align: center;
        font-size: 40px;
        font-weight: bolder;
    }
    .dicription {
        margin: 50px 0 0 0;
        text-align: center;
        font-size: 18px;
        line-height: 50px;
    }
    .wrap-infor-order {
        width: 100%;
        text-align: center;
    }
}
</style>
