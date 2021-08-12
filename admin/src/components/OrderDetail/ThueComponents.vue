<template>
  <div>
    <div class="status">
      <v-text-field
        label="Chuyển Trạng Thái"
        outlined
        v-model="status"
      ></v-text-field>
    </div>
    <table class="table mb-0">
      <thead>
        <tr class="text-muted">
          <th scope="col">Tên Sản Phẩm</th>
          <th scope="col" class="text-right">Số Lượng</th>
          <th scope="col" class="text-right">Giá Thuê</th>
          <th scope="col" class="text-right">Giá Cọc</th>
          <th scope="col" class="text-right">Ngày Thuê</th>
          <th scope="col" class="text-right">Ngày Trả</th>
          <th scope="col" class="text-right">Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) of dataBy" :key="key">
          <td>
            <div class="active-project d-flex align-items-center mt-0 ">
              <div class="h-avatar is-medium">
                <img class="avatar rounded" :src="item.img" />
              </div>
              <div class="data-content">
                <div>
                  <span class="font-weight-bold">{{ item.name }}</span>
                </div>
              </div>
            </div>
          </td>
          <td class="text-right">
            {{ item.qtyCus }}
          </td>
          <td class="text-right">
            {{ item.price }}
          </td>
          <td class="text-right">
            {{ item.deposit_price }}
          </td>
          <td class="text-right">
            {{ item.startDay }}
          </td>
          <td class="text-right">
            <DataPicker 
              @date-end="dataEnd"
              :label="labelStart"
              :value="item.endDay"
              outlined
            />
          </td>         
        </tr>
      </tbody>
    </table>
    <div class="wrapTotalBy">
      <div class="title">Tổng Tiền Cọc:</div>
      <div class="value">{{ calcCoc }} VNĐ</div>
    </div>
    <div class="wrapTotalBy">
      <div class="title">Tổng Tiền Thuê:</div>
      <div class="value">{{ calcThue }} VNĐ</div>
    </div>
  </div>
</template>

<script>
import DataPicker from "../DatePicker/index.vue"
export default {
  components: {
    DataPicker
  },
  props: {
    dataBy: {
      type: Array,
      default: () => [],
    },
    dataStatus: String,
    calcThue: Number,
    calcCoc: Number,
  },
  data() {
    return {
      status: '',
      changeDate:''
    };
  },
  methods: {
    dataEnd(e) {
      this.changeDate = e
    }
  },
  computed: {},
  watch: {
    status(newValue) {
      this.$emit('update-status', newValue)
    },
    changeDate(newValue) {
      this.$emit('update-date-time', newValue)
    }
  },
  created() {
    this.status =  this.dataStatus
  }
};
</script>

<style lang="scss" scoped>
.status{
    float: right;
    width: 30%;
    height: min-content;
}
.table {
  width: 100%;
  tbody {
    tr {
      td {
        .active-project {
          .h-avatar {
            margin: 0 10px 0 0;
            .avatar {
              height: 70px;
              width: 70px;
            }
          }
        }
      }
    }
  }
}
.wrapTotalBy {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  .value {
    font-size: 32px;
    font-weight: bolder;
    margin: 0 0 0 20px;
  }
}
</style>
