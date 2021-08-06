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
                                :class="(item.location == '#') || (item.location == 'ToRent')  ? 'wrap-item drop-down' : 'wrap-item'"
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
                        <li v-if="getToken == false"
                            class="login"
                            @click="$router.push({
                                name: `Login`
                            })"
                        >
                            <icon class="map-user-tie" name="user-tie" size="20px"/>
                        </li>
                        <li v-else class="hover-user"
                        >
                            <icon class="map-user-tie" name="user-tie" size="20px"/>
                            <div class="wrap-infor-user">
                                <ul>
                                    <li>
                                        <div class="wrap-title">
                                            <icon class="map-user-tie" name="user-tie" size="20px"/>
                                             <div @click="$router.push({
                                                 name:`UserInfor`
                                             })">
                                                Thông Tin Cá Nhân

                                             </div>
                                        </div>
                                       
                                    </li>
                                    <li>
                                        <div class="wrap-title">
                                            <icon class="map-list-alt" name="list-alt" size="20px"/>
                                            <div @click="$router.push({
                                                 name:`OrderInfor`
                                             })">                                           
                                                Danh Sách Đơn Hàng
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li @click="logout">
                                        <div class="wrap-title">

                                            <icon class="map-sign-out-alt" name="sign-out-alt" size="20px"/>
                                            <div>
                                                Thoát
                                            </div>
                                           
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li 
                            class="shoppingCat" 
                            @click="$router.push({name: `Cart`})"
                            v-if="countCart > 0"
                        >
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
                                <div class="title-cart"
                                >
                                    <div class="title">
                                        {{ countCart }} Sản Phẩm
                                    </div>
                                    <div class="checkOut" 
                                    @click="$router.push({name: `Cart`})"
                                    >
                                        Xem Tất Cả
                                    </div>
                                </div>
                                <div 
                                class="wrapItem" 
                                v-for="items of cart" :key="items.id">
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
          token: ''
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
            countBuy() {
                return this.$store.state.cart.length 
            },
            countThue() {
                return this.$store.state.thue.length 
            },
            countCart() {
                return this.countBuy + this.countThue
            },
            getToken() {
                if (this.$store.state.token == "" || this.$store.state.token == null || this.$store.state.token == undefined) {
                    return false
                } else {
                    return true
                }
            }
        },
        methods: {
            logout() {
                var value = []
                var token = ''
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                this.$store.dispatch('updateUser', value);
                this.$store.dispatch('updateToken', token);
                this.$toast.success(`Chào tạm biệt. Hãy quay lại với chúng tôi nhé😍`);
                this.$router.push({name: 'Login'})
            }
        },
        mounted() {
            this.$store.dispatch('getMenu');
            this.$store.dispatch('getCategories');
            this.$store.dispatch('getCart');
        },
        created() {
            this.$store.dispatch('getToken');
            this.token = this.$store.state.token
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/header.scss";
</style>