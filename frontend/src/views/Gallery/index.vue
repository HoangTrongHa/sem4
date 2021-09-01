<template>
    <div>
        <BaseBanner>
            <template v-slot:title>
                GALLERY & LOOKBOOK
            </template>
        </BaseBanner>
        <v-container class="gallery">
           
            <div class="gallery__category">
               <CustomProgressPagerContainer :tabs="stepsConfig">
                  <router-view />
               </CustomProgressPagerContainer>
            </div>
        </v-container>
    </div>
</template>

<script>
    import BaseBanner from '@/components/base/Banner.vue'
    import CustomProgressPagerContainer from '@/components/base/CustomProgressPagerContainer.vue'
    export default {
        data () {
            return{
              
            }
        },
        components: {
            BaseBanner,
            CustomProgressPagerContainer
        },
        computed: {
            getCategories() {
                return this.$store.state.categories
            },
            stepsConfig() {
                return [
                    {
                        id: 1,
                        name: "All",
                        route: {
                            name: "All"
                        }
                    },
                    {
                        id: 2,
                        name: "Áo Dài",
                        route: {
                            name: "Dress"
                        }
                    },
                    {
                        id: 3,
                        name: "Gối Xếp Cổ",
                        route: {
                            name: "NeckPillow"
                        }
                    },
                    
                    {
                        id: 4,
                        name: "Nhật Dụng",
                        route: {
                            name: "Japan"
                        }
                    },
                    {
                        id: 4,
                        name: "Phụ Kiện",
                        route: {
                            name: "Accessory"
                        }
                    },
                    {
                        id: 5,
                        name: "Sự Kiện",
                        route: {
                            name: "Event"
                        }
                    }, 
                    {
                        id: 6,
                        name: "Trang Phụ Cổ",
                        route: {
                            name: "AntiqueCostume"
                        }
                    }, 
                    {
                        id: 7,
                        name: "Triển Lãm",
                        route: {
                            name: "Exhibition"
                        }
                    }
                ]
            }
        },
        mounted() {
            this.$store.dispatch('getGallery');
        }
    }
</script>

<style lang="scss" scoped>
  @import "@/scss/gallery.scss";
</style>