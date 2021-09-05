<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Danh Sách Đơn Hàng</h1>
        <ol class="breadcrumb mb-4">
        </ol>
        <div class="card mb-4">
            <div class="card-header">
                <CustomProgressPagerContainer :tabs="stepsConfig">
                    <router-view/>
                </CustomProgressPagerContainer>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomProgressPagerContainer from '@/components/CustomProgressPagerContainer/index.vue'

    export default {
        components: {
            CustomProgressPagerContainer
        },
        computed: {
            stepsConfig() {
                return [
                    {
                        id: 1,
                        name: "All",
                        route: {
                            name: "AllOrder"
                        }
                    },
                    {
                        id: 2,
                        name: "Đơn Hàng Mới",
                        route: {
                            name: "WaitForConfirmation"
                        }
                    },
                    {
                        id: 3,
                        name: "Đã Hoàn Thành",
                        route: {
                            name: "complete"
                        }
                    },
                    {
                        id: 4,
                        name: "Đang Trong Quá Trình Thuê",
                        route: {
                            name: "InTheImplementationProcess"
                        }
                    },
                    {
                        id: 5,
                        name: "Quá Hạn Thuê",
                        route: {
                            name: "OutOfDate"
                        }
                    },
                    {
                        id: 6,
                        name: "Đơn Mua",
                        route: {
                            name: "OrderBuy"
                        }
                    },
                    {
                        id: 7,
                        name: "Đơn Thuê",
                        route: {
                            name: "OrderThue"
                        }
                    },
                    {
                        id: 8,
                        name: "Yêu Cầu Trả",
                        route: {
                            name: "getOrderRequestReturn"
                        }
                    },
                    {
                        id: 9,
                        name: "Đang vận chuyển",
                        route: {
                            name: "getBeingTransported"
                        }
                    },
                    {
                        id: 10,
                        name: "Không Nhận Hàng",
                        route: {
                            name: "noDeliveryPages"
                        }
                    },
                    {
                        id: 11,
                        name: "Đơn Hàng Bị Hủy",
                        route: {
                            name: "CanceledOrderPage"
                        }
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>