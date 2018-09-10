<template>
    <div class="cart-list">
        <!-- 商品list -->
        <slot />
        <!-- 结算总价 -->
        <div class="total" v-if="data.length">
            <span>结算 : ￥ {{price}}</span>
            <van-button 
                type="danger" 
                @click="clear" >
                清空购物车
            </van-button>
            <van-button type="primary">结算</van-button>
        </div>
        <!-- 如果商品列表为空===>显示 -->
        <div 
            v-if="data.length===0" 
            class="empty">
            <img :src="pic" alt="cart">
            <h3>亲, 购物车空空如也, 快去逛逛吧!</h3>
        </div>
    </div>
</template>

<script>
    import cartPic from '@/assets/images/icon-cart.png'

    export default {
        props: ['data', 'price'],
        data: ()=>({
            pic: cartPic
        }),
        methods: {
            // 清空购物车
            clear () {
                this.$dialog.confirm({
                    title: '警告',
                    message: '你将清空购物车'
                })
                .then(()=>{
                    this.$emit('clear')
                })
                .catch(()=>{
                    console.log('取消任务---> 清空购物车')   
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .cart-list    
        .total
            padding-left .5rem
            height .8rem
            display flex
            align-items center
            background-color #fff
            span 
                display inline-block
                color red
                font-size .16rem
                margin-right .2rem
            .van-button
                margin-right .1rem
        .empty
            display flex
            flex-flow column nowrap
            align-items center
            img 
                display block
                width 20%
                margin .2rem auto
            h3
                font-size .16rem
                color #999
                text-align center
                margin .16rem 0
            .van-button
                background-color $red
                color #fff
                font-weight bolder
        
</style>
