<template>
  <table class="table table-bordered table-striped">
    <thead class="text-center">
      <tr class="table-top">
        <th>CODE</th>
        <th>CUSTOMER</th>
        <th>PHONE</th>
        <th>START TIME</th>
        <th>END TIME</th>
        <th>DISTRIBUTION</th>
        <th>STATUS</th>
        <th>PRICE</th>
        <th>DETAIL</th>
      </tr>
    </thead>
    <tbody>
      <orderItem
        v-for="order in orders"
        @refreshData="refreshData"
        :order="order"
        :key="order.id"
      />
    </tbody>
  </table>
</template>

<script>
import orderItem from "@/components/order/orderItem";
export default {
  name: "list",
  components: {
    orderItem
  },
  props: {
    loading: {
      type: Boolean,
      default: () => false
    },
    orders: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    refreshData() {
      this.$emit("refreshEdit");
    }
  }
};
</script>

<style lang="scss" scoped>
.list-order {
  &-top {
    margin-top: 20px;
    display: flex;
    &__item {
    }
  }
}
</style>
