<!-- 登录 -->
<template>
  <div>
    <van-nav-bar title="登录"  right-text="注册" @click-right="onClickRight" fixed/>
    <div class="main">
      <van-icon name="manager-o" size="30px"/>
      <div>
        <van-cell-group v-show="isshow">
          <van-field
              v-model="username"
              label="用户名"
              placeholder="请输入用户名"
          />
          <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
          />
        </van-cell-group>
        <van-cell-group v-show="!isshow">
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号" 
          />
          <van-field
            v-model="authcode"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary">发送短信验证码</van-button>
          </van-field>
        </van-cell-group>
        <van-button  type="primary" size="large" @click="login({username, password})">登录</van-button>
        <p style="margin-top: 20px" @click="alter">{{istext}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import {Notify} from 'vant';
import {mapState, mapActions} from 'vuex'
import qs from 'qs';
export default {
  data () {
    return {
      username: '',
      password: '',
      isshow: true,
      istext: '短信验证码登录',
      phone: '',
      authcode: ''
    };
  },

  components: {},

  computed: {
    ...mapState(['islogin'])
  },

  methods: {
    ...mapActions(['login']),
    onClickRight() {
      this.$router.push('/register');
    },
    alter() {
      this.isshow = !this.isshow
      if(this.isshow) {
        this.istext = '短信验证码登录'
      } else {
        this.istext = '用户名登录'
      }
    }
  }
}

</script>
<style scoped>
  .main{
    padding-top: 100px;  
  }
</style>