<template>
  <tr class="order-item text-center">
    <td class="order-item__detail">{{ order.code_order }}</td>
    <td class="order-item__detail">{{ order.userName }}</td>
    <td class="order-item__detail">{{ order.phoneNumber }}</td>
    <td class="order-item__detail">{{ order.create_at }}</td>
    <td class="order-item__detail"></td>
    <td class="order-item__detail">{{ order.district }}</td>
    <td class="order-item__detail">{{ order.status }}</td>
    <td class="order-item__detail">{{ order.total }}</td>
    <edit-order :orderEdit="order" @refreshData="refresh" />
  </tr>
</template>

<script>
import EditOrder from "@/components/order/editOrder";
export default {
  name: "orderItem",
  components: { EditOrder },
  props: {
    order: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    refresh() {
      this.$emit("refreshData");
    }
  }
};
</script>

<style lang="scss" scoped></style>
