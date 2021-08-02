<template>
    <div class="product-detail">
        <BaseBanner>
            <template v-slot:title>
            SẢN PHẨM – PRODUCTS
            </template>
        </BaseBanner>
        <v-container>
            <div class="wrap-product">
                <div class="wrap-vue-slick">
                    <VueSlickCarousel
                        ref="c1"
                        :asNavFor="$refs.c2"
                        :focusOnSelect="true"
                        >
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>$</h3></div>
                    </VueSlickCarousel>
                    <VueSlickCarousel
                        ref="c2"
                        :asNavFor="$refs.c1"
                        :slidesToShow="4"
                        :focusOnSelect="true"
                        >
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>$</h3></div>
                    </VueSlickCarousel>
                </div>
                <div class="wrap-infor-product">

                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import BaseBanner from '@/components/base/Banner.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: {
        VueSlickCarousel,
        BaseBanner
    },
    data () {
        return {
          detail: {}
        }
    },
    computed: {
        getProductDetail() {
            return this.$store.state.products.find(item => item.id === this.$route.params.params)
        }
    },
    created() {
        console.log(this.$route.params.params)
    }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/ProductDetail.scss";
</style>