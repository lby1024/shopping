<template>
    <div class="banner" v-if="data">
        <img v-lazy="data.image1" alt="banner" width="100%" />
        <h3>{{data.goodsName}}</h3>
        <p>
            <span class="num01">编号 : </span>
            <span class="num02">{{data.goodsSerialNumber}}</span>
        </p>
        <p>
            <span class="new-price">￥{{data.presentPrice}}</span>
            <span class="old-price">市场价￥{{data.oriPrice}}</span>
        </p>
        <p class="p03">说明: 极速送达 > 正品保障</p>
    </div>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .banner
        h3
            font-size .18rem
            height .34rem
            line-height .34rem
            padding-left .3rem
            font-weight bold
            no-wrap()
            width 100%
            background-color #fff
        p
            font-size .16rem
            height .34rem
            background-color #fff
            line-height .34rem
            padding-left .3rem
            .num01
                color gray
            .num02
                color $red
            .new-price
                font-size .18rem
                color red
                margin-right .12rem
            .old-price
                color gray 
                text-decoration line-through
        .p03
            color #999
            margin .08rem 0
</style>
