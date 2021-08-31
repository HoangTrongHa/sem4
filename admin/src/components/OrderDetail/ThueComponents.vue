<template>
  <div>
    <div class="status"
      v-show="countLenghtBuy > 0"
    >
      <v-select
        :items="items"
        label="Chuyển Trạng Thái"
        outlined
        v-model="status"
      >
      </v-select>
    </div>
    <table class="table mb-0">
      <thead>
        <tr class="text-muted">
          <th scope="col">Tên Sản Phẩm</th>
          <th scope="col" class="text-right">Số Lượng</th>
          <th scope="col" class="text-right">Giá Thuê</th>
          <th scope="col" class="text-right">Giá Cọc</th>
          <th scope="col" class="text-right">Ngày Thuê</th>
          <th scope="col" class="text-right endDay">Ngày Trả</th>
          <th scope="col" class="text-right endDay">Số Ngày Thuê</th>
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
          <td class="text-right" >
            {{ item.startDay }}
          </td>
          <td class="text-right">
            <DataPicker
              @date-end="dataEnd"
              :value="item.endDay"
              :id="item.id"
            />
          </td>
          <td class="text-center">
            {{ Math.floor(( new Date(item.endDay) - new Date(item.startDay)) / (1000 * 60 * 60 * 24)) }}
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
import DataPicker from "../DatePicker/index.vue";
export default {
  components: {
    DataPicker,
  },
  props: {
    dataBy: {
      type: Array,
      default: () => [],
    },
    dataStatus: String,
    calcThue: Number,
    calcCoc: Number,
    countLenghtBuy: Number
  },
  data() {
    return {
      status: "",
      changeDate: "",
      items: [
        {
          id: 1,
          text: "Xác Nhận Đơn Thuê",
        },
        {
          id: 2,
          text: "Giao Thành Công",
        },
        {
          id: 3,
          text: "Khách Từ CHối Nhận Hàng",
        },
        {
          id: 4,
          text: "Đơn Hàng Lỗi",
        }
      ],
      getId: null
    };
  },
  methods: {
    dataEnd(e, id) {
      this.changeDate = e;
      this.getId = id;
    },
    getIdFun(id) {
      console.log(id);
    },
    // calcDate(endDay, startDay) {
    //   var date = new Date(startDay);
    //   var dateEnd = new Date(endDay);
    //   var currentDay = Math.round((dateEnd-date)/(1000*60*60*24));
    //   return currentDay
    // }
  },
  watch: {
    status(newValue) {
      this.$emit("update-status", newValue);
    },
    changeDate(newValue) {
      console.log(newValue);
      this.$emit("update-date-time", this.changeDate, this.getId);
    },
  },
  created() {
    this.status = this.dataStatus;
  },
};
</script>

<style lang="scss" scoped>
.status {
  float: right;
  width: 30%;
  height: min-content;
}
.table {
  width: 100%;
  thead{
    tr{
      .endDay{
        text-align: center !important;
      }
    }
  }
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
