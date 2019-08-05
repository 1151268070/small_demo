<!-- 订单页面 -->
<template>
  <div>
    <nav-bar :data="title"></nav-bar>
    <div class="main">
      <van-loading color="#1989fa" v-if="loading"/>
      <van-tabs v-model="active" animated swipeable v-else>
        <van-tab title="全部">
          <order-list :data="allorder"></order-list>
        </van-tab>
        <van-tab title="待付款">
          <order-list :data="arrearage"></order-list>
        </van-tab>
        <van-tab title="待发货">
          <order-list :data="waitKinds"></order-list>
        </van-tab>
        <van-tab title="待收货">
          <order-list :data="waitReceiving"></order-list>
        </van-tab>
        <van-tab title="已完成">
          <order-list :data="finish"></order-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import navBar from './components/navbar';
import orderList from './components/orderList'
export default {
  data () {
    return {
      title: '我的订单',
      active: 0,
      allorder: null, // 全部订单
      arrearage: [], //未付款的订单
      waitKinds: [], //待发货的订单
      waitReceiving: [], // 待收货的订单
      finish: [], // 已完成的订单,
      loading: true,
      addList: null
    };
  },

  components: {
    navBar,
    orderList
  },

  computed: {},

  methods: {
    init() {
      this.$axios.get('https://easy-mock.com/mock/5caabe35ce6932053c1c2495/example/order')
      .then(res =>{
        console.log(res.data);
        this.allorder = res.data.orderlist;
        this.addList = this.$route.query.data;
        console.log(this.addList);
        if(typeof this.addList == 'object') {
          this.allorder.unshift(this.addList);
        }
        this.allorder.forEach(item => {
          if(item.orderState == 1) {
            this.arrearage.push(item);
          } else if (item.orderState == 2) {
            this.waitKinds.push(item);
          } else if (item.orderState == 3) {
            this.waitReceiving.push(item);
          } else {
            this.finish.push(item);
          }
        });
        this.active = this.$route.query.type;
        setTimeout(() =>{
          this.loading = false;
        }, 1000)
      })
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
    background-color: #f0ecec;
    padding-bottom: 50px;
  }
</style>