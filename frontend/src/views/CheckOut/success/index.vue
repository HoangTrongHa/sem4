<template>
    <div>
        <v-container id="success_code">
            <div class="title_success_code">
               ĐẶT HÀNG THÀNH CÔNG!
            </div>
            <div class="dicription">
                Trên thị trường có quá nhiều sự lựa chọn, cảm ơn bạn đã lựa chọn mua sắm tại CTY CPVN <br>

                Đơn hàng của bạn CHẮC CHẮN đã được chuyển tới hệ thống xử lý đơn hàng của chúng tôi<br>
                Trong quá trình xử lý chũng tôi sẽ liên hệ lại nếu như cần thêm thông tin từ bạn.<br>
                Ngoài ra chúng tôi cũng sẽ có gửi xác nhận đơn hàng bằng Email và tin nhắn<br>

                Do ảnh hưởng dịch bệnh, đơn hàng của bạn có thể được giao chậm hơn bình thường. Chúng tôi sẽ cố gắng hết sức, bạn chờ CPVN nha.<br>

            </div>
            <div class="wrap-infor-order">
                <div class="title">
                    Dưới đây là thông tin đơn hàng <span>#{{ getCode  }}</span> của bạn - 21:38 29-07-2021:
                </div>
            </div>
            <div class="wrap-product-item">
                <ProductItemSuccess 
                    :getDataOrder="getDataOrder"
                />
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
        text-align: start;
        font-size: 18px;
        line-height: 50px;
    }
    .wrap-infor-order {
        width: 100%;
        text-align: center;
    }
}
</style>
