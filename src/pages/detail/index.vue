<template>
    <div class="detail">
        <loading :show="show" />
        <!-- @ 1 : 头部 -->
        <van-nav-bar
            left-arrow
            @click-left="back"
            title="商品详情" >
        </van-nav-bar>
        <!-- 内容 -->
        <div class="container" v-if="info">
            <Banner :data="info" />
            <van-tabs swipeable sticky>
                <van-tab title="商品详情">
                    <div class="goods-detail" v-html="info.goodsDetail"></div>
                </van-tab>
                <van-tab title="评论">
                    <img :src="pic" alt="pic" width="100%">
                </van-tab>
            </van-tabs>
        </div>
        <!-- 底部 -->
        <footer>
            <div class="left">
                <span>数量</span>
                <van-stepper v-model="count" />
            </div>
            <div class="right">
                <van-button size="small" @click="add_goods">加购物车</van-button>
                <van-button disabled size="small">店铺休息</van-button>
            </div>
        </footer>
    </div>
</template>

<script>
    import {get_detail_data} from '../../../src/api/get_data'
    import Loading from '../../../src/components/loading'
    import Banner from './01_banner'

    export default {
        components: {Loading, Banner},
        data: ()=>({
            cart_list: null,                            // 购物车列表
            good_pic: null,                             // 商品图片
            price: null,                                // 商品价格
            count: 1,                                   // 商品数量
            goods_name: null,                           // 商品名称
            show: true,                                 // 加载动画是否显示
            info: null,                                 // 商品详情数据
            pic: null,                                  // 评论页面的图片
            id: null,                                   // 路由id---> detail/:id
            shopId: '402880e860166f3c0160167a9c0a0003'  
        }),
        activated() {
            this.id = this.$route.params.id 
            this.count = 1
            this.get_data()
            this.get_goods_list()   // 读取本地数据
        },
        deactivated() {
            this.info = null
            localStorage.list = JSON.stringify(this.cart_list)  // 保存本地数据
        },
        methods: {
            // 点击按钮到购物车========点击按钮到购物车========点击按钮到购物车========点击按钮到购物车========
            add_goods () {
                // @ 1 : 要添加的商品数据
                let good = {
                    name: this.goods_name,
                    price: this.price,
                    count: this.count,
                    pic: this.good_pic
                }
                // @ 2 : 查看购物车里面是否已经存在该商品
                let has = this.cart_list.find(item=>item.name==good.name)
                // ---如果存在---> 数量加1
                if (has) {
                    let _good = this.cart_list.filter(item=>item.name===good.name)[0]
                    _good.count+=this.count
                }
                // ---否则---> 将商品添加到shopping list
                else{
                    this.cart_list = [good, ...this.cart_list]
                }
                // @ 3 : 跳转路由
                this.$router.push('/cart')

            },
            // 从本地读取数据
            get_goods_list () {
                if (localStorage.list) {
                    this.cart_list = JSON.parse(localStorage.list)
                }
                else{
                    this.cart_list = []
                }
            },
            // 获取商品详情数据======获取商品详情数据======获取商品详情数据======获取商品详情数据======获取商品详情数据======
            get_data () {
                this.show = true
                get_detail_data(this.id, this.shopId)
                .then(res=>{
                    let data = res.data
                    this.info = data.goodInfo
                    this.pic = data.advertesPicture.PICTURE_ADDRESS
                    this.show = false
                    this.goods_name = data.goodInfo.goodsName
                    this.price = data.goodInfo.presentPrice
                    this.good_pic = data.goodInfo.image1
                })
                .catch(err=>alert(err))     // '服务器返回了错误数据'
            },
            // 返回上一个路由======返回上一个路由======返回上一个路由======返回上一个路由======返回上一个路由======
            back () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .detail
        padding-top 44px
        padding-bottom 50px
        overflow hidden
        .van-nav-bar 
            position fixed
            top 0
            width 100%
            max-width 750px
            background-color $red
            color #fff
            height 44px
            &>>>.van-icon
                color #fff
        .container
            .van-tabs
                .goods-detail
                    img
                        margin 0
                &>>>.van-tab--active
                    color $red
                &>>>.van-tabs__nav-bar
                    background-color $red
        footer 
            height 44px
            position fixed
            bottom 0
            width 100%
            max-width 750px
            background-color $red
            display flex
            justify-content space-between
            align-items center
            font-size .15rem
            color #fff
            padding 0 .12rem
            box-sizing border-box
            z-index 99
            .left
                display flex
                align-items center
                justify-content space-between
                width 1.3rem
            .right
                .van-button:nth-child(1)
                    margin-right .18rem
            .van-stepper
                &>>>.van-stepper__stepper
                    width 20px
                    height 20px
                    border-radius 20px
                &>>>.van-stepper__input
                    background-color $red
                    color #fff
                    border 0
</style>
