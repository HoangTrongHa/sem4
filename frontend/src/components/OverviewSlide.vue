<template>
  <div>
    <v-card
      elevation="24"
      class="mx-auto bg"
    >
      <v-carousel
        :cycle="true"
        :continuous="false"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="455.3"
        class="wrapper"
      >
        <v-carousel-item
          v-for="(paragraph, index) in overview_infor"
          :key="index"
        >
          <v-sheet
            color="black"
            class="overview-content"
            height="110%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="paragraph">
                {{ paragraph.paragraph }}
                <br>
                <br>
                <br>
                <p>{{ paragraph.author }}</p>
                
                <div class="logo">
                  <img :src="paragraph.img" alt="">
                </div>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
export default Vue.extend({
    name: "OverviewSlide",
    data: () => ({
    }),

    computed: {
      ...mapState(["overview_infor"])
    },

    mounted() {
      this.getOverview()
    },

    methods: {
      ...mapActions(["getOverview"])
    },
})
</script>

<style scoped>
.bg {
  z-index: 1;
  background: url('http://yvanhien.com/wp-content/uploads/2018/08/fd720016cd19091e2a916dbdbdbd8658518d670f17c6e-PpbUL4_fw658.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  padding: 90px 8%;
  margin-top: 200px;
  height: 455.3px;
}

.wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.overview-content {
  color: #fff;
  font-size: 18px
}

.paragraph {
  width: 83%;
  font-size: 18px;
  position: absolute;
  top: 17%;
}

.logo {
  position: relative;
  left: 43%;
  width: 213px;
  height: 76px
}

.logo img {
  width: 100%;
}

>>> .v-carousel__controls {
  position: absulote;
  top: 0;
}
</style>