<!-- 订单子组件 -->
<template>
  <div>
    <div class="orderList" v-for="(item, index) in data" :key="index" @click="orderDetail(index)">
      <van-cell
        :border="false"
        :title="item.store"
        icon="shop-o"
      >
        <span class="status">{{item.orderState | getsun}}</span>
      </van-cell>
      <van-card 
        v-for="(productlist, j) in item.productlist"
        :key="j"
        :title="productlist.title"
        :num="productlist.count"
        :thumb="productlist.image"
      >
        <div slot="desc">
          <p class="s_desc">{{productlist.subtitle}}</p>
        </div>
        <div slot="price" class="price">
        <span>¥ {{productlist.price | fixed}}</span>
        </div>
      </van-card>
      <div class="group">
        <p class="label">共{{item.allcount}}件商品 合计：¥ {{item.total | fixed}}</p>
        <br/>
        <p class="label">
          <van-button v-if="item.orderState == 2" class="vbutton" plain round size="small">提醒卖家发货</van-button>
          <van-button v-else class="vbutton" plain round size="small">查看物流</van-button>
          <van-button v-if="item.orderState == 1" class="vbutton" plain round size="small" type="danger">去付款</van-button>
          <van-button v-else-if="item.orderState == 4" class="vbutton" plain round size="small" type="danger">再来一单</van-button>
          <van-button v-else class="vbutton" plain round size="small" type="danger">确认收货</van-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: ['data'],

  components: {
  },

  methods: {
    orderDetail(i) {
      this.$router.push({name: 'orderDetail', query:{orderText: this.data[i]}});
    }
  },

  filters: {
    getsun: function (i) {
      let state = '';
      switch (i) {
        case 1 :
          state = '待付款';
          break;
        case 2 :
          state = '待发货';
          break;
        case 3 : 
          state = '待收货';
          break; 
        case 4 :
          state = "已完成订单"
          break;
      }
      return state;
    },
    fixed(i) {
      let value = 0
      value = Number(i);
      return value.toFixed(2);
    }
  }
}

</script>
<style scoped>
  .orderList{
    width: 95%;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20px;
  }
  .status{
    color: rgb(255, 108, 108);
  }
  .group{
    padding: 10px 5px;
  }
  .vbutton{
    padding: 0 15px;
    margin-left: 10px; 
  }
  .label{
    text-align: right;
    padding-right: 10px;
  }
</style>