<template>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
            v-if="goods"
            v-model="load"
            :finished="finished"
            @load="more" >
            <card 
                v-for="(item, index) in goods" 
                :title="item.goodsName"
                :price="item.oriPrice"
                :mallPrice="item.presentPrice"
                :pic="item.image"
                :goodsId="item.goodsId"
                :key="index" >
            </card>
            <img 
                v-if="!goods"
                src="http://smile.hucheng123.xin/static/img/2@2x.8bdcf9b.gif"
                alt="pic"
                width="100%"
            >
        </van-list>
    </van-pull-refresh>
</template>

<script>
    import Card from '@/components/card'

    export default {
        components: {Card},
        props: ['goods'],
        data: ()=>({
            load: false,
            finished: false,
            refreshing: false,
        }),
        methods: {
            // 上拉加载======上拉加载======上拉加载======上拉加载======上拉加载======
            more () {
                this.$emit('pullUP')
            },
            // 打开触发more()的开关
            loading_over () {
                console.log('加载结束')
                this.load = false
            },
            // 设置状态 : 列表数据加载完毕
            no_more () {
                console.log('没有更多数据了')
                this.finished = true
            },
            // 设置状态 : 列表还可以加载更多数据
            finished_false () {
                this.finished = false
            },
            // 下拉刷新======下拉刷新======下拉刷新======下拉刷新======下拉刷新======下拉刷新======
            onRefresh () {
                this.$emit('pullDown')
            },
            // 关闭下拉刷新动画, 列表可以再次执行下拉刷新了
            refresh_false () {
                this.refreshing = false
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .van-list
        display flex
        flex-flow row wrap
        justify-content space-between
        &>>>.van-list__loading
            width 100%
        img 
            margin-top .7rem
        .card
            width 49%
            height 2rem
            margin-bottom .03rem
</style>
