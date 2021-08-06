<template>
    <v-container>
        <div class="title">
            Thông Tin tài Khoản
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
                    <li>
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
            <div class="infor-user">
                <div class="wrap-input">
                <v-text-field
                    label="Họ Tên"
                    outlined
                    v-model="username"
                ></v-text-field>
            </div>
            <div class="wrap-input">
                <v-text-field
                    label="Email"
                    outlined
                    v-model="email"
                    :disabled="disabled"
                ></v-text-field>
            </div>
            <div class="wrap-input">
                <v-text-field
                    label="Số Điện Thoại"
                    outlined
                    v-model="phoneNumber"
                ></v-text-field>
            </div>
            <div class="title">
                Giới Tính
            </div>
            <div class="wrap-input">
                <v-radio-group
                    v-model="male"
                    class="option"
                    row
                >
                    <div class="wrapRadio">
                        <v-radio
                            color="red"
                            value="Nam"
                            label="Nam"
                        >
                        </v-radio>
                    </div>
                    
                    <div class="wrapRadio">
                        <v-radio
                            color="red"
                            value="Nữ"
                            label="Nữ"
                        >
                        </v-radio>
                    </div>
                   
                    <div class="wrapRadio">
                        <v-radio
                            color="red"
                            value="Giới Tính Thứ Ba"
                            label="Giới Tính Thứ Ba"
                        >
                        </v-radio>
                    </div>
                    
                  
                </v-radio-group>
            </div>
            <div class="wrap-input">
                <div class="hight-input">
                    <div class="wrap-slide">
                        <v-slider
                            v-model="hight"
                            label="Chiều Cao"
                            thumb-color="orange darken-3"
                            thumb-label="always"
                            max="200"
                            min="50"
                        ></v-slider>
                    </div>
                    <div class="infor-hight">
                        {{ this.hight }} CM
                    </div>
                </div>
            </div>
            <div class="wrap-input">
                <div class="hight-input">
                    <div class="wrap-slide">
                        <v-slider
                            v-model="weight"
                            label="Cân Nặng"
                            thumb-color="orange darken-3"
                            thumb-label="always"
                            max="200"
                            min="40"
                        ></v-slider>
                    </div>
                    <div class="infor-hight">
                        {{ this.weight }} Kg
                    </div>
                </div>
            </div>
            </div>
            <div class="wrap-avatar">
                <div class="avatar">
                    <img 
                        v-if="this.img == '' || this.img == undefined || this.img == null" 
                        src="../../assets/avatar.jpg" 
                        @click="changeImg"
                    >
                    <img 
                        v-else 
                        :src="this.img" 
                        alt="" 
                        @click="changeImg"
                    >
                    <input
                        ref="uploader"
                        class="input"
                        type="file"
                        accept="image/*"
                        @change="onFileChange"
                    />
                </div>
            </div>
        </div>
        <div class="wrap-button">
                <v-btn
                    tile
                    class="button-to-store"
                    @click="updateInforUser"
                    :loading="clickedButton"
                    :disabled="clickedButton"
                >
                        Cập Nhật Thông Tin
                </v-btn>
            </div>
    </v-container>
</template>

<script>
import Vue from "vue";
import Service from '../../business/index'

import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
 Vue.use( Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });
export default {
    components: {
        Service
    },
    data() {
        return {
            disabled: true,
            username:'',
            email:'',
            phoneNumber:'',
            male:'',
            hight:'',
            weight:'',
            img:'',
            imager:  null,
            clickedButton: false
        }
    },
    computed: {
        getUser() {
            return this.$store.state.user
        }
    },
    methods: {
        changeImg() {
            this.$refs.uploader.click();
        },
        updateInforUser() {
            this.clickedButton = true
            var value = {
                username: this.username,
                email: this.email,
                phoneNumber: this.phoneNumber,
                male: this.male,
                hight: this.hight,
                weight: this.weight,
                img: this.img,
            }
            let getCart = JSON.parse(localStorage.getItem('user')) || [];
            let idUser = getCart.id
            Service.editUser(idUser,value).then(( response ) => {
                console.log(response);
            })

            // this.$store.dispatch('updateUser', value);
            // localStorage.removeItem("user")
            // localStorage.setItem("user",JSON.stringify(value))
            // var test = this
            // setTimeout(function() {
            //     test.$toast.success(`Cập Nhật Thông Tin Thành Công`);
            //     test.clickedButton = false
            // }, 2000);
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
                this.imager = files[0];
            let imgName = files[0].name;
            if (imgName.lastIndexOf(".") <= 0) {
                return;
            }
            const fr = new FileReader();
            fr.readAsDataURL(files[0]);
            fr.addEventListener("load", () => {
                this.img = fr.result;
            });
        },
        logout() {
            var value = []
            var token = ''
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            this.$store.dispatch('updateUser', value);
            this.$store.dispatch('updateToken', token);
            this.$toast.success(`Chào tạm biệt. Hãy quay lại với chúng tôi nhé😍`);
            this.$router.push({name: 'Login'})
        }
    },
    created() {
            var user = JSON.parse(localStorage.getItem('user')) || [];
            console.log
            this.username = user.username
            this.email = user.email
            this.phoneNumber = user.phoneNumber
            this.male = user.male
            this.hight = user.hight
            this.weight = user.weight
            this.img = user.img
        }

}
</script>

<style lang="scss" scoped>
    @import "@/scss/user.scss";
</style>