<template>
    <div class="cart">
        <!-- header -->
        <van-nav-bar title="购 物 车" />
        <!-- shopping_list -->
        <CartList 
            @clear="clear"
            :price="total"
            :data="cart_list">
            <Card
                @change="change"
                @del="del"
                :data="item" 
                v-for="(item, index) in cart_list" 
                :key="index">
            </Card>
        </CartList>
        <!-- 热门推荐recommend -->
        <Hot 
            title="为您推荐" 
            :data="hot" >
        </Hot>
    </div>
</template>

<script>
    import {get_home_data} from '@/api/get_data'
    import Hot from '@/pages/home/06__hot'
    import CartList from './01card_list'
    import Card from './02_card'

    export default {
        components: {Hot, CartList, Card},
        data: ()=>({
            hot: null,
            cart_list: []
        }),
        computed: {
            total () {
                if (this.cart_list.length===0) return 0.00
                let total = 0
                this.cart_list.map(item=>total+=item.price*item.count)
                return total.toFixed(2)
            }
        },
        activated () {
            console.log('$$$$$$$$$$$$$', 'activated')
            this.get_hot()
            this.get_cart_list()
            window.scrollTo(0, 0)
        },
        // 页面离开时
        deactivated () {
            localStorage.list = JSON.stringify(this.cart_list)
        },
        methods: {
            // 获取推荐商品的数据
            get_hot () {
                get_home_data()
                .then(res=>{
                    console.log(res.data.hotGoods)
                    this.hot = res.data.hotGoods
                })
            },
            // 在缓存中读取购物车
            get_cart_list () {
                if (localStorage.list) {
                    this.cart_list = JSON.parse(localStorage.list)
                }
                else {
                    this.cart_list = []
                }
            },
            // 商品数量发生了改变
            change (name, num) {
                let good = this.cart_list.filter(item=>item.name===name)[0]
                good.count = num
            },
            // 删除某一个商品
            del (name) {
                this.cart_list = this.cart_list.filter(item=>item.name!==name)
            },
            // 点击了清空购物车
            clear () {
                this.cart_list = []
            },
            // 点击了结账按钮
            check () {
                alert('**')
            }

        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .cart
        padding-bottom 50px
        .cart-list
            .total
                background-color #fff
                span
                    color red
        .hot
            margin-top .16rem
            &>>>h3
                background-color #fff
                margin 0 9px
                border-radius 9px
            &>>>.card
                border-radius 12px
                overflow hidden
        .van-nav-bar
            background-color $red
            &>>>.van-nav-bar__title
                color #fff
                font-weight bolder
</style>
