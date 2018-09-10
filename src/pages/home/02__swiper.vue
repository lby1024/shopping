<template>
    <swiper class="swiper-banner" :options="options" v-if="data">
        <swiper-slide v-for="(item, index) in data" :key="index">
            <img :src="item" alt="轮播图" width="100%" class="swiper-lazy">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    // 接收数据props
    // ---> data : [string, string, string, ... ]
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {swiper, swiperSlide},
        props: ['data'],
        data () {
            return {
                options: {
                    loop: true,
                    autoplay: {
                        delay: 2000,                    // 2s一次跳转 
                        disableOnInteraction: false     // 如果不设置, 手指滑动轮播图后将不会自动轮播
                    },
                    pagination: {el: '.swiper-pagination'}
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .swiper-banner>>>.swiper-pagination-bullet-active
        width .233rem
        border-radius .08rem
        background-color $red
    .swiper-banner>>>.swiper-pagination-bullet
        background-color $red
        opacity .6
        transition all .2s ease
</style>
