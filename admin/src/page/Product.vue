<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Product</h1>
    <ol class="breadcrumb mb-4">
    </ol>
    <div class="card mb-4">
      <div class="card-header">
        <i class="fas fa-table me-1"></i>
        Product List
      </div>
      <div class="card-body">
        <div class="loading">
          <div v-if="loading" class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <List :products="products" :loading="loading"/>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/product/list"
import { api } from "../../apis";
export default {
  name: "Product",
  components  : {
    List
  },
  data(){
    return{
      products : [],
      loading : false,
    }
  },
  async created() {
    await this.loadPage()
  },
  methods : {
    async loadPage(){

      try{
        this.loading = true
        const result = await api.productList()
        this.products = result.data
      }catch (e) {
        console.log(e.response)
      }finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.loading{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
