<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  name: 'App',

  mounted() {
      this.$store.dispatch('getAllProduct'),
      this.$store.dispatch('getBannerProduct')
      this.$store.dispatch('getAllOrder')
  }
};
</script>
