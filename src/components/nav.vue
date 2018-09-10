<template>
    <van-tabbar v-model="active" @change="change">
        <van-tabbar-item icon="shop">首页</van-tabbar-item>
        <van-tabbar-item icon="wap-nav">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        data: ()=>({
            active: 0
        }),
        activated () {
            console.log('#########')
            this.check_path()
        },
        mounted () {
            console.log('**********')
            this.check_path()
        },
        methods: {
            // 页面刷新时 ---> 根据路由点亮对应的 Nav
            check_path () {
                let path = this.$route.path
                if (path==='/home') this.active = 0
                else if (path==='/category') this.active = 1
                else if (path==='/cart') this.active = 2
            },
            change (data) {
                if (data===0) this.$router.push({name: 'home'})
                else if (data===1) this.$router.push({name: 'category'})
                else if (data===2) this.$router.push({name: 'cart'})
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .van-tabbar
        z-index 1
        .van-tabbar-item
            &>>>.van-tabbar-item--active
                color red
</style>
