<!-- 订单详情 -->
<template>
  <div style=" background-color: #f0ecec;">
    <nav-bar :data="title"></nav-bar>
    <div class="main">
      <div class="img_text">
        <span>交易成功</span>
        <img
          height="80px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div>
        <van-cell-group>
          <van-cell
            icon="logistics"
            title="已到达某某某"
            is-link
            label="2019-07-18 10:13:55" 
            center
            @click="show = !show"
          />
          <van-cell
            icon="location-o"
            :title="orderDetail.message.name + ', ' + orderDetail.message.tel "
            :label="orderDetail.message.province + ' ' + orderDetail.message.city + ' ' + orderDetail.message.county + ' ' + orderDetail.message.country + ' ' + orderDetail.message.addressDetail"
            center
          />
        </van-cell-group>
      </div>
      <div class="bill">
        <van-cell
          icon="shop-o"
          :title="orderDetail.store"
        />
        <van-card
          v-for="(item, index) in orderDetail.productlist"
          :key="index"
          :thumb="item.image"
          :title="item.title"
          :desc="item.subtitle"
          :price="item.price"
          :num="item.count"
        />
        <van-cell
          title="总价"
          :value="'¥' + (orderDetail.total + orderDetail.coupon)"
          :border="false" 
        />
        <van-cell
          title="优惠券"
          :value="'-¥' + orderDetail.coupon"
          :border="false" 
        />
        <van-cell
          title="实付款"
          :value=" '¥' + orderDetail.total"
          :border="false" 
        />
      </div>
      <div style="background-color: white">
        <van-cell-group>
          <van-cell
            title="订单信息"
          />
          <van-cell
            title="订单编号"
            :value="orderDetail.shopId"
          />
          <van-cell
            title="下单时间"
            :value="orderDetail.ordertime"
          />
        </van-cell-group>
      </div>
    </div>
    <van-popup 
      v-model="show"
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div>
        <h3>物流信息</h3>
        <p>快递单号：2221455421</p>
        <van-steps :active="active" direction="vertical">
          <van-step>
            <h3>【城市】物流状态1</h3>
            <p>2019-07-18 11:05:20</p>
          </van-step>
          <van-step>
            <h3>【城市】物流状态1</h3>
            <p>2019-07-18 11:05:20</p>
            </van-step>
          <van-step>
            <h3>【城市】物流状态1</h3>
            <p>2019-07-18 11:05:20</p>
          </van-step>
        </van-steps>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navBar from './components/navbar';
export default {
  data () {
    return {
      orderDetail: null,
      title: '订单详情',
      show: false,
      active: 0
    };
  },

  components: {
    navBar
  },

  computed: {},

  methods: {
    init() {
      this.orderDetail = this.$route.query.orderText;
      console.log(this.orderDetail);
    }
  },

  created() {
    this.init();
  }
}

</script>
<style scoped>
  .main{
    padding: 50px 0;
    text-align: left;
  }
  .img_text{
    background: linear-gradient(to right, rgba(255, 187, 0, 0.884) , rgba(255, 102, 0, 0.904));
    height: 125px;
    position: relative;
  }
  .img_text span{
    font-size: 16px;
    line-height: 125px;
    color: white;
    padding-left: 50px;
  }
  .img_text img{
    position: absolute;
    top: 50%;
    margin-top: -40px;
    right: 50px;
  }
  .bill{
    background-color: white;
    margin: 15px 0; 
  }
</style>