<template>
  <div class="loginContext">
    <van-nav-bar
        title="登录"
        left-arrow
        @click-left="$router.go(-1)"
    />
    <div class="check">
        <van-radio-group v-model="isLogin" direction="horizontal" @change="checkChange">
            <van-radio name="1" shape="square">账号密码登录</van-radio>
            <van-radio name="2" shape="square">手机号码登录</van-radio>
        </van-radio-group>
    </div>
    <div class="Login">
        <!-- 账号密码登录/注册 -->
        <van-form @submit="onSubmit" v-if="isLogin==='1'">
            <van-field
                v-model="account"
                name="account"
                label="用户名"
                placeholder="请输入用户名"
                :rules="[{ required: true, message: '请填写用户名' },{ required: true,validator:name , message: '用户名长度在5-12之间' }]"
            />
            <van-field
                v-if="numberAdd==='2'"
                v-model="numPhoto"
                name="numPhoto"
                type="number"
                label="手机号码"
                placeholder="请输入手机号码"
                :rules="[{ required: true, message: '请填写手机号' },{ required: true,validator:photoNum , message: '请输入正确的手机号' }]"
            />
            <van-field
                v-if="numberAdd==='2'"
                v-model="numCode"
                clearable
                type="number"
                name="numCode"
                label="短信验证码"
                placeholder="请输入短信验证码"
                :rules="[{ required: true, message: '请填写验证码' },{ required: true,validator:codeNum , message: '请输入正确的验证码' }]"
                >
                <template #button>
                    <span @click="sendCode">{{time===0?'发送验证码' :`${time}秒重新发送`}}</span>
                </template>
            </van-field>
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' },{ required: true,validator:password1 , message: '密码长度在6-12位之间' }]"
            />
            <div class="check">
                <van-radio-group v-model="numberAdd" direction="horizontal">
                    <van-radio name="1">登录</van-radio>
                    <van-radio name="2">注册</van-radio>
                </van-radio-group>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">{{numberAdd==='1'?'登录':'注册'}}</van-button>
            </div>
        </van-form>
        <!-- 手机验证码注册/登录 -->
        <van-form @submit="onSubmit" v-else>
            <van-field
                v-model="photo"
                name="photo"
                type="number"
                label="手机号码"
                placeholder="请输入手机号码"
                :rules="[{ required: true, message: '请填写手机号' },{ required: true,validator:photoNum , message: '请输入正确的手机号' }]"
            />
            <van-field
                v-model="code"
                clearable
                type="number"
                name="code"
                label="短信验证码"
                placeholder="请输入短信验证码"
                :rules="[{ required: true, message: '请填写验证码' },{ required: true,validator:codeNum , message: '请输入正确的验证码' }]"
                >
                <template #button v-if="isLogin === '2'">
                    <span @click="sendCode">{{time===0?'发送验证码' :`${time}秒重新发送`}}</span>
                </template>
            </van-field>
            <div class="check">
                <van-radio-group v-model="photoAdd" direction="horizontal">
                    <van-radio name="1">登录</van-radio>
                    <van-radio name="2">注册</van-radio>
                </van-radio-group>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">{{photoAdd==='1'?'登录':'注册'}}</van-button>
            </div>
        </van-form>
    </div>
  </div>
</template>

<script>
import { loginIsNum,registerNum,registerPhoto,loginPhoto,getCode,getLoginCode } from '@/api/Login'
export default {
    name:'easy-Login',
    data() {
        return {
            account: '',
            password: '',
            numCode:'',
            numPhoto:'',
            photo:'',
            code:'',
            time:0,
            numberAdd:'1',
            photoAdd:'1',
            isLogin:'1'
        }
    },
    methods:{
        checkChange(){
            this.numberAdd='1'
            this.photoAdd='1'
        },
        codeNum(val) {
            return /^[0-9]{6}$/.test(val)
        },
        photoNum (val) {
            return /^1[3-9]\d{9}$/.test(val)
        },
        password1 (val) {
            return /[a-zA-Z0-9]{6,12}/.test(val)
        },
        name (val) {
            return /[a-zA-Z0-9]{5,12}/.test(val)
        }
        ,
        async onSubmit(values) {
            if(this.isLogin === '1') {
                // 账号密码登录
                if(this.numberAdd==='1') {
                    // 登录
                    try {
                        const res = await loginIsNum({account:values.account,password:values.password})
                        this.$toast('登录成功')
                        this.$store.commit('user/setUserInfo',res.result)
                        this.$router.push(`${this.$route.query.from}`)
                    } catch (error) {
                        this.$toast(error.response.data.message)
                    }
                    
                } else {
                    // 注册
                    try {
                        const res = await registerNum({account:values.account,mobile:values.numPhoto,code:values.numCode,password:values.password,type:'app'})
                        this.$toast('注册成功')
                        this.$store.commit('user/setUserInfo',res.result)
                        this.$router.push(`${this.$route.query.from}`)
                    } catch (error) {
                        this.$toast(error.response.data.message)
                    }
                }
            } else {
                // 手机号码登录
                if(this.photoAdd==='1') {
                    // 登录
                    console.log('登录');
                    try {
                        const res = await loginPhoto({mobile:values.photo,code: values.code})
                        this.$store.commit('user/setUserInfo',res.result)
                        this.$router.push(`${this.$route.query.from}`)
                    } catch (error) {
                        this.$toast(error.response.data.message)
                    }
                } else {
                    // 注册
                    console.log('注册');
                    try {
                        const res = await registerPhoto({mobile:values.photo,code: values.code})
                        this.$store.commit('user/setUserInfo',res.result)
                        this.$router.push(`${this.$route.query.from}`)
                    } catch (error) {
                        this.$toast(error.response.data.message)
                    }

                }
            }
        },
        async sendCode() {
            if(this.time === 0) {
                this.time = 60
                let timer = null
                if(this.isLogin === '1') {
                    // 账号密码登录
                    if(this.numberAdd === '2'){
                        // 注册
                        try {
                            await getCode({mobile:this.numPhoto,type:'register'})
                            this.$toast('发送成功')
                        } catch (error) {
                            this.$toast(error.response.data.message)
                        }
                    }
                } else {
                    if(this.photoAdd==='1') {
                        // 登录
                        try {
                            const res = await getLoginCode(this.photo)
                            console.log(res);
                        } catch (error) {
                            this.$toast(error.response.data.message)
                        }
                    } else {
                        // 注册
                        try {
                            await getCode({mobile:this.photo,type:'register'})
                            this.$toast('发送成功')
                        } catch (error) {
                            this.$toast(error.response.data.message)
                        }
                    }
                }
                timer = setInterval(()=>{
                    this.time--
                    if(this.time === 0) {
                        clearInterval(timer)
                    }
                },1000)
            } else {
                this.$toast(`请在${this.time}后重新发送`)
            }
            
        }
    },
    created(){
        console.log(this.$route.query.from);
    }
}
</script>

<style lang="less" scoped>
.van-icon{
    font-size: 16px;
}
.van-radio{
    font-size: 14px;
}
.Login{
    margin-top: 10px;;
 }
 .check{
    float: right;
    margin:10px 0;
 }
</style>