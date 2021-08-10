<template>
    <v-container id="success_code">
            <div class="box">
                <div class="title">
                    <h3>Đặt Hàng Thành Công!</h3>
                    <span class="detail">Đơn hàng của bạn đã được gửi tới hệ thống, nhân viên chúng tôi đang xử lí đơn hàng này</span>
                </div>
                <hr>
                <div class="info-user">
                    <div class="name">Tên người nhận:<span class="info-content">Nghia</span></div>
                    <div class="name">Email:<span class="info-content">nghia@gmail.com</span></div>
                    <div class="name">Địa chỉ nhận hàng:<span class="info-content">Ha noi</span></div>
                    <div class="name">Phương thức thanh toán:<span class="info-content">Cod</span></div>
                </div>
                <hr>
                <div class="product">
                        <img src="http://yvanhien.com/wp-content/uploads/bfi_thumb/DSC1561-o6vcje8aeu7zm7cbrg8zv0lfracejlawsapdybpijw.jpg" alt="">
                        <div class="name">Áo dài nam năm thân cổ đứng </div>
                        <div class="qty">Số lượng: <div class="qty-number">1</div></div>
                        <div class="subtotal">Tạm tính: <div class="subtotal-price">$199.00</div></div>    
                </div>
                <hr>
                <div class="price">
                    <div class="price-content">
                        <div class="subtotal">Tạm tính: $199.00</div>
                        <div class="ship">Phí giao hàng: 0</div>
                        <div class="discount">Giảm giá: 0</div>
                    </div>
                </div>
                <hr>
                <div class="total">
                    <div class="total-content">Total: <div class="total-price">$199.00</div></div>
                </div>
                <hr>
                <div class="thank">
                    <div class="thank-title"> <i>Chúng tôi sẽ gửi cho bạn email xác nhận của đơn hàng. Hy vọng nhận được sự phản hồi của bạn sau khi nhận hàng.</i></div>
                    <div class="thank-content"><i>Thank you!</i></div>                  
                </div>
                <hr >
                <div class="right">Cổ Phục Việt Nam</div>
            </div>
        </v-container>
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
    @import "@/scss/checkout-success.scss";
</style>