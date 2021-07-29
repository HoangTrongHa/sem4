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
                        <li v-if="getUser == null"
                            class="login"
                            @click="$router.push({
                                name: `Login`
                            })"
                        >
                            <icon class="map-user-tie" name="user-tie" size="20px"/>
                        </li>
                        <li v-else
                        >
                            <icon class="map-user-tie" name="user-tie" size="20px"/>
                        </li>
                        <li class="shoppingCat">
                            <v-badge
                                
                                :content="countCart"
                                color="error"
                            >
                            <icon class="map-shopping-cart" name="shopping-cart" size="20px" 
                                
                            />
                            </v-badge>
                             <div class="wrap-hover-cart">
                             
                             <v-card
                                class="mx-auto"
                                max-width="400"
                            >
                            <div class="title-cart">
                                        <div class="title">
                                            {{ countCart }} Sản Phẩm
                                        </div>
                                        <div class="checkOut" 
                                        @click="$router.push({name: `CheckOut`})"
                                        >
                                            Xem Tất Cả
                                        </div>
                                    </div>
                                <div class="wrapItem" v-for="items of cart" :key="items.id">
                                    <div class="wrapImg">
                                        <img :src="items.img" >
                                    </div>
                                    <div class="wrapContent">
                                        <div class="name">
                                            {{ items.name }}
                                        </div>
                                         <div class="price">
                                            {{ items.price }}đ
                                        </div>
                                        <div class="size"
                                        
                                        >
                                           Kích Thước: {{ items.size.size }}
                                        </div>
                                        <div class="size">
                                           Số Lượng: {{ items.qtyCus }}
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
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
            },
            countCart() {
                return this.cart.length
            },
            getUser () {
                console.log(this.$store.state.user)
                return this.$store.state.user
            }
            
        },
        mounted() {
            this.$store.dispatch('getMenu');
            this.$store.dispatch('getCategories');
        },
        watch: {
            getUser(newValue,oldValue) {
                console.log(`Updating from ${oldValue} to ${newValue}`);
            }
        }  
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/header.scss";
</style>