<template>
<v-row justify="center">
    <v-dialog :value="dialog" max-width="1000" input="updateDialog">
      <v-card>
        <v-card-title class="text-h5">Thêm Vào Giỏ Hàng</v-card-title>
            <v-spacer></v-spacer>
            <div class="wrap-cart">
              <div class="wrap-img">
                <img :src="getDataProduct.img" alt="">
              </div>
              <div class="wrap-infor-product">
                <p class="name-product">{{ getDataProduct.name }}</p>
                <div class="price">{{ getDataProduct.price }}</div>
                <div class="title-size">
                  Chọn size
                </div>
                <div class="item-size">
                  <ul class="wrap-item-size">
                    <li 
                      v-for="size of getDataProduct.size" 
                      :key="size.id"
                      @click="findSizeQty(size)"
                      :class="{active :selected == size.id}"
                      >
                      <span>{{ size.size }}</span>
                    </li>
                  </ul>
                </div>
                <div class="wrapQuantity">
                  <v-text-field 
                  type="number" 
                  label="Số Lượng Hiện Có"
                  v-model="getSize.qty"
                  outlined
                  :class="isActive == true ? 'notNone' : 'disnone'"
                  disabled
                  >
                  </v-text-field>
                   <v-slider
                      v-model="form.age"
                      :rules="rules.age"
                      color="orange"
                      label="Age"
                      hint="Be honest"
                      min="1"
                      max="100"
                      thumb-label
                    ></v-slider>
                </div>
              </div>
            </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="updateDialog(false)">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text > Thêm sản phẩm vào giỏ hàng </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from 'vue'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
Vue.use(VueToastr2)
window.toastr = require('toastr')

export default {
    data() {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        bio: '',
        favoriteAnimal: '',
        age: null,
        terms: false,
      })
      return {
         getSize: {},
         selected: Number,
         isActive: false,
         CustomerQty: String,
         totalMoney: Number,
         form: Object.assign({}, defaultForm),
          rules: {
          age: [
            val => val < 10 || `I don't believe you!`,
          ],
          animal: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
        },
      }
    },
    props: {
        dialog: Boolean,
        getDataProduct: {}
    },
    methods: {
      updateDialog(item) {
          this.$emit('update-dialog', item)
      },
      findSizeQty(size) {
        this.getSize = size
        this.selected = size.id
        this.isActive = true;
      },
      totalMoney() {
        
      }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
  .disnone {
    display: none;
  }
  .wrap-cart {
    width: 80%;
    display: flex;
    margin: 0 auto;
    .wrap-infor-product {
      width: 70%;
      margin: 0 0 0 30px;
      .name-product {
        font-size: 22px;
        font-weight: bolder;
      }
      .price {
        font-size: 25px;
        font-weight: bolder;
      }
      .title-size {
        font-size: 18px;
        font-weight: bolder;
      }
      .item-size {
        .wrap-item-size {
          width: 100%;
          margin: 0 auto;
          display: flex;
          li {
            width: 15%;
            list-style: none;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid;
            margin: 2.5px;
            font-size: 18px;
            font-weight: bold;
            &:hover {
              background: black;
              color: white;
            }
          }
          .active {
            background: black;
            color: white;
          }
        }
      }
      .wrapQuantity {
        margin: 50px 0 0 0;
        width: 35%;
      }
    }
  }
</style>