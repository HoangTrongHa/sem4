<template>
    <table v-if="!loading" id="datatablesSimple" class="table table-bordered table-striped">
        <thead class="text-left">
        <tr>
            <th>Tên</th>
            <th>Hình ảnh</th>
            <th>Danh mục</th>
            <th>Trạng thái</th>
            <th></th>
        </tr>
        </thead>
        <tbody class="text-left">
        <tr v-for="(item, index) in products" :key="index">
            <td>{{ item.name }}</td>
            <td><img :src="item.img" :alt="item.name" style="width: 50px"></td>
            <td>{{ item.cate_name }}</td>
            <td>{{ item.status }}</td>
            <td>
                <button class="btn btn-warning btn-sm">Sửa</button>
            </td>
            <td>
                <button class="btn btn-danger btn-sm">Xóa</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "list.vue",
        props: {
            products: {
                type: Array,
                default: () => []
            },
            loading: {
                type: Boolean,
                default: () => []
            }
        },
    }
</script>

<style scoped>

</style>
