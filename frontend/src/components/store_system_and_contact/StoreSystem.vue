<template>
        <div id="wrapper">
            <div class="title">
                <h2>HỆ THỐNG CỬA HÀNG</h2>
                <div class="under-line"></div>
            </div>
            <div class="address-system" v-for="store in store_system" :key="store.id">
                <icon class="map-icon" name="map-marker-alt" size="20px"/>
                <p>
                    {{store.address}}
                </p>
            </div> 
        </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex'
export default Vue.extend({
    name: "StoreSystem",
    data: () => ({

    }),
    computed: {
        ...mapState(['store_system'])    
    },
    mounted() {
        this.getStoreSystem()
    },
    methods: {
        ...mapActions(['getStoreSystem'])
    }
})
</script>

<style scoped>
#wrapper {
    width: 70%;
    height: 300px;
    padding-left: 8%;
}

.title {
  color: #000573;
}

.address-system {
    display: flex;
}

.address-system > span {
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
</style>