<!-- 注册页面 -->
<template>
  <div>
    <van-nav-bar title="注册"  right-text="登录" @click-right="onClickRight" fixed/>
    <div class="main">
      <van-icon name="manager-o" size="30px"/>
      <div>
        <van-cell-group>
            <van-field
                v-model="username"
                label="用户名"
                placeholder="请输入用户名"
                @blur="getusername"
                :error="isuname"
                :error-message="error_message"
            />
            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
            />
            <van-field
                v-model="passwords"
                type="password"
                label="确认密码"
                placeholder="请输入密码"
                @blur="affirm" 
                :error="isupw"
                :error-message="error_upw"
            />
            <van-field
                v-model="phone"
                label="手机号"
                placeholder="请输入手机号"
                :error="isphone"
                :error-message="error_phone"
                @blur="getphone"
            />
            <van-field
                v-model="writeCode"
                label="验证码"
                placeholder="请输入验证码"
                :error="iscode"
                :error-message="error_code"
                @blur="getcode"
            >
                <p slot="right-icon" class="code" @click="createdCode">{{code}}</p>
            </van-field>
        </van-cell-group>
        <van-button  type="primary" size="large" @click="register">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import { Dialog } from 'vant';
import {Notify} from 'vant';
export default {
  data () {
    return {
        username: '',
        password: '',
        passwords: '',
        phone: '',
        isuname: false,
        error_message: '',
        isupw: false,
        error_upw: '',
        isphone: false,
        error_phone: '',
        code: '', // 验证码 随机
        writeCode: '',
        iscode: false,
        error_code: ''
    };
  },

  components: {},

  computed: {},

  methods: {
    getusername() {
        this.$axios.get('/getuname.php',{params: { uname: this.username }})
        .then(res => {
            if(res.data == '用户名已存在'){
                this.isuname = true;
                this.error_message = res.data
                return;
            } else {
                this.isuname = false;
                this.error_message = ''
            }
        })
    },
    affirm() {
        if(this.password != this.passwords){
            this.isupw = true;
            this.error_upw = "密码不一致请重新输入"
            return;
        } else {
            this.isupw = false;
            this.error_upw = ''
        }
    },
    getphone () {
        let TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
        if (TEL_REGEXP.test(this.phone)){
            this.isphone = false;
            this.error_phone = '';
        } else {
            this.isphone = true;
            this.error_phone = '手机号码格式错误'
            return;
        }
    },
    getcode() {
        var Code = this.writeCode.toUpperCase();
        if (Code === this.code){
            this.iscode = false;
            this.error_code = '';
        } else {
            this.iscode = true;
            this.error_code = '验证码输入错误';
            return;
        }
    },
    register() {
        if(this.username && this.passwords && this.passwords && this.phone && this.writeCode){
            if (!this.isphone && !this.isupw && !this.isuname && !this.iscode){
                this.$axios.post('/register.php', qs.stringify({uname: this.username, upwd: this.password, email: '', phone: this.phone}))
                .then(res => {
                    console.log(res);
                })
                // Notify({
                //     message: '注册成功',
                //     duration: 1000,
                //     onClose(){
                //         this.$router.push('/login');
                //     }
                // })
            } else {
                Dialog({message: '注册失败，请按照提示进行修改！'});
            }
        } else {
            Dialog({message: '注册失败，不能为空！'});
        }
    },
    onClickRight() {
      this.$router.push('/login');
    },
    createdCode() {
        this.code = '';
        var codeLength = 4;
        var randow = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i< codeLength; i++) {
            var index = Math.floor(Math.random()*36);
            this.code += randow[index];
        }
    }
  },
  created() {
      this.createdCode() 
  }
}

</script>
<style scoped>
  .main{
    padding-top: 50px;
  }
  .code{
    font-family:Arial;  
    font-style:italic;  
    font-weight:bold;  
    border:0;  
    letter-spacing:2px;  
    color:blue;  
    }  

</style>