<template>
  <div class="product-detail">
    <BaseBanner>
      <template v-slot:title>
        SẢN PHẨM – PRODUCTS
      </template>
    </BaseBanner>
    <v-container>
      <h2>Chi tiết sản phẩm</h2>
      <div class="product">
        <div class="wrapImg">
          <img
            class="mainImg"
            src="http://yvanhien.com/wp-content/uploads/bfi_thumb/IMG_5298-copy-o4t3twh06upyiznaeixvkagk3je6tz35u19xox65g8.jpg"
            alt=""
          />
          <div class="supImg">
            <img
              src="http://yvanhien.com/wp-content/uploads/bfi_thumb/IMG_5298-copy-o4t3twh06upyiznaeixvkagk3je6tz35u19xox65g8.jpg"
              alt=""
            />
            <img
              src="http://yvanhien.com/wp-content/uploads/bfi_thumb/IMG_5298-copy-o4t3twh06upyiznaeixvkagk3je6tz35u19xox65g8.jpg"
              alt=""
            />
            <img
              src="http://yvanhien.com/wp-content/uploads/bfi_thumb/IMG_5298-copy-o4t3twh06upyiznaeixvkagk3je6tz35u19xox65g8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="detail">
          <div class="name">Áo dài nam năm thân cổ đứng</div>
          <div class="desc">
            Áo dài nam:<br />
            + Kiểu dáng: Áo dài năm thân cổ đứng cài khuy (áo ngũ thân)<br />
            + Chất liệu: Tùy chọn (Đũi cao cấp, lụa, sa, gấm, đoạn,…)<br />
            + Sản phẩm may đo, tùy chọn màu sắc
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
export default {
  components: {
    VueSlickCarousel,
    BaseBanner,
  },
  data() {
    return {
      detail: {},
    };
  },
  computed: {
    getProductDetail() {
      return this.$store.state.products.find(
        (item) => item.id === this.$route.params.params
      );
    },
  },
  created() {
    console.log(this.$route.params.params);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/ProductDetail.scss";
</style>
