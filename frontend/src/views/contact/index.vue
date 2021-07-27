<template>
    <div>
        <BaseBanner>
            <template v-slot:title>
                LIÊN HỆ – CONTACT
            </template>
        </BaseBanner>
        <div class="contact">
            <v-row class="wrap-item">
                 <v-col
                    cols="4"
                    sm="4"
                    class="contact-main-info"
                >
                    <v-card class="cart-item">
                        <div class="info-icon">
                            <img src="@/assets/phone.png" alt="">
                        </div>
                        <div class="contact-main-info-title">Hotline</div>
                        <div class="contact-main-info-text"><p>082.9093.933</p></div>
                    </v-card>
                </v-col>
                 <v-col
                    cols="4"
                    sm="4"
                    class="contact-main-info"
                >
                    <v-card class="cart-item">
                        <div class="info-icon">
                            <img src="@/assets/address.png" alt="">
                        </div>
                        <div class="contact-main-info-title">Hotline</div>
                        <div class="contact-main-info-text"><p> Office: số nhà 05 ngách 293/4 Tam Trinh, Hoàng Mai, Hà Nội.</p></div>
                    </v-card>
                </v-col>
                 <v-col
                    cols="4"
                    sm="4"
                    class="contact-main-info"
                >
                    <v-card class="cart-item">
                        <div class="info-icon">
                            <img src="@/assets/email.png" alt="">
                        </div>
                        <div class="contact-main-info-title">Hotline</div>
                        <div class="contact-main-info-text"><p>082.9093.933</p></div>
                    </v-card>
                </v-col>
            </v-row>
            
        </div>
        <v-container class="form-submit">
            <div class="title">
                GỬI TIN NHẮN CHO CHÚNG TÔI
            </div>
            <div class="form-group">
                <div class="wrap-input">
                    <v-text-field
                        label="Họ Tên"
                        outlined
                        v-model="userName"
                    ></v-text-field>
                  
                </div>
                <div class="wrap-input">
                    <v-text-field
                        label="Email của bạn"
                        outlined
                        v-model="email"
                    ></v-text-field>
                </div>
            </div>
             <div class="form-group">
                <div class="wrap-input">
                    <v-text-field
                        label="Số Điện Thoại"
                        outlined
                        v-model="phoneNumber"
                    ></v-text-field>
                  
                </div>
                <div class="wrap-input">
                    <v-text-field
                        label="Tiêu đề"
                        outlined
                        v-model="title"
                    ></v-text-field>
                </div>
            </div>
            <div class="full-width">
                <v-textarea
                outlined
                clearable
                clear-icon="mdi-close-circle"
                label="Nội Dung"
                v-model="decription"
                ></v-textarea>
            </div>
            <div class="wrap-button">
                <v-btn 
                class="button"
                @click="submitForm"
                >
                    Gửi đi
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
    import BaseBanner from '@/components/base/Banner.vue'
    import Service from '../../business/index'
    export default {
        data () {
            return{
              userName:'',
              email:'',
              phoneNumber:'',
              title:'',
              decription:''
            }
        },
        components: {
            BaseBanner,
        },
        methods: {
            submitForm() {
                var getForm = {
                    code_order : this.getCode,
                    userName: this.userName,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    address: this.address,
                    city: this.Vcity,
                    district: this.Vdistrict,
                    ward: this.Vward,
                    note: this.Vnote,
                    option: this.option
                }
                Service.addNewContact(getForm)
                    .then((response) => {
                        console.log(response.data);
                        alert("Cập nhật thành công");
                    })
                    .catch((errors) => {
                        alert("k Cập nhật thành công");
                        console.log(errors);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "@/scss/contact.scss";
</style>