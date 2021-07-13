<template>
<div>
  <Banner />
  <div class="site-inner">
    <div class="home-about">
      <v-container class="wrap-content">
        <div class="product-section-sub-title">
          Định hướng và mục tiêu - Our path and objective
        </div>
        <div class="product-section-title">
          CÔNG TY CỔ PHẦN Ối Zồi Ôi
        </div>
        <v-row>
          <v-col class="item-home-about"
          cols="6"
          sm="6"
          >
            <div class="ab-image">
              <img src="../assets/home-about.jpg" alt="CÔNG TY CỔ PHẦN Ỷ VÂN HIÊN">
            </div>
          </v-col>
          <v-col class="item-home-about"
          cols="6"
          sm="6"
          >
            <div class="about-exept">
               Khôi phục lại những nét văn hóa cổ truyền đã bị mai một của nước nhà
            </div>
            <div class="about-content">
              <p>Trong những nỗ lực khôi phục lại những nét văn hóa cổ truyền đã bị mai một của nước nhà, 
                Công ty cổ phần Ỷ Vân Hiên đã ra đời. 
                Nền văn hóa cổ truyền Việt Nam bao gồm những tinh hoa cô đúc nghìn năm là điều đáng trân quý. 
                Chúng tôi tin rằng hiểu được quá khứ mới hiểu được hiện tại và xa hơn là sẽ tìm thấy hướng đi ở tương lai.
              </p>
              <p>
                Với đội ngũ trẻ chuyên nghiệp, bằng kiến thức và lòng nhiệt thành cùng với sức sáng tạo, Ỷ Vân Hiên tiến hành nghiên cứu chuyên sâu vào các lĩnh vực nghệ thuật (Văn học, âm nhạc, kiến trúc, hội họa, điêu khắc), trang phục, ẩm thực và các nghi lễ truyền thống trong cung đình và dân gian nhằm thương mại hóa, phục vụ phổ quát cho du lịch và cộng đồng, giúp cho những nét đẹp đó đến được với công chúng trong và ngoài nước.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="home-video">
      <v-container class="wrap-content">
        <v-row
         class="wrap-video"
        >
          <v-col class="video-description"
          cols="6"
          sm="6"
          >
            <p>
              <em>
              <span style="color: #000573; font-size: 25px;">Video giới thiệu Ỷ Vân Hiên trên sóng truyền hình VTV năm 2021
              </span>
              </em>
            </p>
            <p>
              Trong những nỗ lực khôi phục lại những nét văn hóa cổ truyền đã bị mai một của nước nhà, Công ty cổ phần Ỷ Vân Hiên đã ra đời. Nền văn hóa cổ truyền Việt Nam bao gồm những tinh hoa cô đúc nghìn năm là điều đáng trân quý. Chúng tôi tin rằng hiểu được quá khứ mới hiểu được hiện tại và xa hơn là sẽ tìm thấy hướng đi ở tương lai.
            </p>
          </v-col>
          <v-col class="video-embed"
          cols="6"
          sm="6"
          >
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/5cpEO1RQsXc" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              >
            </iframe>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="home-product">
      <v-container
        class="wrap-content"
      >
        <div class="product-section-sub-title">
          Phục hồi và phát huy - Restore and Develop
        </div>
        <div class="product-section-title">
          Sản phẩm - những giá trị văn hóa
          {{  product_hot.lenght }}
        </div>
        <VueSlickCarousel 
          class="wrap-owl"
<<<<<<< HEAD
          v-bind="settings"
=======
          :arrows="true" 
          :dots="true"
          :slidesToShow="4"
          :autoplaySpeed="3000"
          :margin="50"
          :accessibility="true"
          :swipeToSlide	="true"
          :slidesToScroll="2"
          v-if="product_hot.length > 0"
>>>>>>> test_2021
        >
          <div 
            class="wrap-item-product"
            v-for="item of product_hot" :key="item.id"

          >
            <div class="wrap-img">
              <img 
                :src="item.img"
              />
            </div>
            <div class="wrap-title">
              <div>
                {{ item.name }}
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </v-container>
    </div>
    <div class="overview-slide">
      <OverviewSlide />
    </div>
    <div class="news-wrapper">
      <News />
    </div>
    <div class="black-logo">
      <img src="http://yvanhien.com/wp-content/uploads/bfi_thumb/YVH-logo-nền-đen-p5b3r9blwnimtnmhzdlx6s3aws3yzqol4in19gb77e.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
  import Banner from "@/components/SliderComponent.vue"
  import OverviewSlide from "@/components/OverviewSlide.vue"
  import News from '@/components/News.vue'
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'Home',
    components: {
      Banner,
      VueSlickCarousel,
      OverviewSlide,
      News
      // carousel
    },
    data: () => ({
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        touchThreshold: 5,
      }
    }),
    computed: {
      product_hot() {
        return this.$store.state.products.filter(items => items.status === `HOT`)
      }
    },
    mounted() {
      this.$store.dispatch('getBanner');
      this.$store.dispatch('getHotProduct')
      this.$store.dispatch('getAllProduct')
    }
  }
</script>

<style lang="scss" scoped>
  .site-inner {
    .wrap-content {
      @media (min-width: 1904px) {
          max-width: 1300px;
      }
      .wrap-video {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .row {
        .item-home-about {
          .ab-image {
            background: url(../assets/ab-img-bg.png);
            padding: 0 30px 30px 0;
            position: relative;
          }
          .about-exept {
            color: #333;
            font-size: 25px;
            line-height: 1.2;
            margin: 0 0 20px;
            font-style: italic;
            font-weight: 500;
          }
          .about-content {
            color: #777;
            font-size: 14px;
            line-height: 1.8;
            font-weight: 500;
            text-align: justify;
            margin-bottom: 60px;
          }
        }
        .video-description {
          text-align: justify;
        }
      }
    }
    .home-about {
      background: url(../assets/backgroud.jpg) repeat center;
      background-image: url(../assets/backgroud.jpg);
      background-size: cover;
      padding: 120px 0 0;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: -259px;
        background: url(../assets/topbg3.png) repeat-x center;
        background-size: 100% auto;
        height: 524px;
        width: 559px;
        opacity: .5;
      }
      &::after {
        content: "";
        display: block;
        background: url(../assets/ab-bg-bottom.jpg) repeat-x center #fff;
        background-size: cover;
        height: 104px;
        width: 100%;
      }
      .product-section-sub-title {
        color: #777;
        font-size: 14px;
        text-align: center;
        font-weight: 400; 
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .product-section-title {
        color: #000572;
        font-family: "Times New Roman";
        font-size: 38px;
        margin-bottom: 80px;
        text-align: center;
        text-transform: uppercase;
      }
    }
   .home-video {
      margin-top: 70px;
    }
    .home-product {
      padding-top: 90px;
      .product-section-sub-title {
        color: #777;
        font-size: 14px;
        text-align: center;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .product-section-title {
        color: #000572;
        font-family: "Times New Roman";
        font-size: 38px;
        margin-bottom: 80px;
        text-align: center;
        text-transform: uppercase;
      }
      .sticky-products {
        width: 100%;
               
      }
    }
    .wrap-owl {
      padding: 10px;
      border: 15px solid transparent;
      .wrap-item-product {
        display: block !important;;
        .wrap-img {
          width: 100%;
          display: flex !important;
          justify-content: center;
          padding: 30px 0;
          border: 10px solid transparent;
        }
        .wrap-title {
          width: 100%;
          display: flex;
          justify-content: center;
          div {
            text-transform: uppercase;
            font-weight: 700;
            color: #000573;
            font-family: "Times New Roman";
            font-size: 14px;
          }
        }
        &:hover {
          cursor: pointer;
          border: 1px solid #000572;
        }
    }
    }
    .news-wrapper {
      text-align: center;
      margin-top: 3%;
    }
    .black-logo {
      margin: 3% 0;

      img {
        width: 100%;
      }
    }
  }
  
</style>