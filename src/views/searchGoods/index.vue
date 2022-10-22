<template>
  <div class="context">
    <van-nav-bar  left-arrow @click-left="$router.go(-1)" placeholder fixed>
    <template #title>
        <div class="searchBtn" @click="$router.push('/search')">
            <van-icon name="search" />
            <span class="title">搜索商品</span>
        </div>
    </template>
    </van-nav-bar>
    <div>
        <van-dropdown-menu style="position: fixed; z-index: 9999; width: 100%;" >
            <van-dropdown-item v-model="value1" :options="option1" @change="methodChange" />
            <van-dropdown-item v-model="value2" :options="option2" @change="methodChange" />
        </van-dropdown-menu>
    </div>
    <div class="goodsList">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                offset="100"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <easyCard :goodsList="likeList" />
            </van-list>
        </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import easyCard from '@/components/easy-card.vue'
import { getUserLike } from '@/api/home.js'
export default {
    components:{easyCard},
    name:'easy-SearchGoods',
    data() {
    return {
        value1: 0,
        value2: 'a',
        config:{
                page:1,
                pageSize:10
        },
        option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
        ],
        option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
        ],
        count: 0,
        isLoading: false,
        counts:0,
        loading:false,
        likeList:[],
        finished:false
    };
  },
  methods: {
    methodChange(){
        this.onRefresh()
        // console.log(1);
    },
    onRefresh() {
        this.likeList=[]
        this.getUserLikes()
        // this.$toast('刷新成功');
        this.config = {
            page:1,
            pageSize:10
        }
        this.isLoading = false;   
    },
    async getUserLikes() {
        const res = await getUserLike(this.config)
        this.likeList.push(...res.result.items)
        this.counts = res.result.counts
    },
    onLoad() {
        let timer = null
        if(timer === null) {
            timer = setInterval(()=>{
            this.config.page++
            this.getUserLikes()
            this.loading = false
            if(this.likeList.length >= this.counts) {
                this.finished = true
            }
            clearInterval(timer)
            timer=null
            },1000)
        }
    },
  },
  created(){
    this.getUserLikes()
  }
}
</script>

<style lang="less" scoped>

.van-icon-search{
    
    font-size: 18px;
    color:#888;
    margin-left: 10px;
}
.goodsList {
    margin-top:50px;
}
.searchBtn {
    width: 240px;
    height: 35px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    .title{
        color:#888;
        margin-left: 10px;
        font-size: 15px;
    }
}
</style>