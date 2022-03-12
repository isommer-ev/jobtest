<template>
    <div id="app">
        <com-header v-show="path!='/detail'"></com-header>
        <com-footer v-show="path!='/detail'"></com-footer>
        <router-view></router-view>
    </div>
</template>

<script>
import comHeader from '@/components/comHeader/comHeader.vue'
import comFooter from '@/components/comFooter/comFooter.vue'
export default {
    data(){
        return {
            path:''
        }
    },
    watch:{
        $route(to){
            this.path=to.path
        }
    },
    components:{
        comHeader,
        comFooter
    }
}
</script>

<style lang="scss">
    body{
        background-color: #f2f2f2;
    }
</style>