<!-- 购物车页面 -->
<template>
  <div>
      <van-nav-bar title="购物车" :right-text="rightText" @click-right="onClickRight"  fixed/>
      <div class="main">
        <div style="padding-top: 10px" v-if="car">
            <van-row v-for="(item, index) in car" :key="item.product_id" style="margin-bottom: 20px;">
              <van-col span="2">
                <input type="checkbox" :value="item.product_id" :checked="item.is_checked" @click="onChange(index)"/>
              </van-col>
              <van-col span="22">
                <van-card
                  class="card"
                  :title="item.title"
                >
                  <div slot="thumb" style="width: 90px; height: 90px;">
                    <h3>这是张图片，不要在意这些细节</h3>
                  </div>
                  <div slot="desc">
                    <p class="s_desc">{{item.c_color}} {{item.spec}} {{item.meal}}</p>
                  </div>
                  <div slot="price" class="price">
                    <span>¥ {{item.price}}</span>
                    <van-stepper style="display: block; float: right;" v-model="item.count" @change="onCount({iid: item.iid, count: item.count})"/>
                  </div>
                </van-card>
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="none" v-if="!car.length">
          <van-icon class="none_icon" name="info" color="red" size="25px"/>
          <span class="none_span">购物车中还没有商品，赶紧选购吧！</span>
          <div style="padding-top: 20px">
            <van-button size="small" plain hairline round type="danger" @click="go">去逛逛</van-button>
          </div>
        </div>
      <div class="close" v-show="car.length > 0">
        <van-submit-bar v-show="!isShow"
          :price="getPrice*100"
          button-text="结算" 
          @submit="onConfim"
        >
          <!-- <van-checkbox :checked="isCheckedAll">全选</van-checkbox> -->
          <input type="checkbox" :checked="isCheckedAll" @click="onCheckedAll">全选
        </van-submit-bar>
        <van-submit-bar 
          v-show="isShow"
          button-text="删除"
          @submit="onSubmit"
        >
          <input type="checkbox" :checked="isCheckedAll" @click="onCheckedAll">全选
          <div class="kong"></div>
        </van-submit-bar>
      </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      rightText: '编辑',
      isShow: false
    };
  },

  components: {},

  computed: {
    ...mapState(['car', 'checkboxList', 'isCheckedAll']),
    ...mapGetters(['getPrice'])
  },

  methods: {
    ...mapActions(['Cart', 'onChange', 'onSubmit', 'onCheckedAll', 'onCount', 'onConfim']),
    go () {
      this.$router.push('/');
    },
    onClickRight() {
      this.isShow = !this.isShow;
      if(this.isShow){
        this.rightText = '完成';
      } else {
        this.rightText = '编辑';
      } 
    }
  },

  created() {
    this.Cart()
  }
}

</script>
<style scoped>
  .main{
    padding-top: 50px;
  }
  .none{
    padding: 30px;
    height: 50px;
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
  .card{
    text-align: left;
  }
  .price{
    margin-top: 10px; 
  }
  .van-card__price {
    width: 100%;
  }
  .close{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 50px;
  }
  .van-submit-bar{
    position: relative;
  }
  .checkboxs{
    float: left;
  }
  .kong{
    flex: 1;
  }
</style>