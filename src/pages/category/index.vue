<template>
    <div class="category">
        <!-- @ 01 : 头部标题 -->
        <van-nav-bar title="分 类" />
        <!-- @ 02 : 第一层分类 -->
        <van-tabs @click="click_category01">
            <van-tab
                v-for="(item, index) in category01"
                :title="item.mallCategoryName"
                :key="index" >
            </van-tab>
        </van-tabs>
        <!-- @ 03 : 内容区域 -->
        <left-right>
            <Left
                slot="left"
                :category="category02"
                :cur="cur"
                @getGoods="click_category02" >
            </Left>
            <Right
                ref="right"
                :goods="goods"
                :loading="loading02"
                :finished="finished"
                @pullUP="more_goods"
                @pullDown="pull_down"
                slot="right" >
            </Right>
        </left-right>
        <!-- @ 04 : 加载动画 -->
        <Loading :show="loading01" />
    </div>
</template>

<script>
    import {get_category01, get_goods} from '@/api/get_data'
    import Loading from '@/components/loading'
    import leftRight from './01_left_right'
    import Left from './02_left'
    import Right from './03_right'

    export default {
        components: { leftRight, Left, Right, Loading },
        data: ()=>({
            loading01: false,                               // 是否在加载第一页数据
            loading02: false,                               // 是否在加载第2, 3, ... 页数据
            finished: false,                                // 
            cur: 0,                                         // 二级分类的被选中项
            shopId: '402880e860166f3c0160167a9c0a0003',
            category01: null,                               // 一级分类
            category02: null,                               // 二级分类
            page: 1,                                        // 获取第几页商品数据
            goods: null,                                    // 商品列表
        }),
        activated() {
            this.get_category_data()
        },
        methods: {
            // 获取分类数据
            get_category_data() {
                this.$refs.right.finished_false()
                get_category01(this.shopId)
                .then(res=>{
                    let data = res.data
                    this.category01 = data
                    this.category02 = this.clean_data(data[0].bxMallSubDto)
                    let categoryID =this.category01[0].mallCategoryId 
                    this._get_goods(categoryID, null)
                })
            },
            // 获取商品
            _get_goods (categoryId, categorySubId) {
                this.loading01 = true
                this.page = 1
                get_goods(categoryId, categorySubId, this.page, this.shopId)
                .then(res=>{
                    this.goods = res.data
                    this.loading01 = false
                })
            },
            // 下拉刷新
            pull_down () {
                this.page = 1
                let id = this.category02[this.cur].mallCategoryId
                let subId = this.category02[this.cur].mallSubId  
                console.log('@@@@@@@@@')              
                get_goods(id, subId, this.page, this.shopId)
                .then(res=>{
                    console.log(res)
                    this.goods = res.data
                    this.$refs.right.refresh_false()
                    this.$refs.right.finished_false()
                })
            },
            // 加载更多商品
            more_goods (id, subId) {
                console.log('加载了一次数据')
                this.page++
                if (this.category02) {
                    let id = this.category02[this.cur].mallCategoryId
                    let subId = this.category02[this.cur].mallSubId
                    console.log(id, subId)
                    get_goods(id, subId, this.page, this.shopId)
                    .then(res=>{
                        console.log(res.data)
                        if (res.data) {
                            this.goods = [...this.goods, ...res.data]
                            this.$refs.right.loading_over()
                        }
                        else{
                            this.$refs.right.loading_over()
                            this.$refs.right.no_more()
                        }
                    })
                }
            },
            // 数据加工
            clean_data (list) {
                let mallSubName = '全部'
                let mallCategoryId = list[0].mallCategoryId
                let mallSubId = null
                return [{mallSubName, mallCategoryId, mallSubId}, ...list]
            },
            // 点击一级分类 (酒, 水果, 零食 ...)
            click_category01 (index, title) {
                this.$refs.right.finished_false()
                // 更新二级分类列表
                this.category02 = this.clean_data(this.category01[index].bxMallSubDto)
                this.cur = 0
                // 获取商品数据
                let id =this.category01[index].mallCategoryId 
                let subID = null
                this._get_goods(id, subID)
                // 滚动条滚到顶部
                document.getElementsByClassName('right')[0].scrollTop=0
            },
            // 点击二级分类 (红酒, 白酒, 啤酒, ... )
            click_category02 (index, id, subID) {
                this.$refs.right.finished_false()
                this.cur = index
                this._get_goods(id, subID)
                document.getElementsByClassName('right')[0].scrollTop=0
            } 
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .category
        display flex
        flex-flow column nowrap
        height 100vh
        overflow hidden
        padding-bottom .5rem
        box-sizing border-box
        .van-nav-bar
            background-color $red
            color #fff
            font-weight bolder
        .van-tabs
            &>>>.van-tab--active
                color $red
            &>>>.van-tabs__nav-bar
                height 0
        .filter
            flex none
            height 39px
            background-color skyblue


</style>
