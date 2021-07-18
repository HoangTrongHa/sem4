<template>
    <div id="wrapper">
      <div class="title">
        <h2>LIÊN HỆ</h2>
        <div class="under-line"></div>
      </div>
      
      <div class="contact" v-for="store in store_contact" :key="store.id" >
        <div class="store-contact" >
          <icon class="map-icon" name="map-marker-alt" size="20px"/>
          <p>
            {{ store.address }}
          </p>
        </div>
        <div class="store-contact">
            <icon class="map-icon" name="envelope" color='#000' size="20px"/>
            <p>
              {{ store.email }}
            </p>
        </div> 
        <div class="store-contact">
            <icon class="map-icon" name="mobile-alt" size="20px"/>
            <p>
              {{ store.phone_number }}
            </p>
        </div>  
      </div>
      <br>
      <div class="social-media">
        <h4>Social media: </h4> <icon id="facebook" name="facebook-f" size="15px"/>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend ({
  name: 'Contact',
  data: ()  => ({
      
  }),
  computed: {
    ...mapState(['store_contact'])    
  },
  mounted() {
    this.getStoreContact()
  },
  methods: {
    ...mapActions(['getStoreContact'])
  }
})
</script>

<style scoped>
#wrapper {
  width: 30%;
  height: 300px;
}

.title {
  color: #000573;
}

.store-contact {
  display: flex;
}

.store-contact > span {
  font-size: 14px;
  text-align: left;
}

.map-icon {
  margin-right: 20px; 
}

.under-line {
  width: 65px;
  height: 3px;
  content: "";
  display: block;
  background: #5c5c5c;
  margin: 15px 0 60px;
}

.social-media {
  display: flex;
  align-items: center;
}

.social-media #facebook {
  margin-left: 30px;
}
</style>