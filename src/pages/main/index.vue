<template>
    <div>
        <keep-alive>
            <router-view />
        </keep-alive>
        <Nav />
    </div>
</template>

<script>
    import Nav from '../../components/nav'
    export default {
        components: {Nav}
    }
</script>

<style scoped>

</style>