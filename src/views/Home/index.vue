<template>
    <section>
       <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="../../assets/img/1.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../../assets/img/21.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../../assets/img/13.jpg" alt=""></van-swipe-item>
            </van-swipe>
       </div>
       <div class="title">
           <span>近期作业</span>
           <span>更多作业 <i class="iconfont icon-changyongtubiao-mianxing-1"></i></span>
       </div>
        <div class="content">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    offset='10'
                >
                    <com-item v-for='(item,index) in listData' :item='item' :key='index'></com-item>
                </van-list>
            </van-pull-refresh>
        </div>
    </section>
</template>

<script>
import comItem from '@/components/comItem/comItem.vue'
export default {
    name:'Home',
    data(){
        return {
            listData:[],
            refreshing:false,
            loading: false,
            finished: false
        }
    },
    methods:{
        async getData(){
            try{
                let res=await this.$axios.get('data/listData.json')
                this.listData=res.data.success.xcxHwMainData.reverse()
            }catch(err){
                console.log(err);
            }
        },
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.listData = [];
                    this.$toast('刷新成功');
                    this.refreshing = false;
                }
                this.$axios.get('data/listData.json').then(res=>{
                    this.listData=this.listData.concat(res.data.success.xcxHwMainData);
                    this.loading = false;
                    this.listData.length>30 && (this.finished=true);
                })
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();

            // setTimeout(()=>{
            //     this.listData=this.listData.reverse();
            //     this.$toast('刷新成功');
            //     this.refreshing=false;
            // },2000)
        },
    },
    created(){
       this.getData()
    },
    components:{
        comItem
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_vw";
    section{
        padding-top: vw(40);
        .swiper{
            width:90%;
            height: vw(215);
            margin:0 auto;
            border-radius:vw(10);
            overflow: hidden;
            box-shadow: 0 0 2px  rgba(0,0,0,.5);
            .my-swipe{
                .van-swipe-item {
                    color: #fff;
                    font-size: 20px;
                    line-height: vw(215);
                    text-align: center;
                    background-color: #39a9ed;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            } 
        }
        .title{
            display: flex;
            width: 90%;
            margin: vw(50) auto 0;
            justify-content: space-between;
            span:first-child{
                font-size: 1.2em;
            }
            span:last-child{
                color:#afafaf;
            }
            i{
                color: #d4d4d4;
                font-size: 1.2em;
            }
        }
        .content{
            position: absolute;
            top:vw(500);
            bottom:vw(100);
            left:0;
            right:0;
            overflow: auto;
        }
    }
</style>