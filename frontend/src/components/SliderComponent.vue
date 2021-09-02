<template>
    <div class="banner">
        <v-carousel
                cycle
                height="600"
                hide-delimiter-background
                show-arrows-on-hover
                class="wrap-slider"
        >
            <v-carousel-item class="itemBanner"
                             v-for="(slide, i) in bannerList"
                             :key="i"
                             :src="slide.base64"
            >
            </v-carousel-item>
        </v-carousel>
        <div class="topright-bg2">
            <img src="../assets/topbg2.png" alt="">
        </div>
    </div>

</template>

<script>
    export default {
        computed: {
            bannerList() {
                return this.$store.state.banner
            }
        },
    }
</script>

<style lang="scss" scoped>
    .banner {
        width: 100%;
        position: relative;

        .wrap-slider {
            .v-window__container {
                .v-window-item {
                    .v-responsive__sizer {
                        .v-image__image {
                            background-size: auto !important;
                        }
                    }
                }
            }
        }

        .topright-bg2 {
            position: absolute;
            left: 0;
            bottom: -205px;
            z-index: 3;
        }
    }
</style>