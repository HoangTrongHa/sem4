<template>
      <div class="wrapBanner">
        <div class="topright-bg"> 
            <img src="http://yvanhien.com/wp-content/themes/hc-theme/images/topbg.png" alt="">
        </div>
        <div class="site-inner">
            <div class="header-banner">
                <img src="@/assets/banner-infor.jpg" alt="">
                <h1 class="header-page-title"> 
                    <slot name="title"></slot>
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
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
</style>