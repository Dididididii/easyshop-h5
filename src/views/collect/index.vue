<template>
  <div class="collectContext">
    <van-nav-bar
      fixed
      placeholder 
      title="收藏"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="collectBox">
        <van-swipe-cell v-for="item in collectList" :key="item.id" >
            <van-card
                @click="$router.push(`/goods?id=${item.id}`)"
                :price="item.price"
                :desc="item.name"
                class="goods-card"
                :thumb="item.picture"
            />
            <template #right>
                <van-button @click="delCollects(item.id)" square text="删除" type="danger" class="delete-button" />
            </template>
        </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { getCollect,delCollect } from '@/api/collect'
export default {
    name:'easy-Collect',
    data() {
      return {
        collectList:[]
      }
    },
    methods:{
      async getCollects() {
        const res = await getCollect({collectType:1})
        this.collectList = res.result.items
      },
      async delCollects(id){
        try {
          await delCollect({ids:[`${id}`],type:1})
          this.$toast('取消收藏成功')
          this.getCollects()
        } catch (error) {
          this.$toast(error.response.data.message)
        }
      }
    },
    created() {
      this.getCollects()
    }
}
</script>

<style lang="less" scoped>
.van-swipe-cell{
  margin-bottom:10px
}
.collectBox{
    margin-top: 10px;
}
.goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>