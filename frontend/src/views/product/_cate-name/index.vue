<template>
    <div>
        <v-container>
          <nav class="woocommerce-breadcrumb">
            <a
            @click="$router.push({name: `Home`})"
            >
            Trang chủ</a>
            &nbsp;/&nbsp;
            <a href="http://yvanhien.com/san-pham/">Sản phẩm – Products</a>
            &nbsp;/&nbsp;{{ $route.params.name }}
            </nav>
            <v-row>
              <v-col
                cols="3"
                sm="3"
              >
                <div class="sidebar">
                  <h3 class="widget-title">Danh mục</h3>
                  <div class="sidebar-padder">
                    <ul class="wrap-category">
                      <li 
                      v-for="item of getDataCategories" :key="item.id">
                          <div
                            :class="($route.params.name == item.name) ? `active itemClass` : `itemClass`"
                            @click="$router.push({ 
                              name: `ProductByCateId`,
                              params: { name: item.name, items:item}
                            })"
                          >
                            {{ item.name }}
                          </div>
                          <ul>
                            <li
                            v-for="list of (getProduct.filter(finds => finds.cate_name === item.name))" :key="list.id"
                            >
                              {{ list.name }}
                            </li>
                          </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </v-col>
              <v-col
                cols="9"
                sm="9"
              >
                <div class="wrapBanner">
                  <VueSlickCarousel 
                    class="wrap-owl"
                    v-bind="setting"
                    v-if="getBannerProduct.length > 0"
                  >
                    <div class="shop-banner"
                      v-for="banner of getBannerProduct" :key="banner.id"
                    >
                      <div class="shop-banner-img">
                        <img :src="banner.base64" alt="">
                      </div>
                      <div class="shop-banner-content">
                          <div class="shop-banner-contents">
                            <p>{{ banner.content }}</p>
                          </div>
                      </div>
                    </div>
                  </VueSlickCarousel>
                </div>
                <div class="product">
                  <ul>
                    <li class="itemProduct"
                      v-for="products of getDataByCateName" :key="products.id"
                    >
                      <img :src="products.img" alt="">
                      <h2 class="name">
                        {{ products.name }}
                      </h2>
                      <div 
                      class="add-to-card"
                      >
                      <p
                       @click="addToCard(products.id)"
                      >
                        Thêm vào giỏ hàng

                      </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
      components: {
        VueSlickCarousel
      },
      computed: {
        getDataByCateName() {
          console.log(this.$store.state.products.filter(items => items.cate_name === this.$route.params.name));
            return this.$store.state.products.filter(items => items.cate_name === this.$route.params.name)
        },
        getDataCategories() {
          return this.$store.state.categories
        },
        getProduct () {
          return this.$store.state.products
        },
        setting() {
          return {
            arrows:true,
            dots: true,
            slidesToShow:1,
            swipeToSlide:true,
            autoplay: true,
            autoplaySpeed: 2000
          }
        },
        getBannerProduct() {
          return this.$store.state.banner_product
        }
      },
      methods: {
        addToCard(id) {
          console.log(id)
          this.$store.dispatch('addProductToCart', {
            item: id
          })

        }
      },
      created() {
      }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/product_id.scss";
</style>