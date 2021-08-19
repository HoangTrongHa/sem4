<template>
  <v-row>
    <v-col>
      <v-tabs hide-slider class="custom-tabs" centered v-model="activeTab">
        <BaseCustomTab
          v-for="tab in tabs"
          :key="tab.id"
          :to="tab.route"
          :name="tab.name"
        />
      </v-tabs>
      <!--  Insert <router-view> with props for below slot. -->
      <slot />
    </v-col>
  </v-row>
</template>

<script>
import BaseCustomTab from "@/components/BaseCustomTab/index.vue";

export default {
  components: {
    BaseCustomTab
  },
  data () {
      return{
          activeTab:''
      }
  },
  props: {
    tabs: [],    
  },
}
</script>

<style scoped lang="scss">
.custom-tabs {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
