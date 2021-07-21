<template>
    <div>
        <v-container>
            <div class="wrapHeader"> 
                <div class="wrapImg">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="wrapNav">
                    <ul class="wrapUrl">
                        <li
                            :class="item.location === $route.name ? 'wrapUrl wrapUrlActive' : 'wrapUrl'"
                            v-for="item of menuList" :key="item.id"
                            @click="item.name == `Sản Phẩm` ? `#` : $router.push({ name: item.location })"
                        >
                            <div
                                :class="item.name == 'Sản Phẩm' ? 'wrap-item drop-down' : 'wrap-item'"
                            >
                                {{ item.name }}
                                <span class="caret"></span>
                                <div class="wrap-item-category">
                                    <ul>
                                        <li
                                        @click="$router.push({ 
                                            name: `ProductByCateId`,
                                            params: { name: itemCat.name, items:itemCat}
                                        })"
                                        v-for="itemCat of categoriesList" :key="itemCat.id"
                                        :getCategories="categoriesList.categoriesList"
                                        >
                                            {{ itemCat.name }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="shoppingCat" @click="ShowCart()">
                            <v-badge
                                :content="cart.length"
                                color="error"
                            >
                            <icon class="map-shopping-cart" name="shopping-cart" size="20px" 
                                
                            />
                            </v-badge>
                        </li>
                        <ShowCart
                            :isShow="isShow"
                        >
                        </ShowCart>
                    </ul>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
  import ShowCart from '@/components/ShowCart.vue'

    export default {
        components: {
            ShowCart
      },
        data () {
        return {
          isShow: false,
        }
      },
        computed: {
            menuList() {
                return this.$store.state.menu
            },
            categoriesList() {
                return this.$store.state.categories
            },
            cart() {
                return JSON.parse(localStorage.getItem('Cart')) || [];
            }
            
        },
        mounted() {
            this.$store.dispatch('getMenu');
            this.$store.dispatch('getCategories');

        },
        methods: {
        ShowCart() {
          this.isShow = true
          console.log(this.dialog);
        },
      },
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/header.scss";
</style>