<template>
  <div class="product-detail">
    <BaseBanner>
      <template v-slot:title>
        SẢN PHẨM – PRODUCTS
      </template>
    </BaseBanner>
    <v-container>
      {{ getProductDetail }}
      <h2>Chi tiết sản phẩm</h2>
      <div class="product">
        <div class="wrapImg">
          <VueSlickCarousel
            v-bind="setting"
            v-if="getProductDetail.list_img.length > 0"
          >
            <div> 
              <img :src="getProductDetail.img">
            </div>
            <div v-for="(items,index) of getProductDetail.list_img" :key="index">
                <img :src="items.base64">
            </div>
          </VueSlickCarousel>
         
        </div>
        <div class="detail">
          <div class="name">
            {{ getProductDetail.name }}
          </div>
          <div class="desc">
            Áo dài nam:<br />
            + Kiểu dáng: Áo dài năm thân cổ đứng cài khuy (áo ngũ thân)<br />
            + Chất liệu: Tùy chọn (Đũi cao cấp, lụa, sa, gấm, đoạn,…)<br />
            + Sản phẩm may đo, tùy chọn màu sắc
          </div>
          <div class="size">
            <div 
              v-for="(items,index) of getProductDetail.size" :key="index"
              :class="(selected === items.id) ? `size-item active` : `size-item`"
              @click="findSizeQty(items)"
            >
              {{ items.size }}
            </div> 
          </div>
          <div class="wrapChooseQty">
              <v-slider
                v-model="qtyCus"
                color="orange"
                label="Số Lượng"
                hint="Số Lượng Quá Ít"
                min="0"
                :max="getSize.qty"
                thumb-label
              ></v-slider>
          </div>
          <div class="wrap-date-time" v-if="statusToRent != 0">
            <div class="wrapDatePicker">
                  <DataPicker 
                  @date-start="dataStart"
                  :label="labelStart"
                  />
                </div>
                <div class="wrapDatePicker">
                  <DataPicker 
                  @date-start="dateEnd"
                  :label="labelEnd"
                  />
                </div>
          </div>
          <div class="wrap-Button">
            <div class="button">
              <v-btn
                depressed
                color="cyan"
                outlined
                :disabled="disableStatusBy"
                @click="doWantBuy"
              >
                Tôi Muốn Mua
              </v-btn>
            </div>
            <div class="button">
              <v-btn
                depressed
                color="purple"
                :disabled="disableButtonToRent"
                outlined
                @click="doWantRent"
              >
                Tôi Muốn Thuê
              </v-btn>
            </div>
            <div class="button">
              <v-btn
                depressed
                color="error"
                :disabled="disableAddToCart"
                @click="addToCart()"
                v-if="statusToRent == 0"
              >
                Thêm vào giỏ hàng Mua
              </v-btn>
               <v-btn
                depressed
                color="error"
                :disabled="disableAddToCart"
                @click="thue()"
                v-else
              >
                Thêm vào giỏ hàng Thuê
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <div class="title">
          MÔ TẢ
        </div>
        <div class="content">
          Tên sản phẩm: Áo dài nam năm thân cổ đứng Trang phục phản ánh lịch sử,
          như vậy sẽ phản ánh cả văn hóa.” Đây là điều mà Ỷ Vân Hiên đã nêu ra
          nhiều lần trong các buổi trò chuyện, trong những bài viết của mình.
          Chính vì vậy, Công ty chúng tôi có một đội ngũ chuyên may đo và thiết
          kế áo dài năm thân (áo ngũ thân) để sao cho mỗi chiếc áo ra đời đều là
          lựa chọn phù hợp nhất. Áo dài nam năm thân cổ đứng sang trọng, cao cấp
          có phần thân áo rất rộng, không chiết eo và thân áo càng lượn xuống
          thì càng rộng. Khi trải chiếc áo ngũ thân ra, tà áo tạo ra một đường
          cong (sa tà), năm thân áo may ráp lại với nhau theo chiều dọc, hai
          thân trước và sau được may liền lại theo đường sống áo ở chính giữa,
          phía trước phần bên phải là thân kép, bên trong có một “thân con”,
          được tính là thân áo thứ năm. Tay áo ngũ thân không được ráp trực tiếp
          vào bả vai như thường thấy mà được may nhờ vào phần vải dùng để làm
          thân áo, kéo dài tới nửa cánh tay, sau đó mới dùng một phần vải khác
          nối vào làm ống tay áo. Do đó, nách áo rất rộng, chỉ bó lại ở phần cổ
          tay, trái với nách áo cách tân bó sát giúp người mặc cảm thấy thoải
          mái khi vận động. Về khuy áo, áo ngũ thân chỉ sử dụng khuy cài chứ
          không dùng khuy bấm. Có một thời, vào những năm 30 của thế kỷ XX,
          những chiếc khuy bấm trên áo dài cách tân nói riêng và các loại áo
          “tân thời” nói chung đã khiến lớp người đi trước không hài lòng vì cho
          rằng những chiếc khuy bấm dễ bung đó là một biểu hiện của sự thiếu
          đứng đắn, lai căng, xa rời truyền thống. Cuối cùng, chất liệu và màu
          sắc trên áo ngũ thân được phân biệt dựa theo tầng lớp trong xã hội.
          Đối với tầng lớp bình dân, chất liệu may áo chủ yếu là đũi, màu sắc đi
          theo tông trầm như nâu, đen…
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import BaseBanner from "@/components/base/Banner.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import DataPicker from '../../../components/base/Datepicker.vue'

import Vue from 'vue'
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
});
export default {
  components: {
    BaseBanner,
    DataPicker,
    VueSlickCarousel,
  },
  data() {
    return {
      detail: {},
      qtyCus: '',
      selected: 0,
      getSize: {},
      startDay:'',
      endDay: '',
      statusToRent: 0,
      disableStatusRent: 0 ,
      disableStatusBy:false,
      disableAddToCart: true,
      disableButtonToRent: false,
      labelStart:'Thuê Từ Ngày',
      labelEnd: 'Ngày Trả',
      focusOnSelect: true,
      TotalQty: 0
    };
  },
  computed: {
    getProductDetail() {
      return this.$store.state.products.find(
        (item) => item.id === this.$route.params.params
      );
    },
    setting() {
      return {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    },
  },
  methods: {
    dataStart(e) {
      this.startDay = e
      console.log( this.startDay);
    },
    dateEnd(e) {
      this.endDay = e
      console.log( this.endDay);

    },
    findSizeQty(size) {
      this.selected = size.id
      this.getSize = size
    },
    addToCart() {
      var value = {
          id:this.getProductDetail.id,
          name:this.getProductDetail.name,
          price:this.getProductDetail.price,
          // TotalPrice: this.TotalQty,
          qtyCus: this.qtyCus,
          img: this.getProductDetail.img,
          size: this.getSize,
          startDay: this.startDay,
          endDay: this.endDay,
          service: '',
      }
      if (value.size.id === undefined ) {
        this.$toast.error(`Hãy Chọn Kích Thước Mà Quý Khách Muốn`);    
      }
      if (value.qtyCus === 0 ||  value.qtyCus <= 0) {
        this.$toast.error(`Hãy Chọn Số Lượng Mà Quý Khách Muốn`);    
      }
    },
    thue() {
      var checkCart = JSON.parse(localStorage.getItem('thue')) || [];
      var value = {
          id:this.getProductDetail.id,
          name:this.getProductDetail.name,
          price:this.getProductDetail.price_to_rent,
          // TotalPrice: this.TotalQty,
          qtyCus: this.qtyCus,
          img: this.getProductDetail.img,
          size: this.getSize,
          startDay: this.startDay,
          endDay: this.endDay,
          service: '',
          deposit_price: this.getProductDetail.price
      } 
      if (value.size.id === undefined ) {
        this.$toast.error(`Hãy Chọn Kích Thước Mà Quý Khách Muốn`);    
      }
      if (value.qtyCus === 0 ||  value.qtyCus <= 0) {
        this.$toast.error(`Hãy Chọn Số Lượng Mà Quý Khách Muốn`);    
      }
      if (this.statusToRent == 1) {
        value.service = 'Thuê'
      } else {
        value.service = 'Mua'
      }
      let duplicate = checkCart.find(items => items.id == value.id)
      if ( duplicate !== undefined) {
        let found = checkCart.filter(items => items.id !== value.id)
        duplicate.qtyCus += this.qtyCustomer
        localStorage.removeItem("thue")
        found.push(duplicate)
        localStorage.setItem("thue",JSON.stringify(checkCart))
        this.$store.dispatch('getThue',checkCart);
      } else {
        checkCart.push(value)
        this.$store.dispatch('getThue',checkCart);
        localStorage.setItem("thue",JSON.stringify(checkCart))
      }
      this.$toast.success(`Kiểm Tra Lại Trong Giỏ Hàng`);    
    },
    doWantBuy () {
      if (this.selected === 0 ) {
        this.$toast.error(`Hãy Chọn Kích Thước Mà Quý Khách Muốn`);    
      } else if(this.qtyCus === 0) {
        this.$toast.error(`Hãy Chọn Số Lượng Mà Quý Khách Muốn`);    
      } else {
        this.disableStatusBy = true
        this.disableButtonToRent = false
        this.disableAddToCart = false
      }
    },
    doWantRent() {
     if (this.selected === 0 ) {
        this.$toast.error(`Hãy Chọn Kích Thước Mà Quý Khách Muốn`);    
      } else if(this.qtyCus === 0) {
        this.$toast.error(`Hãy Chọn Số Lượng Mà Quý Khách Muốn`);    
      } else {
        this.statusToRent = 1
        this.disableStatusBy = false
        this.disableButtonToRent = true
        this.disableAddToCart = false
      }
    },
  },
  created() {
      if (this.getProductDetail.to_rent == 1) {
        this.disableButtonToRent = false
      } else {
        this.disableButtonToRent = true
      }
    }
};
</script>

<style lang="scss" scoped>
@import "@/scss/ProductDetail.scss";
</style>
