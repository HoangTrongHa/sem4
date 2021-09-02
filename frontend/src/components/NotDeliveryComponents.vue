<template>
    <v-row justify="center">
        <v-dialog :value="dialog" max-width="1000" @input="updateDialog">
            <v-card>
                <v-card-title class="text-h5">
                    Không Nhận Đơn Hàng
                </v-card-title>

                <v-card-text>
                    <v-textarea
                            clearable
                            v-model="v_note"
                            clear-icon="mdi-close-circle"
                            label="Bạn Có Chắc Chắn Muốn Không. Hãy CHo Chúng Tôi Biết Lý Do Tại Sao"
                            value="This is clearable text."
                    ></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="close"
                    >
                        Đóng
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="sendNote"
                    >
                        Gửi
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import Vue from "vue";
    import Service from '../business'
    import "vue-toastification/dist/index.css";
    import Toast from "vue-toastification";

    Vue.use(Toast, {
        transition: "Vue-Toastification__bounce",
        maxToasts: 20,
        newestOnTop: true
    });

    export default {
        components: {},
        data() {
            return {
                v_note: ''
            }
        },
        props: {
            dialog: Boolean,
            dataNotDeli: Object
        },

        methods: {
            updateDialog(item) {
                console.log(item);
                this.$emit('update-dialog', item)
            },
            close() {
                this.updateDialog(false)
            },
            sendNote() {
                var data = this.dataNotDeli
                data.note = this.v_note
                data.status = `Không Nhận Hàng`
                console.log(data.id);
                Service.editOrder(data.id, data).then((response) => {
                    console.log(response.data);
                })
                this.$toast.success(`Gửi Thành Công. Rất xin lỗi vì sự cố`);
                this.updateDialog(false)
            }
        },
        create() {
            console.log(123);
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/addtocart.scss";
</style>