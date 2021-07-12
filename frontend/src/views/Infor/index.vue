<template>
    <div>
    <BaseBanner>
        <template v-slot:title>
            Giới Thiệu
        </template>
    </BaseBanner>
    <div class="wrap-infor-company">
            <h1 class="title">
                GIỚI THIỆU VỀ CÔNG TY CỔ PHẦN ỐI ZỜI ƠI
            </h1>
            <v-container>
                <div class="about-content"
                v-for="item of getInforCompany" :key="item.id"
                >
                    <div class="wrapImg">
                        <img 
                        :src="item.base64" alt="">
                    </div>
                    <div class="wrapContent">
                        {{ item.content }}
                    </div>
                </div>
            </v-container>
            <div class="lv-wrap">
                <v-container>
                    <h2 class="title">Lĩnh vực hoạt động chính</h2>
                    <v-row>
                        <v-col
                            cols="4"
                            sm="4"
                            class="lv"
                        >
                            <div class="lv-img">
                                <img src="@/assets/1.png" alt="">
                            </div>
                            <div class="lv-name">Nghiên cứu &amp; phục dựng</div>
                            <div class="lv-desc">Nghiên cứu, phục dựng trang phục truyền thống, các nghi lễ trong cung đình và dân gian.</div>
                        </v-col>
                         <v-col
                            cols="4"
                            sm="4"
                            class="lv"
                        >
                            <div class="lv-img">
                                <img src="@/assets/2.png" alt="">
                            </div>
                            <div class="lv-name">Tái hiện qua nghệ thuật</div>
                            <div class="lv-desc">Đưa những sản phẩm đã qua nghiên cứu, phục dựng tới với công chúng bằng cách tái hiện qua nghệ thuật sân khấu, điện ảnh, văn học và trình diễn.</div>                        </v-col>
                         <v-col
                            cols="4"
                            sm="4"
                            class="lv"
                        >
                            <div class="lv-img">
                                <img src="@/assets/3.png" alt="">
                            </div>
                            <div class="lv-name">Cung cấp sản phẩm & Tư vấn</div>
                            <div class="lv-desc">Cung cấp các sản phẩm văn hóa truyền thống cho thị trường trong và ngoài nước
                            &amp; Tư vấn về lĩnh vực văn hóa
                            </div>  
                         </v-col>              
                     </v-row>
                </v-container>
            </div>
            <div class="vision-wrap">
                <v-container>
                    <div class="vision-title">Tầm nhìn sứ mệnh:</div>
                    <div class="vision-desc">
                        Trong hành trình phục dựng, chấn hưng lại y quan văn vật đã từng xuất hiện trong lịch sử Việt Nam, chúng tôi mong muốn đóng góp một phần vào công cuộc lưu giữ những giá trị truyền thống và hòa mình vào dòng chảy của văn hóa thế giới.
                    </div>
                </v-container>
            </div>
            <div class="founder-section">
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            lg="7"
                        >
                            <div class="founder"> NHÀ SÁNG LẬP</div>
                            <div class="founder-name">HOÀNG TRỌNG HÀ</div>
                            <div class="founder-content"><p>Hoàng Trọng Hà – Nói tới tính ứng dụng của các trang phục cổ xưa trong đời sống đương đại, tôi cho rằng các nhà thiết kế phải hiểu đúng, hiểu đủ tinh hoa truyền thống thì mới cách tân được, đừng để rơi vào tranh luận cho rằng cách tân nhưng lại giống trang phục của các quốc gia khác mà không có những nét đặc trưng riêng của mình. “Phải có người thiết kế đủ tâm và đủ tầm, hiểu trang phục truyền thống đẹp ở đâu để dù có kết hợp những cái mới, kỹ thuật may mới nhưng vẫn giữ được tinh hoa truyền thống trang phục của người Việt. Có như vậy, khi đứng giữa cộng đồng quốc tế, người ta thấy ngay đó là trang phục của người Việt.</p><p>Tôi mong muốn nhận được sự giúp đỡ của cộng đồng yêu văn hóa cổ truyền của dân tộc Việt Nam nói riêng, yêu văn hóa cổ truyền của thế giới nói chung. Bởi hiểu rõ được quá khứ, chúng ta mới có thể xây dựng được hiện tại và hướng tới tương lai. Xây dựng thương hiệu Ỷ Vân Hiên đúng với mục tiêu và khẩu hiệu: Cựu kiến tân, nơi tương lai được kiến tạo từ quá khứ – The future was written by the past.</p><p>
                                <a href="http://yvanhien.com/wp-content/uploads/2018/07/an-trien.jpg">
                                <img 
                                class="alignnone wp-image-374" 
                                src="http://yvanhien.com/wp-content/uploads/2018/07/an-trien-150x150.jpg" 
                                alt="" 
                                width="50" 
                                height="50" 
                                srcset="http://yvanhien.com/wp-content/uploads/2018/07/an-trien-150x150.jpg 150w, http://yvanhien.com/wp-content/uploads/2018/07/an-trien-300x300.jpg 300w, http://yvanhien.com/wp-content/uploads/2018/07/an-trien-600x600.jpg 600w, http://yvanhien.com/wp-content/uploads/2018/07/an-trien-100x100.jpg 100w, http://yvanhien.com/wp-content/uploads/2018/07/an-trien.jpg 612w"
                                sizes="(max-width: 50px) 100vw, 50px">
                                </a>
                                </p>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            lg="5"
                            class="founder-image"
                        >
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <div class="services-wrap">
                <v-container>
                    <h2 class="about-section-title">Dịch vụ chúng tôi cung cấp</h2>
                    <div class="services">
                        <v-row>
                            <v-col
                                col="4"
                                sm="4"
                                class="lv"
                            >
                                <div class="lv-img">
                                    <img src="@/assets/2.png" alt="">
                                </div>
                                <div class="lv-name">Tổ chức sự kiện theo phong cách cổ</div>
                                <div class="lv-desc">Ứng dụng các nghi lễ, trang phục, dụng cụ cổ đã được phục dựng thông qua nghiên cứu, phục vụ cho các sự kiện của các đơn vị đối tác</div>
                            </v-col>
                            <v-col
                                col="4"
                                sm="4"
                                class="lv"
                            >
                                <div class="lv-img">
                                    <img src="@/assets/3-1.png" alt="">
                                </div>
                                <div class="lv-name">Cho thuê trang phục, phụ kiện, các sản phẩm cổ trang. Chụp ảnh cổ trang.</div>
                                <div class="lv-desc">Cho thuê những trang phục, phụ kiện, đồ nhật dụng cổ đã phục dựng. Cung cấp dịch vụ chụp ảnh, quay phim theo phong cách cổ.</div>
                            </v-col>
                             <v-col
                                col="4"
                                sm="4"
                                class="lv"
                            >
                                <div class="lv-img">
                                    <img src="@/assets/1-1.png" alt="">
                                </div>
                                <div class="lv-name">Thiết kế và may trang phục cổ</div>
                                <div class="lv-desc">Đội ngũ nhân viên thiết kế và may mặc của Công ty Cổ phần Ỷ Vân Hiên sẽ thiết kế trang phục cổ với các kiểu áo như áo dài cổ (ngũ thân), giao lĩnh, viên lĩnh, đối khâm,... Theo yêu cầu và số đo mà khách hàng cung cấp.</div>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </div>
            <div class="chatlieu-wrap">
                <h2 class="about-section-title">Chất liệu</h2>
                <div class="wrapSlider">
                    <div class="slider">
                        <VueSlickCarousel 
                        class="wrap-owl"
                        v-bind="setting"
                        v-if="getMaterials.length > 0"
                        >
                        <div 
                            class="wrap-item-product"
                            v-for="item of getMaterials" :key="item.id"
                        >
                            <v-parallax
                            height="500"
                            :src="item.base64"
                            >
                                <div class="wrap-title">
                                    <div>
                                        {{ item.name }}
                                    </div>
                                </div>
                            </v-parallax>
                        </div>
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import BaseBanner from '@/components/base/Banner.vue'
export default {
    components: {
        VueSlickCarousel,
        BaseBanner 
    },
    computed: {
        getInforCompany() {
            return this.$store.state.infor_company
        },
        getMaterials() {
            return this.$store.state.materials
        },
        setting() {
            return {
                arrows:true,
                dots:false,
                slidesToShow:4,
                margin:50,
                accessibility:true,
                swipeToSlide:true,
                slidesToScroll:2,
                draggable: true,
                infinite:true,
                autoplay:true,
                autoplaySpeed:2000,
                adaptiveHeight:true
            }
        }
    },
    created() {
        this.$store.dispatch('getInforCompany')
        this.$store.dispatch('getMaterial')
    }
}
</script>

<style lang="scss" scoped>
.container {
    @media (min-width: 1904px){
            max-width: 1200px;
    }
}
.title {   
    color: #000573;
    font-family: "Times New Roman";
    text-transform: uppercase;
    font-size: 36px !important;
    font-weight: 500;
    text-align: center;
    margin: 0 0 20px;
    padding-top: 30px;
    position: relative;
} 
.site-inner {
    padding: 0;
    .header-banner {
        position: relative;
        &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0,20,78,.78);
            z-index: 2;
        }
        img {
            width: 100%;
            height: auto;
        }
        .header-page-title {
            color: #cb9965;
            font-size: 75px;
            font-weight: 700;
            font-family: "Times New Roman";
            text-transform: uppercase;
            z-index: 2;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            width: 100%;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

    }
}
.topright-bg {
    position: absolute;
    top: 161px;
    right: 0;
    z-index: 3;
}
.wrap-infor-company {
    .container {
    .about-content {
        color: #878787;
        font-size: 14px;
        line-height: 1.8;
        margin: 50px 0;
        .wrapImg {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .wrapContent {
            padding: 50px;
        }
    }
    
    }
    .lv-wrap {
        background: url(../../assets/ab-bg2.jpg) center no-repeat;
        // background: url(../assets/ab-img-bg.png);
        position: relative;
        overflow: hidden;
        padding: 50px 0 80px;
        background-size: cover;
        .container {
            .row {
                .lv {
                    text-align: center;
                    margin: 30px 0;
                    .lv-img {
                        img {
                            height: 74px;
                            width: auto;
                        }
                    }
                    .lv-name {
                        color: #33353b;
                        font-size: 20px;
                        font-weight: 700;
                    }
                    .lv-desc {
                        color: #878787;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .vision-wrap {
        background-image: url(../../assets/vision-wrap.jpg);   
        background-size: cover;
        background-position: center;
        text-align: center;
        padding: 70px 0 60px; 
        .vision-title {
            color: #cf9d49;
            font-family: "Times New Roman";
            text-transform: uppercase;
            font-size: 26px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        .vision-desc {
            color: #fff;
            font-size: 20px;
            font-weight: 500;
            font-style: italic;
        }
    }
}
.founder-section {
    overflow: hidden;
    position: relative;
    padding-bottom: 98px;
    background: url(../../assets/founder-bg.jpg) no-repeat left bottom;
    .founder {
        padding-top: 40px;
    }
    .founder-name {
        color: #cf9d49;
        font-family: "Times New Roman";
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 500;
    }
    .founder-content {
        color: #878787;
        font-size: 14px;
        text-align: justify;
        line-height: 2;
        margin-top: 70px;
    }
    .founder-image {
    background-repeat: no-repeat;
    background-position: top left;
    position: absolute;
    height: 100%;
    right: 0;
    background-image: url(http://yvanhien.com/wp-content/uploads/bfi_thumb/1ApjUhM-ntqz3b1rclhnmrol45auh9qpmwo0s2qlslfx3bdbv6.png);
 }
}
.services-wrap {
    position: relative;
    &::before {
        content: "";
        height: 71%;
        width: 100%;
        position: absolute;
        background-color: #34363b;
    }
    .about-section-title {
        margin: 100px 0;
        color: #c1a167;
        font-family: "Times New Roman";
        text-transform: uppercase;
        font-size: 36px;
        font-weight: 500;
        text-align: center;
        margin: 0 0 20px;
        padding-top: 30px;
        position: relative;
    }
    .services {
        border-radius: 3px;
        background-clip: padding-box;
        background-color: #fff;
        -webkit-box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
        box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
        padding: 40px 0;
        position: relative;
        .lv {
            padding: 0 60px;
            text-align: center;
            margin: 30px 0;
            +.lv {
                border-left: 1px solid #eaeaea;
            }
        }
        .lv-name {
            color: #33353b;
            font-size: 20px;
            font-weight: 700;
            margin: 20px 0;
        }
        .lv-desc {
            color: #878787;
            font-size: 14px;
        }
    }
}
.chatlieu-wrap {
    overflow: hidden;
    padding-top: 167px;
    padding-bottom: 120px;
    .about-section-title {
        color: #000573;
        font-family: "Times New Roman";
        text-transform: uppercase;
        font-size: 36px;
        font-weight: 500;
        text-align: center;
        margin: 0 0 20px;
        padding-top: 30px;
        position: relative;
        &::after {
            content: "";
            top: -167px;
            left: 200px;
            width: 622px;
            height: 809px;
            background: url(../../assets/cl-bg.png) no-repeat left top;
            position: absolute;
        }
    }
    .mCustomScrollbar {
        -ms-touch-action: none;
        touch-action: none;
    }
    .chatlieu {
        width: 80%;
        height: 450px;
        float: right;
    }
}
.wrapSlider {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .slider {
        width: 75%;
    }
}
</style>