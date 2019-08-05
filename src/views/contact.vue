<!-- 这是我的页面 -->
<template>
  <div style="background: #b3b1b1">
      <div class="main" v-if="islogin">
        <div style="height: 100px;">
          <van-row>
            <van-col span="8">
              <img src="http://pifa.yunmayi.com/upload/2018/12/14/138c91a20ebae5938ef804c2b88a7bb8.png" width="50%" alt="">
            </van-col>
            <van-col span="16">
              <span class="userName">{{user.uname}}</span>
            </van-col>
          </van-row>
        </div>
        <div class="dingdan">
          <van-cell-group>
            <van-cell title="我的订单" value="查看全部订单" is-link @click="toOrder(0)"/>
          </van-cell-group>
          <van-grid :column-num="5">
            <van-grid-item 
              icon="pending-payment"
              text="待付款"
              @click="toOrder(1)"
            />
            <van-grid-item 
              icon="send-gift-o"
              text="待发货"
              @click="toOrder(2)"
            />
            <van-grid-item 
              icon="logistics"
              text="待收货"
              @click="toOrder(3)"
            />
            <van-grid-item 
              icon="completed"
              text="已完成"
              @click="toOrder(4)"
            />
            <van-grid-item 
              icon="after-sale"
              text="退款/售后"
              @click="toOrder(5)"
            />
          </van-grid>
        </div>
        <div class="dingdan">
          <van-cell-group>
            <van-cell title="我的 Vmall" />
          </van-cell-group>
          <van-grid :column-num="5" class="whites">
            <van-grid-item
              icon="location-o" 
              text="收货地址"
              @click="address"
            />
            <van-grid-item
              icon="stop-circle-o" 
              text="优惠劵"
            />
          </van-grid>
        </div>
        <div>
          <van-button type="primary" size="large" @click="quitLogin">退出登录</van-button>
        </div>
      </div>
      <div class="main" v-else>
        <h2>暂未登录</h2>
        <van-button type="primary" size="large" @click="goLogin">去登录</van-button>
      </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'; 
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
    ...mapState(['islogin', 'user'])
  },

  methods: {
    ...mapActions(['quitLogin']),
    goLogin () {
      this.$router.push('/login');
    },
    address () {
      this.$router.push('/address');
    },
    toOrder(i) {
      if(i === 5) {
        Dialog({
          message: '功能待开发'
        })
      } else {
        this.$router.push({name: 'order', query:{type: i}});
      } 
    }
  }
}

</script>
<style scoped>
  .main{
    padding: 20px 5px;
  }
  .userName{
    line-height: 50px;
    font-size: 18px;
    font-weight: hlod;
  }
  .dingdan{
    text-align: left;
    margin-bottom: 20px;
  }
  .whites{
    background-color: white;
  }
</style>