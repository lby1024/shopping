<template>
    <div class="recommend" v-if="data">
        <h3>{{title}}</h3>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide
                class="swiper-item"
                v-for="(item, index) in data"
                :key="index" >
                <img 
                    v-lazy="item.image" 
                    alt="pic" 
                    width="100%" 
                    @click="go2page(item.goodsId)" >
                </img>
                <span>￥{{item.mallPrice}}</span>
                <span>￥{{item.price}}</span>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    // 接收数据props
    // ---> data : [{image, mallPrice, price}, {image, mallPrice, price}, ... ]
    // ---> title: string
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: { swiper, swiperSlide },
        props: ['title', 'data'],  
        data: ()=>({
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 0,
            }
        }),
        methods: {
            go2page (id) {
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .recommend
        background-color #fff
        h3
            height .39rem
            line-height .39rem
            color $red
            font-size .14rem
            padding 0 .18rem
            border-bottom 2px solid #f3f3f3
        .swiper
            height 1.7rem
            .swiper-item
                font-size .12rem
                display flex
                flex-flow column
                justify-content center
                align-items center
                border-right 2px solid #f3f3f3
                span:nth-child(2)
                    font-size .15rem
                    color red
                    margin-bottom .05rem
                span:nth-child(3)
                    font-size .12rem
                    color gray
                    text-decoration line-through
                &:last-child
                    border-right 0 solid #f3f3f3
</style>
