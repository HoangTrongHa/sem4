<template>
    <div>
        <div class="status"
             v-show="countLenghtBuy > 0"
        >
            <v-select
                    :items="items"
                    label="Chuyển Trạng Thái"
                    outlined
                    v-model="status"
            >
            </v-select>
        </div>
        <table class="table mb-0">
            <thead>
            <tr class="text-muted">
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col" class="text-right">Số Lượng</th>
                <th scope="col" class="text-right">Giá Tiền</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, key) of dataBy" :key="key">
                <td>
                    <div class="active-project d-flex align-items-center mt-0 ">
                        <div class="h-avatar is-medium">
                            <img class="avatar rounded" :src="item.img"/>
                        </div>
                        <div class="data-content">
                            <div>
                                <span class="font-weight-bold">{{ item.name }}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td class="text-right">
                    {{ item.qtyCus }}
                </td>
                <td class="text-right">
                    {{ item.price }}
                </td>
            </tr>
            </tbody>
        </table>
        <div class="wrapTotalBy">
            <div class="title">Tổng tiền đơn mua :</div>
            <div class="value">{{ calcBuy }} VNĐ</div>
        </div>
  </div>
</template>

<script>
    export default {

        props: {
            dataBy: {
                type: Array,
                default: () => [],
            },
            dataStatus: String,
            calcBuy: Number,
            countLenghtBuy: Number
        },
        data() {
            return {
                status: '',
                items: [
                    {
                        id: 1,
                        text: "Xác Nhận Đơn Mua",
                    },
                    {
                        id: 2,
                        text: "Giao Thành Công",
                    },
                    {
                        id: 3,
                        text: "Khách Từ CHối Nhận Hàng",
                    },
                    {
                        id: 4,
                        text: "Đơn Hàng Lỗi",
                    }
                ],
            }
        },
        computed: {},
        watch: {
            status(newValue) {
                this.$emit('update-status', newValue)
            }
        },
        created() {
            this.status = this.dataStatus
        }
    };
</script>

<style lang="scss" scoped>
    .status {
        float: right;
        width: 30%;
        height: min-content;
    }

    .table {
        width: 100%;

        tbody {
            tr {
                td {
                    .active-project {
                        .h-avatar {
                            margin: 0 10px 0 0;

                            .avatar {
                                height: 70px;
                                width: 70px;
                            }
                        }
                    }
                }
            }
        }
    }

    .wrapTotalBy {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;

        .value {
            color: #ee4d2d;
            font-size: 26px;
            font-weight: bold;
            margin: 0 0 0 20px;
        }
    }
</style>
