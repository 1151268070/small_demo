<!-- 结算页 -->
<template>
  <div>
    <nav-bar :data="is_title"></nav-bar>
    <div class="main">
      <van-cell-group>
        <van-cell
          @click="go(1)"
          :title="myAddress.length > 0 ? myAddress[addressIndex].name +', ' + myAddress[addressIndex].tel : '请先添加地址'" 
          :label="myAddress.length > 0 ? myAddress[addressIndex].province + myAddress[addressIndex].city + myAddress[addressIndex].county + myAddress[addressIndex].addressDetail : '' "  
        >
          <van-icon
            slot="right-icon"
            name="arrow"
            style="line-height: inherit;"
          />
        </van-cell>
      </van-cell-group>
      <div>
        <van-card
          v-for="(item, index) in buy"
          :key="index"
          class="card"
          :title="item.title"
          :num="item.count"
        >
          <div slot="thumb" style="width: 90px; height: 90px;">
          <h3>这是张图片，不要在意这些细节</h3>
          </div>
          <div slot="desc">
            <p class="s_desc">{{item.c_color}} {{item.spec}} {{item.meal}}</p>
          </div>
          <div slot="price" class="price">
          <span>¥ {{item.price}}</span>
          </div>
        </van-card>
      </div>
      <div>
        <van-cell-group>
          <van-cell
            title="商品金额"
            :value="total"
          />
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="shosenCoupon"
            @click="showList = true" 
          />
          <van-field
            v-model="message"
            label="留言"
            type="textarea"
            placeholder="请输入留言"
            rows="1"
            autosize
          />
        </van-cell-group>
      </div>
    </div>
    <van-submit-bar
      :price="queryMoney * 100"
      button-text="付款"
      @submit="payment({allcount: buy[0].count, coupon: useCoupon, message: myAddress[0], orderState: 2, ordertime: dateFormat, productlist: [buy[0]], shopId: '468131318541' , store: '华为官方店', total: queryMoney})"
    />
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="shosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import {mapState, mapActions} from 'vuex'
import navBar from './components/navbar';
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠1000元',
  reason: '',
  value: 15000,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '150',
  unitDesc: '元',
  description: '无门槛'
};
export default {
  data () {
    return {
        is_title: '确认订单',
        showList: false,
        addressIndex: 0,
        coupons: [coupon],
        disabledCoupons: [coupon],
        shosenCoupon: -1,
        useCoupon: 0,
        message: ''
    }
  },

  components: {
    navBar
  },

  computed: {
    ...mapState(['myAddress', 'buy']),
    total() {
      var total = 0;
      this.buy.forEach( item => {
        total += item.price * item.count
      });
      return total.toFixed(2);
    },
    queryMoney () {
      let Money = 0;
      this.buy.forEach( item => {
        Money += item.price * item.count
      });
      Money -= this.useCoupon
      return Money
    },
    dateFormat() {
      let date = new Date();
      const str = date.toISOString();
      const dateStr = str.split('T')[0];
      const timeStr = date.toTimeString().split(' ')[0]
      return dateStr + ' ' + timeStr
    }  
  },

  methods: {
    init() {
        var nice = this.$route.query.key;
        if (typeof nice != 'undefined') {
          this.addressIndex = this.$route.query.key;
        } else {
          this.addressIndex = 0;
        }
    },
    go(i) {
      this.$router.push({name: 'address', query:{sm: i}});  
    },
    onChange(i) {
      this.showList = false;
      this.shosenCoupon = i;
      if(i >= 0) {
        this.useCoupon = this.coupons[i].value / 100;
      } else {
        this.useCoupon = 0;
      }
  
      console.log(this.useCoupon);
    },
    payment(data) {
      Toast.success('购买成功！3秒后将跳转！');
      setTimeout(() => {
        this.$router.push({name: 'order', query:{data: data}});
      }, 3000);
    }  
  },

  created() {
      this.init();
  }
}

</script>
<style scoped>
  .main{
    padding-top: 50px;
    text-align: left;
  }
  .s_desc{
    margin-top: 10px;
    width: 90%;
    height: 35px;
    background-color: slategray;
    line-height: 35px;
    border-radius: 5px;
    color: white;
    text-align: center;
  }
  .price{
    margin-top: 10px; 
  }
</style>