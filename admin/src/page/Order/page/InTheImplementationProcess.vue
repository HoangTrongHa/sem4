<template>
    <div class="card-body">
        <ListOrder :getOrder="getOrder"/>
    </div>
</template>

<script>
    import ListOrder from "@/components/Order/list"

    export default {
        components: {
            ListOrder,
        },
        computed: {
            getData() {
                return this.$store.state.order

            },
            getOrder() {
                return this.$store.state.order.filter(items => items.status === "Đang Trong Quá Trình Thuê")
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-tabs {
        display: flex;
        width: 100%;
        justify-content: center;
    }
</style>
