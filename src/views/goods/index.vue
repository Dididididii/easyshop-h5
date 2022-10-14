<template>
  <div class="goodsContext">
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
            <van-swipe-item v-for="i in 6" :key="i">
                <van-image
                    class="goodsSwiperImage"
                    fit="fill"
                    src="https://yanxuan-item.nosdn.127.net/c12d7a462c1d06556be03f54e56a770f.png"
                />
            </van-swipe-item>
        
            <template #indicator>
                <div class="custom-indicator">{{ current + 1 }}/6</div>
            </template>
        </van-swipe>
        <!-- 商品名称/价格 -->
        <div class="goodsCard">
            <div class="skuItem">
                <h3>共唱樱花酒歌酣日本浅樱玻璃酒壶套装180ml</h3>
                <h3 class="price">￥<span class="yuan">1000</span> <span class="former">￥1200</span></h3>
            </div>
        </div>
        <!-- 商品规格 -->
        <div class="goodsCard">
            <div class="skuItem">
                    <van-cell title="选择规格" is-link >
                        <template #label>
                            <div class="box">
                                <van-image
                                    v-for="i in 3"
                                    :key="i"
                                    class="goodsImage"
                                    fit="cover"
                                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
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
                            src="https://img01.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="text">
                            <p class="name">小***贝</p>
                            <p class="time">5天前</p>
                        </div>
                    </div>
                    <div class="appraiseTitle">
                        <p>上身效果还不错的，宽松的款式是我喜欢的，很显瘦的一款 也比较百搭</p>
                    </div>
                    <div class="appraiseImages">
                        <van-image
                            v-for="i in 3"
                            :key="i"
                            class="appraisePhoto"
                            fit="cover"
                            src="https://img01.yzcdn.cn/vant/cat.jpeg"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="goodsImages">
            <van-image
                v-for="i in 6"
                :key="i"
                class="goodsImagesItem"
                fit="cover"
                src="https://yanxuan-item.nosdn.127.net/2fe238a7ea77c015ce6d5f1792d4b268.jpg"
            />
        </div>
    </main>
    <footer>
        <van-goods-action safe-area-inset-bottom>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车"  />
            <van-goods-action-icon icon="shop-o" text="店铺"  />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </footer>
  </div>
</template>

<script>
export default {
    name:'easy-Goods',
    data(){
        return {
            current: 0,
        }
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
    },
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
    margin-bottom: 60px;
}
.appraiseImages{
    margin-top: 10px;
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