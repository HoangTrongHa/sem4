<template>
    <div>
        <div class="gallery-list">
            <v-row>
                <v-col
                        cols="4"
                        sm="4"
                        v-for="(item,index) of propData" :key="index"
                        class="wrap-gallery-item"
                >
                    <div class="gallery-item">
                        <img :src="item.img">
                        <div class="gallery-infos">
                            <div class="gallery-title">
                                {{ item.name }}
                            </div>
                            <div class="gallery-meta">
                                {{ item.create_at }}
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            propData: [],
        },
    }
</script>

<style scoped lang="scss">
    .gallery-list {
        margin: 100px 0 0 0;

        .wrap-gallery-item {
            margin: 30px 0;

            .gallery-item {
                .gallery-infos {
                    .gallery-title {
                        color: #33353b;
                        font-size: 20px;
                        font-weight: 700;
                    }

                    .gallery-meta {
                        color: #cfaf7d;
                        font-size: 14px;
                    }
                }
            }
        }
    }

</style>