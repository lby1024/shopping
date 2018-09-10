<template>
    <swiper :options="swiperOption" class="category" v-if="data">
        <swiper-slide 
            class="item"
            v-for="(item, index) in data" 
            :key="index" >
            <img :src="item.image" alt="pic" width="100%" />
            <span>{{item.mallCategoryName}}</span>
        </swiper-slide>
    </swiper>
</template>

<script>
    // 接收数据props
    // ---> data : [{image, mallCategoryName}, {image, mallCategoryName}, ... ]
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {swiper, swiperSlide},
        props: ['data'],
        data: () => ({
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 10,
                loop: true
            }
        })
    }
</script>

<style lang="stylus" scoped>
    .category
        margin .05rem 
        height .88rem
        background-color #ffffff
        border-radius .1rem
        font-size .12rem
        .item
            display flex
            flex-flow column
            justify-content center
            align-items center
            span
                margin-top .06rem
</style>
