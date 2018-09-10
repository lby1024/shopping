<template>
    <div class="left-nav">
        <van-badge-group :active-key="cur" slot="left">
            <van-badge 
                v-for="(item, index) in category"
                :key="index"
                :title="item.mallSubName" 
                @click="click_category02(index, item.mallCategoryId, item.mallSubId)">
            </van-badge>
        </van-badge-group>
    </div>
</template>

<script>
    export default {
        props: ['category', 'cur'],
        methods: {
            click_category02 (index, id, subId) {
                this.$emit('getGoods', index, id, subId)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .left-nav
        .van-badge-group
            width 100%
            .van-badge
                background-color #fff
                text-align center
            &>>>.van-badge--select
                border 0
                color $red
                background-color #f3f3f3
</style>
