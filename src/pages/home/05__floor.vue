<template>
    <div class="floor" v-if="goods" >
        <h3>{{title}}</h3>
        <div class="goods">
            <div class="part01">
                <img v-lazy="goods01.image" alt="pic" @click="go2page(goods01.goodsId)" />
                <img v-lazy="goods02.image" alt="pic" @click="go2page(goods02.goodsId)" />
                <img v-lazy="goods03.image" alt="pic" @click="go2page(goods03.goodsId)" />
            </div>
            <div class="part02">
                <img
                    v-for="(item, index) in goods04" 
                    v-lazy="item.image" 
                    @click="go2page(item.goodsId)"
                    alt="pic" >
                </img>
            </div>
        </div>
    </div>
</template>

<script>
    // 接收数据props
    // ---> data : [{image}, {image}, ... ]
    // ---> title: string
    export default {
        props: ['title', 'goods'],
        computed: {
            // 第一个商品
            goods01 () {
                return this.goods[0]
            },
            // 第二个商品
            goods02 () {
                return this.goods[1]
            },
            // 第三个商品
            goods03 () {
                return this.goods[2]
            },
            // 剩余的商品
            goods04 () {
                return this.goods.slice(3)
            }
        },
        methods: {
            go2page (id) {
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'
    
    .floor
        h3
            height .39rem
            line-height .39rem
            text-align center
            font-size .15rem    
            font-weight bolder
            color $red
        .goods
            .part02
                display flex
                justify-content space-between
                align-items flex-start
                img 
                    width 1.866rem
            .part01
                overflow hidden
                border-bottom 2px solid #f3f3f3
                img 
                    float left
                    display block
                    width 1.86rem
                    margin 0
                    &:nth-child(1)
                        height 1.938rem
                        border-right 2px solid #f3f3f3
                    &:nth-child(2)                    
                        border-bottom 2px solid #f3f3f3
</style>
