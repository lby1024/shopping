<template>
    <div class="card" v-if="pic" @click="go2page(goodsId)">
        <img v-lazy="pic" alt="pic" width="100%">
        <p>{{title}}</p>
        <div>
            <span>￥{{mallPrice}}</span>
            <span>￥{{price}}</span>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['title', 'mallPrice', 'price', 'pic', 'goodsId'],
        methods: {
            go2page (id) {
                this.$router.push(`/detail/${id}`)
            }
        } 
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .card
        background-color #fff
        width 1.875rem
        font-size .15rem
        p
            text-align center
            no-wrap()
            width: 100%
            margin-bottom .12rem
            margin-top .12rem
        div
            font-size .18rem
            color red
            text-align center
            margin-bottom .12rem
            span:nth-child(2)
                color gray 
                text-decoration line-through
                font-size .12rem
</style>
