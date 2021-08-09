<template>
    <div>
        <table class="table mb-0">
        <thead>
            <tr class="text-muted">
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col" class="text-right">Số Lượng</th>
            <th scope="col" class="text-right">Giá Thuê</th>
            <th scope="col" class="text-right">Giá Cọc</th>
            <th scope="col" class="text-right">Ngày Thuê</th>
            <th scope="col" class="text-right">Ngày Trả</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,key) of dataBy" :key="key">
                <td>
                    <div class="active-project d-flex align-items-center mt-0 ">
                        <div class="h-avatar is-medium">
                            <img class="avatar rounded" :src="item.img">
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
                <td class="text-right">
                    {{ item.deposit_price }}
                </td>
                <td class="text-right">
                    {{ item.startDay }}
                </td>
                <td class="text-right">
                    {{ item.endDay }}
                </td>
            </tr>    
        </tbody>
        </table>
        <div class="wrapTotalBy">
            <div class="title">Tổng Tiền Cọc: </div>
            <div class="value">{{ calcCoc }} Đồng</div>
        </div>
        <div class="wrapTotalBy">
            <div class="title">Tổng Tiền Thuê: </div>
            <div class="value">{{ calcThue }} Đồng</div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        dataBy : {
            type : Array,
            default : () => []
        },
        calcThue: Number,
        calcCoc: Number
    },
    data() {
        return {
        };
    },
    computed: {
        
  },
}
</script>

<style lang="scss" scoped>
    .table {
        width: 100%;
        tbody {
            tr {
                td {
                    .active-project {
                        .h-avatar{ 
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
            font-size: 32px;
            font-weight: bolder;
            margin: 0 0 0 20px;
        }
    }
</style>