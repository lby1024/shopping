<template>
    <div class="header">
        <i class="icon"/>
        <input type="search" placeholder=" search" />
        <van-button size="small">查找</van-button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/base.styl'

    .header
        height .39rem
        background-color $red
        display flex
        padding 0 .12rem
        justify-content space-between
        align-items center        
        input 
            height .24rem
            background-color $red
            width 66%
            font-size .16rem
            box-sizing border-box
            padding-left .06rem
            color rgba(250, 250, 250, .9)
            &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                color: rgba(250, 250, 250, .8)
            }
            &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: rgba(250, 250, 250, .8)
            }
            &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: rgba(250, 250, 250, .8)
            }
            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: rgba(250, 250, 250, .8)
            }
        .icon
            icon()
            background-image url('../../assets/images/position.png')
</style>
