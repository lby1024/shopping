<template>
    <div class="loading" v-if="show">
        <div class="info">
            <van-loading type="spinner" color="white" />
            <span>loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['show']
    }
</script>

<style lang="stylus" scoped>
    .loading
        position fixed
        z-index 100
        top 0
        left 0
        width 100vw
        height 100vh
        background-color rgba(0, 0, 0, .3)
        display flex
        justify-content center
        align-items center
        .info
            padding .24rem
            border-radius .18rem
            background-color rgba(0, 0, 0, .3)
            display flex
            align-items center
            color #ffffff
            font-size .18rem
            span
                margin-left .12rem
</style>
