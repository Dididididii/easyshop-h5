<template>
  <div class="goodsContext" v-if="goods.mainPictures">
    <van-nav-bar fixed placeholder left-arrow @click-left="$router.go(-1)">
        <template #title>
            <div class="search" @click="$router.push('/search')">
                <van-icon class="searchIcon" name="search" />
                <p>搜索商品</p>
            </div>
        </template>
    </van-nav-bar>
    <main>
        <!-- 商品轮播图 -->
        <van-swipe @change="onChange">
            <van-swipe-item v-for="item in goods.mainPictures" :key="item">
                <van-image
                    class="goodsSwiperImage"
                    fit="scale-down"
                    :src="item"
                />
            </van-swipe-item>
        
            <template #indicator>
                <div class="custom-indicator">{{ current + 1 }}/6</div>
            </template>
        </van-swipe>
        <!-- 商品名称/价格 -->
        <div class="goodsCard">
            <div class="skuItem">
                <h3>{{goods.name}}</h3>
                <h3 class="price">￥<span class="yuan">{{goods.price}}</span> <span class="former" v-if="goods.price!==goods.oldPrice">￥{{goods.oldPrice}}</span></h3>
            </div>
        </div>
        <!-- 商品规格 -->
        <div class="goodsCard">
            <div class="skuItem">
                    <van-cell title="选择规格" is-link >
                        <template #label>
                            <div class="box">
                                <van-image
                                    v-for="item in goods.specs[0].values"
                                    :key="item.name"
                                    class="goodsImage"
                                    fit="cover"
                                    :src="item.picture"
                                />
                            </div>
                        </template>
                    </van-cell>
            </div>
        </div>
        <!-- 商品评价 -->
        <div class="goodsCard">
            <div class="skuItem">
                <p class="title">商品评论</p>
                <div class="appraise">
                    <div class="appraiseItem">
                        <van-image
                            class="userPhoto"
                            fit="cover"
                            round
                            :src="goods.evaluationInfo.member.avatar"
                        />
                        <div class="text">
                            <p class="name">{{goods.evaluationInfo.member.account}}</p>
                            <p class="time">{{day(goods.evaluationInfo.createTime)}}</p>
                        </div>
                    </div>
                    <div class="appraiseTitle">
                        <p>{{goods.evaluationInfo.content}}</p>
                    </div>
                    <div class="appraiseImages">
                        <van-image
                            v-for="item in goods.evaluationInfo.pictures"
                            :key="item"
                            class="appraisePhoto"
                            fit="cover"
                            :src="item"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="goodsImages">
            <van-image
                v-for="item in goods.details.pictures"
                :key="item"
                class="goodsImagesItem"
                fit="cover"
                :src="item"
            />
        </div>
    </main>
    <footer>
        <van-goods-action safe-area-inset-bottom>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="shop-o" text="店铺"  />
            <van-goods-action-icon icon="star-o" text="收藏"  />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </footer>
  </div>
</template>

<script>
import { getGoods } from '@/api/goods'
import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言
dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言
export default {
    name:'easy-Goods',
    data(){
        return {
            current: 0,
            goods:[]
        }
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
        async getGood() {
            const res = await getGoods(this.$route.query.id)
            this.goods = res.result
        },
        day(day) {
            dayjs.extend(relativeTime)
            return dayjs(day).fromNow() // 22 年前
        }
    },
    created() {
        this.getGood()
    }
}
</script>

<style lang="less" scoped>
.goodsImages{
    margin-top: 16px;
    .goodsImagesItem{
        width:100%;
        height:100%;
        margin-top: -6px;
    }
}
main {
    margin-top:5px;
    margin-bottom: 60px;
}
.appraiseImages{
    margin-top: 10px;
    height: 70px;
    overflow: hidden;
    .appraisePhoto{
        margin-right: 10px;
        width: 64px;
        height: 64px;
    }
}
.appraiseTitle{
    margin-top: 10px;
    p{
        margin: 0;
        font-size: 14px;
    }
}
.appraiseItem{
    display: flex;
    p{
        margin:0;
    }
    .text{
        margin-left: 10px;
    }
    .name {
        font-size: 14px;
    }
    .time{
        font-size: 12px;
        color:#888;
    }
}
.title{
    margin: 0 0 10px 0;
    font-size: 16px;
}
.userPhoto{
    width: 40px;
    height: 40px;
}
.box{
    margin-left: 80px;
    width: 203px;
    height: 37px;
    overflow: hidden;
}
.goodsImage{
    height: 32px;
    width: 32px;
    margin-right: 10px;
}
.goodsCard{
    height:100%;
    margin:10px;
    background-color: #fff;
    border-radius: 8px;
    .skuItem {
        padding: 10px;
        h3 {
            font-size: 16px;
            font-weight: 400;
            margin:0 0 5px 0;
        }
        .price{
            color:red;
            font-weight: 600;
        }
        .yuan{
            font-size: 20px;
        }
        .former{
            font-size: 14px;
            color:#888;
            font-weight: 300;
            text-decoration:line-through;
            margin-left: 5px;
        }
    }
}
.goodsSwiperImage{
    width: 100%;
    height: 100%;
}
.van-swipe{
    height: 150px;
    background-color: #fff;
}
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
.search{
    width: 300px;
    height: 35px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    .searchIcon{
        font-size: 15px;
        color:#000;
        margin:0 10px;
    }
    p{
        margin:0 ;
        font-size: 15px;
    }
}
</style>