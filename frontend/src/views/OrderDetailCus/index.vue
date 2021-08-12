<template>
  <div class="container-fluid px-4">
    <h1 class="mt-4">Chi Tiết Đơn Hàng</h1>
    <v-row style="justify-content:center">
      <div class="order-detail">
        <div class="info-detail">
          <div class="order-info">
            <h3>Thông tin đơn hàng</h3>
            <div class="order-detail-item">
              <div class="order-detail-item-title">ID</div>
              <div class="data">#05504</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Thời gian đặt hàng</div>
              <div class="data">09:15:06, 13/8/2021</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Hình thức thanh toán</div>
              <div class="data">COD</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Ghi chú của khách hàng</div>
              <div class="data"></div>
            </div>
          </div>
          <hr />
          <div class="user-info">
            <h3>Thông tin khách hàng</h3>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Tên người đặt hàng</div>
              <div class="data">nghia</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Tên người nhận hàng</div>
              <div class="data">nghia</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Số điện thoại</div>
              <div class="data">000111</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Email</div>
              <div class="data">nghia@gmail.com</div>
            </div>
            <div class="order-detail-item">
              <div class="order-detail-item-title">Địa chỉ nhận hàng</div>
              <div class="data">
                mai dich/Văn Miếu/Cầu Giấy/Hà Nội
              </div>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="wrapByItem">
            <div class="title">Danh sách Đơn Hàng Mua</div>
            <div class="wrapItemGroup" v-if="countLenghtBuy === 0">
              Khong co don hang
            </div>
            <div v-else class="wrapItemGroup">
              <!-- <BuyComponents 
              :dataBy="this.getProductItem.buy"
              :dataStatus="getOrderDetail.statusBuy" 
              @update-status="updateStatusBy"
              /> -->
              <div>
                <div class="status">
                  Đang vận chuyển
                </div>
                <table class="table mb-0">
                  <thead>
                    <tr class="text-muted">
                      <th scope="col">Tên Sản Phẩm</th>
                      <th scope="col" class="text-right">Số Lượng</th>
                      <th scope="col" class="text-right">Giá Tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div
                          class="active-project d-flex align-items-center mt-0 "
                        >
                          <div class="h-avatar is-medium">
                            <img
                              class="avatar rounded"
                              src="http://yvanhien.com/wp-content/uploads/bfi_thumb/NDC_6825-copy-nucvyqyyutm9gdkj796acow2qcz666ncxajozpn2mw.jpg"
                            />
                          </div>
                          <div class="data-content">
                            <div>
                              <span class="font-weight-bold">Đao</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="text-right">
                        3
                      </td>
                      <td class="text-right">
                        199.00
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="wrapTotalBy">
                  <div class="title">Tổng Tiền:</div>
                  <div class="value">568000 VNĐ</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="wrapThueItem">
            <div class="title">Danh sách Đơn Hàng Thuê</div>
            <div class="wrapItemGroup" v-if="countLenghtThue === 0">
              Khong co don hang
            </div>
            <!-- <div v-else class="wrapItemGroup">
              <ThueComponents
                :dataBy="this.getProductItem.thue"
                :calcThue="calcThue"
                :calcCoc="calcCoc"
                :dataStatus="getOrderDetail.statusRent" 
                @update-status="updateStatusThue"
                @update-date-time="updateDateTime"
              />
            </div> -->
            <div>
              <div class="status">
                Đã hoàn thành
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div
                        class="active-project d-flex align-items-center mt-0 "
                      >
                        <div class="h-avatar is-medium">
                          <img class="avatar rounded" src="http://yvanhien.com/wp-content/uploads/bfi_thumb/IMG_0860-o4wa4vb9jhsv3ofcvqrpqe50uf8p7w8398gkqhv7rs.jpg" />
                        </div>
                        <div class="data-content">
                          <div>
                            <span class="font-weight-bold">Áo ngũ thân nữ lụa loan thọ Vạn Phúc</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-right">
                      1
                    </td>
                    <td class="text-right">
                      100000
                    </td>
                    <td class="text-right">
                      499.00
                    </td>
                    <td class="text-right">
                      2021-08-13
                    </td>
                    <td class="text-right">
                      2021-08-16
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="wrapTotalBy">
                <div class="title">Tổng Tiền Cọc:</div>
                <div class="value">568000 VNĐ</div>
              </div>
              <div class="wrapTotalBy">
                <div class="title">Tổng Tiền Thuê:</div>
                <div class="value">1062000 VNĐ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.contaner-fluid{
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

.order-detail {
  display: flex;
  justify-content: center;

  .info-detail {
    width: 35%;
    padding: 20px;
    line-height: 50px;
    .order-info,
    .user-info {
      display: flex;
      flex-direction: column;
      h3 {
        width: 100%;
      }
      .order-detail-item {
        display: flex;
        justify-content: space-between;
        .order-detail-item-title {
          width: max-content;
          color: gray;
        }
        .data {
          width: 60%;
          font-weight: bold;
        }
        .status{
          width: 50%;
          height: min-content;
        }
      }
    }
  }
  
  .product {
    width: 65%;
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
    .button {
      color: #fff;
    }
  }
}
</style>
