<template>
  <div class="wrapper">
    <p>TIN TỨC - NEWS</p>
    <p>Ỷ VÂN HIÊN</p>
    <VueSlickCarousel v-bind="settings" :key="news.length">
      <div 
        class="new"
        v-for="item of news" :key="item.id"
      >
        <div class="new-img">
          <img :src="item.img" alt="">
        </div>
        <div class="new-title">
          <span><a href="">{{ item.title }}</a></span>
        </div>
        <div class="new-author">
          <span>{{ item.date }}</span>
          <span>{{ item.author }}</span>
        </div>
        <div class="new-summary">
          <span>{{ item.summary }}</span>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapState, mapActions } from 'vuex'
export default Vue.extend({
    name: "News",
    components: {
        VueSlickCarousel,
    },
    data: () => ({
      settings: {
          dots: true,
          lazyLoad: "ondemand",
          focusOnSelect: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          touchThreshold: 5
      }, 
      items : []
    }),
    computed: {
      ...mapState([ 'news' ])
    },
    mounted() {
      this.getNews()
    },
    methods: {
      ...mapActions([ 'getNews' ]),
    }

})
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  margin: auto;

  p:nth-child(1) {
      font-size: 14px;
      color: #777;
  }

  p:nth-child(2) {
      font-weight: 400;
      font-size: 38px;
  }

  .new {

    .new-title {
      width: 80%;
      text-align: left;
      font-size: 16px;
      font-weight: 700;
      color: #333;
      line-height: 1.2;
      margin: 25px 0;

      a {
        text-decoration: none;
        color: black;
      }
    }

    .new-img img {
      width: 80%;
    }

    .new-author {
      font-size: 14px;
      color: #666;
      text-align: left;

      span#author {
        color: black;
      }
    }

    .new-summary {
      text-align: left;
      margin-top: 3%;
      width: 80%
    }
  }
}
</style>
