<template>
    <v-app>
        <Header/>
        <v-main>
            <router-view/>
        </v-main>
        <Footer/>
    </v-app>
</template>
<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        components: {
            Header,
            Footer

        },
        name: 'App',

        mounted() {
            this.$store.dispatch('getAllProduct'),
                this.$store.dispatch('getBannerProduct')
            this.$store.dispatch('getAllOrder')
        },
        created() {
            console.log(process.env.NODE_ENV);
        }
    };
</script>
