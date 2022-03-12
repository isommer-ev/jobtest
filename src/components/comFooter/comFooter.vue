<template>
    <footer>
        <van-tabbar v-model='active' route>
            <van-tabbar-item name="home" icon="home-o" to='/'>教学</van-tabbar-item>
            <van-tabbar-item name="user" icon="friends-o" to='/user'>我</van-tabbar-item>
        </van-tabbar>
    </footer>
</template>

<script>
export default {
    name:'comFooter',
    data(){
        return {
            active: 'home'
        }
    }
}
</script>