<template>
    <header>老师,你好!</header>
</template>

<script>
export default {
    name:'comHeader'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vw';
    header{
        height: vw(128);
        width: 100%;
        background-color: #4476e7;
        line-height: vw(128);
        color: #fff;
        padding-left:vw(40);
        box-sizing: border-box;
    }
</style>