<template>
    <section>
        <div class="head">
            <span @click="$router.go(-1)">&lt;</span>
            <span>作业详情</span>
        </div>
        <div class="banner">
            <div class="tip">
                <span class="tipleft">专项训练</span>
                <span class="tipright">3题</span>
            </div>
            <p class='time'><i class="iconfont icon-shijian"></i><span>{{workData.assignTime}}布置</span></p>
            <p class='time middle'><span>{{workData.endTime}}截止</span></p>
            <p class='time last'><i class="iconfont icon-iconnianji"></i><span>{{workData.className}}</span></p>
            <div class="line"></div>
            <div class="question">
                <div class="text">
                    <p>{{workData.syntestName}} 【{{workData.xcxHomeworkId}}题】</p>
                    <p>{{workData.lessonHourName}} 【{{workData.queNum}}题】</p>
                </div>
                <div class="look">查看题目</div>
            </div>
        </div>
        <p class="submitcase">提交情况</p>
        <div class="sumbitInfo">
            <p class="submitNum">已提交:{{detailData.length}}</p>
            <div class="peopleInfo" v-for='(item,index) in detailData' :key='index'>
                <div class="submitPeople">
                    <p cliass='name'>{{item.realName}}</p>
                    <span class="school">{{item.school}}</span>
                </div>
                <div class="score" @click="toEdit(index)">{{item.score?item.score:'评分 >>'}}</div>
                <div class="CorrectRate">
                    <div class="rateInfo">
                        <span>{{item.rate}}%正确</span>
                        <p class="advertis" v-show='item.rate<60'>已自动通知重做</p>
                    </div>
                    <i>></i>
                </div>
            </div>
        </div>
        <div class="mask" v-if="show" @click='show=false'>
            <div class="content" @click.stop>
                <ul>
                    <li v-for="(item,index) in scoreArr" :key="index" @click="editScore(index)" ref="level">{{item}}</li>
                </ul>
                <div class="cancel" @click="show=false">取消</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Detail',
    data(){
        return {
            workData:null,
            detailData:[],
            scoreArr:['优+','优','优-','良','差'],
            show: false,
            ind:'',
        }
    },
    created(){
        this.workData=this.$route.query.item;
        this.getDetailData()
    },
    methods:{
        async getDetailData(){
            try{
                let res=await this.$axios.get('data/detailData.json')
                this.detailData=res.data.success.finishList
            }catch(err){
                console.log(err);
            }
        },
        editScore(index){
            this.show=false;
            // console.log(this.$refs.level[index].innerText);获取dom元素
            this.$dialog.confirm({
                message: '确认评为'+this.scoreArr[index],
            }).then(()=>{
                this.detailData[this.ind].score=this.scoreArr[index]
            }).catch(()=>{
                
            })
        },
        toEdit(index){
            this.show=true;
            this.ind=index
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_vw';
@import '../../assets/scss/reset';
@import  'index.scss';
</style>