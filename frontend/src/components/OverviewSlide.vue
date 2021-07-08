<template>
  <div>
    <v-card
      elevation="24"
      max-width="444"
      class="mx-auto"
    >
      <v-system-bar lights-out></v-system-bar>
      <v-carousel
        :continuous="false"
        
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="300"
      >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          
          height="100%"
          tile
        >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </v-row>
        </v-sheet>
      </v-carousel-item>
      </v-carousel>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>Author</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch
              v-model="cycle"
              label="Cycle Slides"
              inset
            ></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name: "OverviewSlide",
    data: () => ({
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
        ],
    }),
    methods: {

    },
})
</script>