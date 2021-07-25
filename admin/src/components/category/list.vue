<template>
  <table v-if="!loading" id="datatablesSimple" class="table table-bordered table-striped">
    <thead class="text-center">
    <tr>
      <th>Name</th>
      <th></th>
    </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="(item, index) in categories" :key="index">
        <td>{{ item.name }}</td>
        <td><button class="btn btn-sm btn-warning">Edit</button></td>
        <td><button class="btn btn-sm btn-danger">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "list.vue",
  props : {
    categories : {
      type : Array,
      default : () => []
    },
    loading : {
      type : Boolean,
      default : () => []
    }
  },
}
</script>

<style scoped>

</style>
