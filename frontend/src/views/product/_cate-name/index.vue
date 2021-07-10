<template>
    <div>
        <div class="">
           {{ count(getDataByCateName) }}
        </div>
    </div>
</template>

<script>
  export default {
      computed: {
        getDataByCateName() {
            console.log(this.$store.state.products.filter(items => items.cate_name === this.$route.params.name))
            return this.$store.state.products
            .find(items => items.cate_name === this.$route.params.name)
        }
      }
  }
</script>
