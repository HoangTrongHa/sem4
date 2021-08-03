<template>
<v-container class="login">
    <div class="wrap-login">
    <validation-observer
        ref="observer"
        
    >
        <form @submit.prevent="submit">
        <validation-provider
            v-slot="{ errors }"
            name="userName"
            rules="required"
        >
            <v-text-field
            v-model="userName"
            outlined
            :error-messages="errors"
            label="Tên đăng nhập"
            required
            ></v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required"
        >
            <v-text-field
                v-model="password"
                :error-messages="errors"
                label="Mật Khẩu"
                outlined
                required
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
            ></v-text-field>
        </validation-provider>
        <div class="wrap-button">
            <v-btn
                class="mr-4 button"
                type="submit"
                :loading="loading"
                :disabled="loading"
                @click="submit()"
            >
            Đăng Nhập
            </v-btn>
        </div>
        <div class="wrap-title-register">
            <div>
                Bạn chưa có Tài khoản? Vui lòng đăng ký Tài khoản mới 
            </div>
            <div 
            class="register-link"
            @click="$router.push({name: `Register`})"
            >
                tại đây .
            </div>
        </div>
        </form>
        </validation-observer>
    </div>
</v-container>
</template>

<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import Service from '../../business/index'
  import Vue from "vue";
  import Toast from "vue-toastification";
  import "vue-toastification/dist/index.css";
  import router from "@/router/index"
  Vue.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });
  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} Không Được Bỏ Trống',
  })

  extend('max', {
    ...max,
    message: '{_field_} Không được quá {length} ký tự',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email Không Đúng',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      userName: '',
      password:'',
      showPassword:false,
      disabledButton:true,
      loading: false
    }),

    methods: {
      submit () {
      this.loading = true
        var value = {
          email : this.userName,
          password : this.password
        }
        Service.login(value)
        .then((response) => {
          localStorage.setItem("user",JSON.stringify(response.data))
          var getToken = JSON.parse(localStorage.getItem('user')) || []; 
          localStorage.setItem("token",JSON.stringify(getToken.accessToken))
          router.push({ name: "Home"})
          this.$store.dispatch('getToken');
          this.$store.dispatch('getUser');
          this.$toast.success(`Xin Chào ${this.userName}`);
        })
        .catch(error => {
          this.loading = false;
            if (error.response.status == 401) {
              this.$toast.error("Sai Tài Khoản Mật Khẩu, Hãy Kiểm Tra Lại");
            } else {
              this.errors.push("Something went wrong, please refresh and try again.");
            }
        });
      }
    },
  }
</script>

<style scoped lang="scss">
    .login {
        @media (min-width: 1904px){
            max-width: 1200px;
        }
        margin: 100px auto 0;
        .wrap-login {
            width: 60%;
            margin: 0 auto;
            .wrap-button {
                width: 100%;
                display: flex;
                justify-content: center;
                .button {
                    color: #fff;
                    background: #fa6400;
                }
            }
            .wrap-title-register {
                margin: 50px 0;
                display: flex;
                width: 100%;
                justify-content: center;
                .register-link {
                    cursor: pointer;
                    margin: 0 0 0 10px;
                    color: #fa6400;
                }
            }
        }  
    }
</style>