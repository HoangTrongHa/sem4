<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Admin Dashboard</div>
          <router-link v-for="(item, index ) in page" :key="index" :to="item.path" class="nav-link">
            <div class="sb-nav-link-icon"><i :class="item.icon"></i></div>
            {{ item.name }}
          </router-link>
          <div class="nav-link" @click="$router.push({ name: `Order`})">
              <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
              Đanh Sách Đơn Hàng
          </div>
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
          icon : 'fas fa-book-open',
        },
        {
          name : "Category",
          path : "/category",
          icon : "fas fa-book-open"
        },
        {
          name : "Product",
          path : "/product",
          icon : "fas fa-book-open"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav-link {
    cursor: pointer;
  }  
</style>
