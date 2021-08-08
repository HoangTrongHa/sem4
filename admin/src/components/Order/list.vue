<template>
  <table id="datatablesSimple" class="table table-bordered table-striped">
    <thead class="text-center">
    <tr>
        <th>Mã Đơn Hàng</th>
        <th>Ngày Đặt Hàng</th>
        <th>Người Đặt</th>
        <th>Người Nhận</th>
        <th>Trạng Thái Đơn Hàng</th>
        <th>Hình Thức</th>
        <th>Chức năng</th>
    </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="(item, index) in getOrder" :key="index">
        <td>#{{ item.code_order }}</td>
        <td>{{ item.create_at }}</td>
        <td>{{ item.user_register }}</td>
        <td>{{ item.userName }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.option }}</td>
        <td>
          <v-btn
            tile
            color="success"
            class="button"
            @click="$router.push({ 
              name: `OrderDetail`,                       
              params: { params: item.id },
            })"
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            Chi Tiết Đơn Hàng
          </v-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props : {
    getOrder : {
      type : Array,
      default : () => []
    }
  },
  methods: {
    orderDetail(id) {
      console.log(id);
    }
  }
}
</script>

<style scoped>
  .button {
    background: #4caf50 !important;
    color: #fff;
  }
</style>
