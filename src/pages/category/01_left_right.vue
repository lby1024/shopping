<template>
    <div class="left-right">
        <div class="left">
            <slot name="left" />
        </div>
        <div class="right">
            <slot name="right" />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
    .left-right
        flex auto
        display flex
        .left
            width 24%
            background-color #fff
            overflow scroll
        .right
            width 76%
            background-color #f3f3f3
            overflow scroll
            padding: 6px
</style>
