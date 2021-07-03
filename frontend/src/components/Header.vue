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
                            class="wrapLi"
                            v-for="item of menuList" :key="item.id"
                            @click="$router.push({ name: item.location })"

                        >
                        
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        computed: {
            menuList() {
                return this.$store.state.menu
            }
        },

        mounted() {
            this.$store.dispatch('getMenu');
        }

    }
</script>

<style lang="scss" scoped>
    @import "@/scss/header.scss";
</style>