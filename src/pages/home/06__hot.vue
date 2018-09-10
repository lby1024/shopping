<template>
    <div class="hot" v-if="data">
        <h3>{{title}}</h3>
        <van-list class="goods">
            <card 
                v-for="(item, index) in data" 
                :title="item.name"
                :price="item.price"
                :mallPrice="item.mallPrice"
                :pic="item.image"
                :goodsId="item.goodsId"
                :key="index">
            </card>
        </van-list>
    </div>
</template>

<script>
    // 传入数据
    // title : string
    // data : [{name, price, mallPrice, image, goodsId}, ... ]

    import Card from '@/components/card'

    export default {
        components: {Card},
        props: ['title', 'data'],
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'
    
    .hot
        h3
            height .39rem
            line-height .39rem
            text-align center
            font-size .15rem    
            font-weight bolder
            color $red
        .goods
            display flex
            flex-flow row wrap
            justify-content space-between
            padding 9px
            .card
                width 49%
                margin-bottom 9px
</style>
