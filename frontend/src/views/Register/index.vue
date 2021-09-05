<template>
    <div id="register">
        <v-container>
            <div class="title">Đăng Ký Tài Khoản</div>
            <div class="wrap-form">
                <div class="wrap-input">
                    <validation-observer ref="observer" v-slot="{ invalid }">
                        <validation-provider
                                v-slot="{ errors }"
                                name="username"
                                rules="required|max:20"
                        >
                            <v-text-field
                                    class="username"
                                    v-model="username"
                                    outlined
                                    :error-messages="errors"
                                    label="Họ Tên Của Bạn"
                                    required
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                                v-slot="{ errors }"
                                name="phoneNumber"
                                rules="required|max:10"
                        >
                            <v-text-field
                                    class="phonenumber"
                                    v-model="phoneNumber"
                                    outlined
                                    :error-messages="errors"
                                    label="Số Điện Thoại Của Bạn"
                                    required
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                                v-slot="{ errors }"
                                name="email"
                                rules="required|email"
                        >
                            <v-text-field
                                    class="email"
                                    v-model="email"
                                    outlined
                                    :error-messages="errors"
                                    label="Địa chỉ Email Của Bạn"
                                    required
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                                class="passInput"
                                v-slot="{ errors }"
                                name="password"
                                rules="required"
                        >
                            <v-text-field
                                    class="passReInput"
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
                        <validation-provider
                                v-slot="{ errors }"
                                name="confirmPassword"
                                rules="required"
                        >
                            <v-text-field
                                    v-model="confirmPassword"
                                    :error-messages="errors"
                                    label="Nhập Lại Mật Khẩu"
                                    outlined
                                    required
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword = !showPassword"
                                    filled
                                    :error="invalid && validated"
                                    :error-message="errors[0]"
                            ></v-text-field>
                        </validation-provider>
                    </validation-observer>
                </div>
            </div>
            <div class="wrapButton">
                <v-btn
                        class="mr-4 button"
                        :loading="loading"
                        :disabled="loading"
                        @click="submit()"
                >
                    Đăng Ký
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
    import {ValidationObserver, ValidationProvider} from "vee-validate";
    import Service from "../../business/index";

    export default {
        components: {
            ValidationProvider,
            ValidationObserver,
            Service,
        },

        data: () => ({
            username: "",
            phoneNumber: "",
            email: "",
            password: "",
            showPassword: false,
            disabledButton: true,
            loading: false,
        }),
        methods: {
            submit() {
                this.loading = true;
                var value = {
                    username: this.username,
                    phoneNumber: this.phoneNumber,
                    email: this.email,
                    password: this.password,
                };
                Service.register(value).then((response) => {
                    console.log(response);
                    this.$router.push({name: "Login"});
                    this.$toast.success(`Đăng Ký Thành Công`);
                });
                this.loading = false;
            },
        },
    };
</script>

<style lang="scss" scoped>
    #register {
        .title {
            font-size: 32px;
            text-align: center;
        }

        .wrap-form {
            width: 50%;
            margin: 0 auto;
        }

        .wrapButton {
            width: 50%;
            margin: 0 auto;

            .button {
                color: white;
                background-color: #fa6400;
            }
        }


    }
</style>
