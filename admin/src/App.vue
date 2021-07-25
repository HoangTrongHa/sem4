<template>
  <div id="app">
    <Header/>
    <div id="layoutSidenav">
      <Sidebar/>
      <div id="layoutSidenav_content">
        <main>
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  }
}
</script>

