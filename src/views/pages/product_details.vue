<!-- 这是商品详情页 -->
<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-arrow
      @click-left="onClikLeft"
      @click-right="onClickRight"
      fixed
    >
      <van-icon name="share" slot="right"/>
    </van-nav-bar>
    <van-loading v-if="isLoading" size="24px" color="#1989fa" vertical>加载中...</van-loading>
    <div class="main" v-else> 
      <div width="100%">
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(item, index) in list.pics" :key="index">
            <img :src="require('../../assets/'+ item.md)" alt="" width="75%">
          </van-swipe-item>
          <div class="custom-indicator details_num" slot="indicator">{{ current + 1 }}/{{list.pics.length}}</div>
        </van-swipe>
      </div>
      <hr>
      <div class="details_title">
        <p class="price">¥ {{list.product.price}}</p>
        <p class="title">{{list.product.title}}</p>
        <p class="subtitle">{{list.product.subtitle}}</p>
        <p class="sales">促销  <span class="vantag"><van-tag plain type="danger">赠送积分</van-tag> 活动赠送翻倍积分，积分可抵现~</span></p>
      </div>
      <div class="choice">
        <van-row class="vanrow">
          <van-col span="4">
            <p>颜色</p>
          </van-col>
          <van-col offset="2" span="18">
            <div style="text-align: left;">
              <van-radio-group v-model="radio_color">
                <van-radio v-for="(item, index) in list.C_color" :name="index" :key="index">
                  <van-button style="margin-left: 5px;" size="small" round  plain  :type=" radio_color == index ? 'danger' : 'default' " @click="add_color(index,$event)">{{item.c_color}}</van-button>
                </van-radio>
              </van-radio-group>
            </div>
            <!-- <button v-for=""></button> -->
          </van-col>
        </van-row>
        <van-row class="vanrow">
          <van-col span="4">
            <p>版本</p>
          </van-col>
          <van-col offset="2" span="18">
            <div style="text-align: left;">
              <van-radio-group v-model="radio_spec">
                <van-radio v-for="(item, index) in list.specs" :key="index" :name="index">
                  <van-button style="margin-left: 5px;" size="small" round  plain  :type=" radio_spec == index ? 'danger' : 'default' " @click="add_spec(index, $event)">{{item.spec}}</van-button>
                </van-radio>
              </van-radio-group>
            </div>
            <!-- <button v-for=""></button> -->
          </van-col>
        </van-row>
        <van-row class="vanrow">
          <van-col span="4">
            <p>套餐</p>
          </van-col>
          <van-col offset="2" span="18">
            <div style="text-align: left;">
              <van-radio-group>
                <template v-for="(item, index) in list.meals">
                  <van-radio :name="index" :key="index">
                    <van-button style="margin-left: 5px;" size="small" round  plain :type=" radio_meal == index ? 'danger' : 'default' " @click="add_meal(index, $event)">{{item.meal}}</van-button>
                  </van-radio>
                </template>
              </van-radio-group>
            </div>
            <!-- <button v-for=""></button> -->
          </van-col>
        </van-row>
        <van-row class="vanrow">
          <van-col span="4">
            <p>数量</p>
          </van-col>
          <van-col offset="2" span="18">
            <div style="text-align: left">
              <van-stepper v-model="count"/>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="客服" 
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :info="car.length"
        @click="onClickCart" 
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickJion({count, lid})" 
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickBuy(
            {
              family_id: product.family_id,
              c_pic: product.c_pic, 
              lid: product.lid, 
              meal: product.meal, 
              price: product.price, 
              spec: product.spec, 
              title: product.title,
              subtitle: product.subtitle,
              c_color: product.c_color,
              count: count
            }
          )"
      />
    </van-goods-action>
  </div>
</template>

<script>
import qs from 'qs'
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      lid: '',
      list: null,
      current: 0,
      istype: false,
      isLoading: true,
      radio_color: 0,
      radio_spec: 0,
      radio_meal: 0,
      spec: null,
      color: null,
      meal: null,
      count: 1,
      product: null
    }
  },

  components: {},

  computed: {
    ...mapState(['car'])
  },

  methods: {
    ...mapActions(['Cart','onClickJion', 'onClickBuy']),
    init(index) {
      this.isLoading = true;
      if(index){
        this.lid = index
      }else {
        this.lid = this.$route.query.lid;
      }
      this.$axios.get('/getproductById.php',{params: {lid: this.lid}})
      .then(res =>{
        this.list = res.data;
        // console.log(this.list);
        this.product = this.list.product
        this.spec = this.list.product.spec;
        this.color = this.list.product.c_color;
        this.meal = this.list.product.meal;
        this.isLoading = false;
      })
    },
    onChange(index){
      this.current = index;
    },
    onClikLeft() {
      this.$router.back();
    },
    onClickRight() {

    },
    add_color(index,e) {
      this.radio_color = index;
      this.color = e.target.innerText;
      this.byId(this.color, this.spec, this.meal);
    },
    add_spec(index,e) {
      this.radio_spec = index;
      this.spec = e.target.innerText;
      this.byId(this.color, this.spec, this.meal);
    },
    add_meal(index,e) {
      this.radio_meal = index;
      this.meal = e.target.innerText;
      this.byId(this.color, this.spec, this.meal);
    },
    test(){
      setTimeout(()=>{
        for(var i = 0; i < this.list.C_color.length; i++) {
          if(this.list.C_color[i].c_color == this.list.product.c_color){
            this.radio_color = i;
          }
        }
        for(var i = 0; i < this.list.specs.length; i++) {
          if(this.list.specs[i].spec == this.list.product.spec){
            this.radio_spec = i;
          }
        }
        for(var i = 0; i < this.list.meals.length; i++) {
          if(this.list.meals[i].meal == this.list.product.meal) {
            this.radio_meal = i;
          }
        }
      }, 500)
    },
    byId(color, spec, meal) {
      this.$axios.post('/postproductById.php', qs.stringify( {c_color: color, spec: spec, meal: meal}))
        .then(res => {
          if(this.lid == res.data.lid){
            return false;
          } else {
            this.init(res.data.lid);
          }
      })
    },
    onClickCart() {
      this.$router.push('/sum/cart');
    }
  },
   
  created() {
    this.init();
    this.test();
    this.Cart();
  },
  mounted() {
  }
}

</script>
<style scoped>
  .main{
    padding-top: 50px;
    padding-bottom: 60px;
  }
  .details_num{
    position: absolute;
    bottom: 0;
    right: 10px;
    padding: 2px 10px;
    border-radius: 5px;
    background: #807f7f;
    color: white;
  }
  .details_title{
    padding: 5px 10px;
  }
  .details_title p{
    text-align: left;
    font-size: 16px;
    padding-top: 5px;
    font-weight: 600;
  }
  .details_title .price{
    color: red;
  }
  .details_title .subtitle{
    font-size: 12px;
    font-weight: normal;
    color: rgba(253, 98, 98, 0.925);
    padding-bottom: 10px;
    border-bottom: 1px solid #aca9a9f6;
  }
  .details_title .sales{
    padding-top: 10px;
    padding-bottom: 10px; 
    border-bottom: 1px solid #aca9a9f6;
    font-size: 12px;
  }
  .vantag{
    padding-left: 10px;
  }
  .choice{
    padding-top: 20px;
  }
  .choice p{
    line-height: 30px;
  }
  .vanrow{
    margin-bottom: 20px;
  }
</style>