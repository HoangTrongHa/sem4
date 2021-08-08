<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Order</h1>
    <ol class="breadcrumb mb-4"></ol>
    <div class="card mb-4">
      <div class="card-header">
        <i class="fas fa-table me-1"></i>
        Order List
      </div>
      <div class="card-body">
        <div class="loading">
          <div v-if="loading" class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <List :loading="loading" :orders="orders" @refreshEdit="refreshData" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/order/list";
import { api } from "../../apis";
export default {
  name: "Order",
  components: {
    List
  },
  data() {
    return {
      loading: false,
      orders: []
    };
  },
  async created() {
    await this.loadPage();
  },
  methods: {
    refreshData() {
      this.loadPage();
    },
    async loadPage() {
      try {
        this.loading = true;
        const result = await api.orderList();
        this.orders = result.data;
      } catch (e) {
        console.log(e.response);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped></style>
