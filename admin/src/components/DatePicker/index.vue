<template>
  <v-row class="wrap-row">
    <v-col
    cols="5"
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            :label="label"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="save()"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
   
   
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      date: '',
      menu: false,
      modal: false,
      menu2: false,
    }),
    props: {
        label: String,
        value: String
    },
    methods: {
        save() {
            this.$refs.menu.save(this.date)
            this.$emit('date-end', this.date)
        }
    },
    created() {
      this.date = this.value
    }
  }
</script>

<style lang="scss" scoped>
  .wrap-row {
    display: flex;
    justify-content: center;
  }
</style>