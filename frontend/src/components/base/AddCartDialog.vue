<template>
<v-row justify="center">
    <v-dialog :value="dialog" max-width="800" input="updateDialog">
      <v-card>
        <v-card-title class="text-h5">Thêm Vào Giỏ Hàng</v-card-title>
            <v-spacer></v-spacer>
            <div class="wrap-cart">
              <div class="wrap-img">
                <img :src="getDataProduct.img" alt="">
              </div>
              <div class="wrap-infor-product">
                <p class="name-product">{{ getDataProduct.name }}</p>
                <div class="price">{{ getDataProduct.price }}</div>
                <div class="title-size">

                </div>
                <div class="title-size">
                  
                </div>
              </div>
            </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="updateDialog(false)">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text > Thêm sản phẩm vào giỏ hàng </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props: {
        dialog: Boolean,
        getDataProduct: {}
    },
    methods: {
        updateDialog(item) {
            this.$emit('update-dialog', item)
        }
    },
    created() {
        console.log(this.productItem)
    }
}
</script>

<style lang="scss" scoped>
  .wrap-cart {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }
</style>