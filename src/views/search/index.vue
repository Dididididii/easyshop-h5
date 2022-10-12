<template>
  <div class="context">
    <nav>
        <form action="/">
            <van-search
                clearable
                v-model="value"
                show-action
                placeholder="请输入商品名称"
                @cancel="toBack"
            />
        </form>
    </nav>
    <main>
        <div class="history" v-if="!value.trim()">
            <p class="text">历史搜索</p>
            <div class="historyList">
                <div class="historyItem">
                    摇粒绒外套
                </div>
                <div class="historyItem">
                    牙刷
                </div>
                <div class="historyItem">
                    外套
                </div><div class="historyItem">
                    摇粒绒外套
                </div>
                <div class="historyItem">
                    牙刷
                </div>
                <div class="historyItem">
                    外套
                </div><div class="historyItem">
                    摇粒绒外套
                </div>
                <div class="historyItem">
                    牙刷
                </div>
                <div class="historyItem">
                    外套
                </div><div class="historyItem">
                    摇粒绒外套
                </div>
                <div class="historyItem">
                    牙刷
                </div>
                <div class="historyItem">
                    外套
                </div><div class="historyItem">
                    摇粒绒外套
                </div>
                <div class="historyItem">
                    牙刷
                </div>
                <div class="historyItem">
                    外套
                </div>
            </div>
        </div>
        <div class="searchList" v-else>
            <div class="list" v-for="i in 10" :key="i">
                <p>1499茅台</p>
                <van-icon size="15px" name="arrow" />
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {
    name:"easy-Search",
    data(){
        return {
            value:''
        }
    },
    methods:{
        toBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
body {
    background: #f0f9f4;
}
.van-search{
    padding-right: 10px;
}
main {
    background-color: #fff;
    padding:0 12px;
    .history{
        .text{
            margin:0;
            padding: 10px 0;
            font-size: 14px;
            color:#888;
        }
        .historyList {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding-bottom: 10px;
            .historyItem {
                padding: 5px;
                font-size: 12px;
                border-radius: 8px;
                margin: 5px 10px;
                border: 1px solid #000;
            }
        }
    }
    
    .searchList {
        .list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #888;
            p {
                margin: 10px 0;
                font-size: 15px;
            }
        }
        .list:last-child {
            border: none;
        }
    }
}

</style>