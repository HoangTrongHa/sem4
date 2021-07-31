<template>
    <div class="product-detail">
        <BaseBanner>
            <template v-slot:title>
            SẢN PHẨM – PRODUCTS
            </template>
        </BaseBanner>
        <v-container>
            <div class="wrap-product">

            </div>
        </v-container>
    </div>
</template>

<script>
import BaseBanner from '@/components/base/Banner.vue'

export default {
    components: {
        BaseBanner
      },
}
</script>

<style lang="scss" scoped>
    @import "@/scss/ProductDetail.scss";
</style>