<template>
    <swiper class="swiper" :options="options">
        <swiper-slide class="swiper-slide">
            <slot/>
        </swiper-slide>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {swiper, swiperSlide},
        data: ()=>({
            options: {
                direction:'vertical',
                slidesPerView: 'auto',      // 一屏出现多少个item, auto表示全部
                freeMode:true,              // 如果为false , 只会一屏一屏滚动
                mousewheel:true             // 鼠标滚轮可以控制
            }
        })
    }
</script>

<style lang="stylus" scoped>
    .swiper
        height 100%      // 设置滚动区域的高度
        overflow hidden
        .swiper-slide
            height auto                     // container高度自动撑高
</style>
