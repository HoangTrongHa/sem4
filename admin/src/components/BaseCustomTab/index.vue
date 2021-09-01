<template>
  <v-tab
    active-class="custom-active-class"
    class="custom-tab"
    :exact="exact"
    :to="to"
  >
    {{ name }}
  </v-tab>
</template>

<script>

export default {
  data () {
      return{
          
      }
  },
  props: {
    stepsConfig: [], 
    exact: Boolean,
    to: { name: String },
    name: String
  },
}
</script>

<style lang="scss" scoped>
.custom-tab {
  border-radius: 4px 4px 0 0;
  border-bottom: none;
  margin: 0 auto;
  justify-content: center !important;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background: #cb9965;
    bottom: -2px;
    display: none;
  }
}

// eslint-disable-next-line vue-scoped-css/no-unused-selector
.custom-active-class {
  color: black;
  border-bottom: 1px solid black;
  a{
    text-transform:capitalize;
  }
  &::after {
    display: block;
  }
}
</style>
