<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style>
    body{
        background-color: #fff;
    }
    #app{
        background-color: #f3f3f3;
        max-width: 750px;
        min-height: 100vh;
        margin: 0 auto;
    }
    .van-tabbar-item--active{
        color: #e5017d;
    }
</style>
