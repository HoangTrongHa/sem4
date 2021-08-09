<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Chi Tiết Đơn Hàng #{{ getOrderDetail.code_order }}</h1>
        <v-row>
            <h3>Đơn Mua</h3>
            <div class="wrapBuy">
                <div class="wrapInforUser">
                    <div class="title">
                        Thông tin người mua đơn hàng
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Họ Tên Người Mua</div>
                        <div class="content">{{ getOrderDetail.user_register }}</div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Họ Tên Người Nhận</div>
                        <div class="content">{{ getOrderDetail.userName }}</div>
                    </div>
                     <div class="wrapInfor">
                        <div class="title">Số Điện Thoại</div>
                        <div class="content">{{ getOrderDetail.phoneNumber }}</div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Email</div>
                        <div class="content">{{ getOrderDetail.email }}</div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Địa Chỉ Nhận Hàng</div>
                        <div class="content">{{ getOrderDetail.address }}</div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Thông Tin Nơi Ở</div>
                        <div class="content">Tỉnh/Thành Phố {{ getOrderDetail.city }}</div>
                        <div class="content">Quận/Huyện {{ getOrderDetail.district }}</div>
                        <div class="content">Phường/Xã {{ getOrderDetail.ward }}</div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Khách Hàng Ghi Chú</div>
                        <div class="content">{{ getOrderDetail.note }}</div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Trạng Thái</div>
                        <div class="content">
                            <v-select
                                :items="items"
                                label="Chuyển Trạng Thái"
                                outlined
                                v-model="status"
                            ></v-select>
                        </div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Hình Thức Thanh Toán</div>
                        <div class="content">{{ getOrderDetail.option }}</div>
                    </div>
                    <div class="wrapInfor">
                        <div class="title">Chức Năng</div>
                        <div class="content">
                            <v-btn
                                tile
                                :disabled="disable"
                                color="success"
                                class="button"
                                @click="updateCart"
                                :loading="loading"
                            >
                                <v-icon left>
                                mdi-pencil
                                </v-icon>
                                Cập Nhật Đơn Hàng
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div class="wrapGroupOption">
                    <div class="wrapByItem">
                    <div class="title">Danh sách Đơn Hàng Mua</div>
                        <div 
                            class="wrapItemGroup" 
                            v-if="countLenghtBuy === 0 "
                        >
                            Khong co don hang
                        </div>
                        <div v-else class="wrapItemGroup">
                            <BuyComponents :dataBy="this.getProductItem.buy" />
                        </div>
                    </div>
                    <div class="wrapThueItem">
                    <div class="title">Danh sách Đơn Hàng Mua</div>
                        <div 
                            class="wrapItemGroup" 
                            v-if="countLenghtThue === 0 "
                        >
                            Khong co don hang
                        </div>
                        <div v-else class="wrapItemGroup">
                            <ThueComponents 
                                :dataBy="this.getProductItem.thue" 
                                :calcThue="calcThue"
                                :calcCoc="calcCoc"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </v-row>  
    </div>
</template>

<script>
import BuyComponents from "@/components/OrderDetail/BuyComponents.vue"
import ThueComponents from "@/components/OrderDetail/ThueComponents.vue"
import Service from '../../business/index'

export default {
    data () {
        return {
           status: '',
           items: [
                {
                id: 1,
                text: 'Chờ Xác Nhận',
               
                },
                {
                id: 2,
                text: 'Đơn Hàng Bị Hủy',
               
                },
                {
                id: 3,
                text: 'Chờ Vận Chuyển',
              
                },
                {
                id: 4,
                text: 'Đang Vận Chuyển',
                },
                {
                    id: 5,
                    text: 'Đã Tới Điểm Giao',
                },
                {
                    id: 6,
                    text: 'Hết Hạn Thuê',
                },
                {
                    id: 7,
                    text: 'Hoàn Thành',
                },
            ],
            disable: Boolean,
            getStatus: '',
            loading: false
        }
    },
    props : {
        getOrder : {
        type : Array,
        default : () => []
        }
    },
    components : {
        BuyComponents,
        ThueComponents
    },
    computed: {
        getOrderDetail() {
            return this.$store.state.order.find(item => item.id === this.$route.params.params)
        },
        getProductItem() {
            return JSON.parse(this.getOrderDetail.item_cart)
        },
        countLenghtThue() {
            return this.getProductItem.thue.length
        },
        countLenghtBuy() {
            return this.getProductItem.buy.length
        },
        calcThue() {
            let total = 0;
            this.getProductItem.thue.forEach((item) => {
                total += item.price * item.qtyCus;
            });
            return total;
        },
        calcCoc() {
            let total = 0;
            this.getProductItem.buy.forEach((item) => {
                total += item.price * item.qtyCus;
            });
            return total;
        },
    },
    methods: {
        updateCart() {
            var data = this.getOrderDetail
            data.status = this.status
            console.log(data);
            this.loading = true
            Service.editOrder(data.id,data).then((response) => {
                console.log(response.data);
                this.loading = false
            })
            
        }
    },
    created() {
        this.status = this.$store.state.order.find(item => item.id === this.$route.params.params).status
        this.disable = true
        this.getStatus = this.$store.state.order.find(item => item.id === this.$route.params.params).status
    },
    
    watch: {
        status:  function (val) {
            if (val !== this.getStatus ) {
                this.disable = false
            } else {
                console.log(2);
            }
        }
    }
}
</script>

<style scoped lang="scss">
   .wrapBuy {
        display: flex;
        .wrapInforUser {
            width: 45%;
            background: #f9fbfe;
            padding: 30px;
            border-radius: 5px ;
            .title {
                font-weight: bolder;
            }
            .wrapInfor { 
                width: 100%;
                padding: 10px 0;
                font-size: 22px;
                display: flex;
                justify-content: space-between;
            }
        }
        .wrapGroupOption {
            width: 55%;
            padding:0 100px;
            .wrapByItem {
                width: 100%;
            }
        }
    }

  .button {
    background: #4caf50 !important;
    color: #fff;
  }
</style>
