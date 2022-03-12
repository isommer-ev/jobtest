<template>
    <div class="item">
        <div class="title">
            <div class="tip">群作业</div>
            <span>{{item.className}}</span>
            <span><i class="iconfont icon-fenxiang"></i>分享</span>
        </div>
        <p>{{item.syntestName}} 【{{item.xcxHomeworkId}}】</p>
        <p>{{item.lessonHourName}}</p>
        <div class="line"></div>
        <div class="bottom">
            <div class="information">
                <p><i class="iconfont icon-shijian"></i> {{item.assignTime}}布置</p>
                <p><i class="iconfont icon-gou"></i> 已提交:{{item.submitNum}}</p>
            </div>
            <div class="detail" @click="toDetail(item)"><i class="iconfont icon-wenben"></i> 详情</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'comItem',
    data(){
        return {

        }
    },
    props:['item'],
    methods:{
        toDetail(item){
            this.$router.push({path:'/detail',query:{item}})
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vw';
    .item{
        width: 90%;
        padding:vw(20);
        box-sizing: border-box;
        margin: vw(20) auto;
        background-color: #fff;
        border-radius: vw(20);
        .title{
            display: flex;
            justify-content: space-between;
            color:#999999;
            .tip{
                width: vw(180);
                height: vw(50px);
                line-height: vw(50px);
                text-align: center;
                border:vw(2) solid #66cccc;
                color:#66cccc;
                border-radius: vw(10);
            }
        }
        p{
            margin:vw(10) 0;
            font-size: 1.2em;
        }
        .line{
            width: 100%;
            height: vw(2);
            background-color: #ebebeb;
            margin:vw(25) 0;
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            .information{
                color:#999999;
                font-size: .8em;
                .icon-shijian{
                    font-size: 1em;
                }
            }
            .detail{
                width:vw(180);
                height: vw(90);
                line-height: vw(90);
                text-align: center;
                background-color: #6f9af9;
                border-radius: vw(50);
                color:#fff;
                align-self: center;
            }
        }
    }
</style>