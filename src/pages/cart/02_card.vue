<template>
    <van-cell-swipe :right-width="80">
        <div class="card">
            <img :src="data.pic" alt="pic">
            <h3>{{data.name}}</h3>
            <div class="num">
                <span>￥{{data.price}}</span>
                <van-stepper v-model="count" disable-input />
            </div>
        </div>
        <span slot="right" class="del" @click="del(data.name)">删 除</span>
    </van-cell-swipe>
</template>

<script>
    export default {
        props: ['data'],
        data: ()=>({
            count: 1
        }),
        activated () {
            console.log('card--->activated', this.data.count)
            this.count = this.data.count
        },
        mounted () {
            console.log('card--->mounted', this.data.count)
            this.count = this.data.count
        },
        watch: {
            count () {
                this.$emit('change', this.data.name, this.count)
            },
            data () {
                console.log(this.data.count)
                this.count = this.data.count
            }
        },
        methods: {
            del (name) {
                console.log('del--->')
                this.$emit('del', name)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'
    .van-cell-swipe
        &>>>.van-cell-swipe__right
            background-color red
        .del
            color #fff
            display inline-block
            height 100%
            width 80px
            font-size .21rem
            display flex
            justify-content center
            align-items center
    .card
        background-color #fff
        height 1.2rem
        border-bottom 1px solid #f3f3f3
        box-sizing border-box
        padding .3rem
        padding-left 1.6rem
        font-size .15rem
        position relative
        img 
            width 1rem
            position absolute
            top 12px
            left 30px
        h3 
            no-wrap()
            width 1.6rem
            padding-top .1rem
            transform translateY(-.1rem)
            margin-bottom .3rem
            font-weight bolder
        .num
            color red
            display flex
            justify-content space-between
            align-items center
            .van-stepper
                &>>>.van-stepper__stepper
                    width 20px
                    height 20px
                    border-radius 20px
                &>>>.van-stepper__input
                    color #333
                    border 0
                    background-color #fff

</style>
