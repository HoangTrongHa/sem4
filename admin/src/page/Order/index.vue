<template>
    <div class="container-fluid px-4">
    <h1 class="mt-4">Danh Sách Đơn Hàng</h1>
    <ol class="breadcrumb mb-4">
    </ol>
    <div class="card mb-4">
      <div class="card-header">
        <i class="fas fa-table me-1"></i>
        Danh Sách Đơn Hàng
      </div>
      <div class="card-body">
        <ListOrder :getOrder="getOrder" />
      </div>
    </div>
  </div>
</template>

<script>

import ListOrder from "@/components/Order/list"
export default {
    components: {
        ListOrder
    },
    computed: {
        getOrder() {
            return this.$store.state.order
        }
    }
}
</script>

<style scoped lang="scss">

</style>