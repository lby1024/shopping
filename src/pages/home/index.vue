<template>
    <div class="home">
        <Header/>
        <Swiper :data="swiper" />
        <Category :data="category" />
        <img :src="gif" alt="gif" class="gif" v-if="gif" />
        <Rcommend title="推荐商品" :data="recommend" />
        <Floor title="酒! 便宜" :goods="floor01" />
        <Floor title="推荐饮品" :goods="floor02" />
        <Floor title="新鲜水果" :goods="floor03" />
        <Hot title="热卖区" :data="hot" />
        <Loading :show="loading" />
    </div>
</template>

<script>
    import Loading from '@/components/loading'
    import Header from './01__header'
    import Swiper from './02__swiper'
    import Category from './03__category'
    import Rcommend from './04__recommend'
    import Floor from './05__floor'
    import Hot from './06__hot'
    import {get_home_data} from '../../api/get_data.js'

    export default {
        components: {Header, Loading, Swiper, Rcommend, Category, Floor, Hot},
        data () {
            return {
                data: null,
                floor01: null,
                floor02: null,
                floor03: null,
                hot: null,              // 热卖商品
                loading: false,         // 是否显示loading组件
                category: null,         // 分类
                gif: null,              // 骑摩托gif
                recommend: null,        // 推荐商品
                swiper: null,           // 轮播图数据
            }
        },
        mounted() {
            this.get_data()
        },
        methods: {
            // 获取首页数据
            get_data () {
                this.loading = true
                get_home_data()
                .then(res=>{
                    // console.log(res.data)
                    let data = res.data
                    this.data = data
                    this.loading = false
                    this.swiper = data.slides.map(item=>item.image)
                    this.category = data.category
                    this.gif = data.advertesPicture.PICTURE_ADDRESS
                    this.recommend = data.recommend
                    this.floor01 = data.floor1
                    this.floor02 = data.floor2
                    this.floor03 = data.floor3
                    this.hot = data.hotGoods
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .home
        padding-bottom .5rem
        .gif
            display block
            width 100%
            margin .1rem 0
</style>
