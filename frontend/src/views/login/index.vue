<template>
    <v-container id="login">
        <div class="wrap-login">
            <div class="wrap-title">
                <div class="title">Đăng Nhập</div>
                <div>Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng "Lấy mật khẩu" để có thể truy cập vào tài khoản bằng email nhé.</div>
            </div>
            <div class="wrap-input">
                <v-text-field
                    label="Email của bạn"
                    outlined
                    v-model="email"
                ></v-text-field>
                  
            </div>
            <div class="wrap-input">
                <v-text-field
                    label="Mật Khẩu Của Bạn"
                    outlined
                    v-model="passwrod"
                ></v-text-field>
            </div>
             <div class="full-width">
                <v-btn
                    class="button-submit"
                    :loading="loading"
                    :disabled="loading"
                    height="50"
                    @click="submitForm"
                >
                    <div class="title-button">Đặt Hàng </div>
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            loading:false,
            email:'',
            password:''
        }
    },
    methods: {
        submitForm() {
            this.loading = true
        }
    }
}
</script>

<style scoped lang="scss">
.wrap-login {
    width: 30%;
    margin: 0 auto;
    text-align: center;
    .wrap-title {
        margin: 50px 0;
        .title {
            font-size: 32px !important;
            font-weight: bold;
            margin: 20px 0;
        }
    }
    .full-width {
            .button-submit {
                width: 100% !important;
                background: #fa6400;
                color: white;
            }
        }
}
</style>