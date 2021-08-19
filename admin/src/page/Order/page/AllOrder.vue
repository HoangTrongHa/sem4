<template>
  <div class="card-body">
    <ListOrder :getOrder="getOrder" />
    <div class="text-center">
  </div>
  </div>
</template>

<script>
import ListOrder from "@/components/Order/list"
export default {
  components: {
    ListOrder,
  },
  computed: {
    getOrder() {
      return this.$store.state.order
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
