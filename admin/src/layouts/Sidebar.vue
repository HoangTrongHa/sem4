<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Admin Dashboard</div>
          <router-link v-for="(item, index ) in page" :key="index" :to="item.path" class="nav-link">
            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar.vue",
  data(){
    return {
      page : [
        {
          name : 'Dashboard',
          path : "/",
          icon : '',
        },
        {
          name : "Category",
          path : "/category",
          icon : ""
        },
        {
          name : "Product",
          path : "/product",
          icon : ""
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
