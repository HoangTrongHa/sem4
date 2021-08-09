<template>
  <v-app>
    <Header/>
    <div id="layoutSidenav">
      <Sidebar/>
      <div id="layoutSidenav_content">
        <main>
          <router-view/>
        </main>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
  mounted() {

      this.$store.dispatch('getOrder')
  }
}
</script>

