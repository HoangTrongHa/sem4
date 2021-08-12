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
      <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Thêm Sản Phẩm
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="700"
    >
      <v-card>
        <v-card-title class="text-h5">
          Thêm Sản Phẩm
        </v-card-title>
             <v-text-field
                v-model="name"
                label="Tên Sản Phẩm"
                outlined
              ></v-text-field>
              <v-select
                  :items="categories"
                  label="Loại Sản Phẩm"
                  outlined
                  item-text="name"
                  item-value="id"
                  v-model="cate_id"
                  :error-messages="errors"
              ></v-select>
              <v-select
                  :items="status"
                  label="Trạng Thái Sản Phẩm"
                  outlined
                  v-model="addStatus"
                  :error-messages="errors"
              ></v-select>
              <v-file-input
                label="Ảnh Sản Phẩm"
                outlined
                dense
                v-model="thumbnail"
              ></v-file-input>
        <v-card-text>
          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Đóng
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Thêm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dialog: false,
      addStatus:'',
      cate_id:"",
      img:'',
      thumbnail:''
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
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    status() {
      return ["HOT","SALES","NEW","TOP TRENDING"]
    }
  },
  mounted() {
    this.$store.dispatch('getCategories');
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
