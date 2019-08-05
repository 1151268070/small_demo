<!-- 子组件 -->
<template>
  <div>
    <!-- 轮播 -->
    <div width="100%">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in data.banner" :key="index">
          <img :src="require('../../../assets/'+ image.img)" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商城头条 -->
    <div class="front">
      <van-row>
        <van-col span="5">
          <p class="small">商城头条</p>
        </van-col>
        <van-col offspan="1" span="16">
          <van-swipe :autoplay="3000" style="height: 50px" vertical :show-indicators="false">
            <van-swipe-item v-for="(item, index) in news" :key="index">
              <p class="s_news">{{item.title}}</p>
            </van-swipe-item>
          </van-swipe>
        </van-col>
        <van-col span="3">
          <p>更多</p>
        </van-col>
      </van-row>
    </div>
    <!-- 限时购 -->
    <div class="limit">
      <p class="times_limit">限时购 <van-icon name="hot-o" color="red"/>{{timer}} <span>后结束</span></p>
      <van-swipe :show-indicators="false" :loop="false" :width="100">
          <van-swipe-item v-for="(item) in data.phones" :key="item.lid">
            <div class="subject">
              <img :src="require('../../../assets/' + item.img)" width="50%" alt="">
              <p class="sub_title">{{item.subtitle}}</p>
            </div>
            <p class="size_p">{{item.title}}</p>
            <p class="size_p">{{item.price}}</p>
          </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品展示 -->
    <div>
      <van-row>
        <van-col span="12">
          <div style="padding: 1px" width="100%" @click="go">
            <img src="../../../assets/img/1528445750613.jpg" width="100%;" alt="">
          </div>
        </van-col>
        <van-col span="12">
          <van-row>
            <van-col span="24">
              <div style="padding: 1px">
                <img src="../../../assets/img/20180611085953619.jpg" width="100%" alt="">
              </div>
            </van-col>
          </van-row>
          <van-row>
            <van-col span="24">
              <div style="padding: 1px">
                <img src="../../../assets/img/20180601102648404.png" width="100%" alt="">
              </div>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="12">
          <div style="padding: 1px">
            <img src="../../../assets/img/20180607151142377.png" alt="" width="100%">
          </div>
        </van-col>
        <van-col span="12">
          <div style="padding: 1px">
            <img src="../../../assets/img/20180611091128176.png" alt="" width="100%">
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="12">
          <div style="padding: 1px">
            <img src="../../../assets/img/20180607151142377.png" alt="" width="100%">
          </div>
        </van-col>
        <van-col span="12">
          <div style="padding: 1px">
            <img src="../../../assets/img/20180611091128176.png" alt="" width="100%">
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">
          <div class="seet">
            <img src="../../../assets/img/428_428_1513560677378mp.jpg" width="70%" alt="">
            <p class="size_p">HUAWEI nova5i</p>
            <p class="size_p">¥1999</p>
          </div>
        </van-col>
        <van-col span="8">
          <div class="seet">
            <img src="../../../assets/img/428_428_1513560677378mp.jpg" width="70%" alt="">
            <p class="size_p">HUAWEI nova5i</p>
            <p class="size_p">¥1999</p>
          </div>
        </van-col>
        <van-col span="8">
          <div class="seet">
            <img src="../../../assets/img/428_428_1513560677378mp.jpg" width="70%" alt="">
            <p class="size_p">HUAWEI nova5i</p>
            <p class="size_p">¥1999</p>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="phone">
      <h3>手机</h3>
       <van-row>
        <van-col span="11">
          <div class="subject">
            <img :src="require('../../../assets/'+ list[0].img)" width="100%" alt="">
            <p class="sub_title">{{list[0].subtitle}}</p>
          </div>
          <p class="size_p">{{list[0].title}}</p>
          <p class="size_p">{{list[0].price}}</p>
        </van-col>
        <van-col offset="2" span="11">
          <div class="subject">
            <img :src="require('../../../assets/'+ list[1].img)" width="100%" alt="">
            <p class="sub_title">{{list[1].subtitle}}</p>
          </div>
          <p class="size_p">{{list[1].title}}</p>
          <p class="size_p">{{list[1].price}}</p>
        </van-col>
      </van-row> 
      <van-row>
        <van-col span="11">
          <div class="subject">
            <img :src="require('../../../assets/'+ list[2].img)" width="100%" alt="">
            <p class="sub_title">{{list[2].subtitle}}</p>
          </div>
          <p class="size_p">{{list[2].title}}</p>
          <p class="size_p">{{list[2].price}}</p>
        </van-col>
        <van-col offset="2" span="11">
          <div class="subject">
            <img :src="require('../../../assets/'+ list[3].img)" width="100%" alt="">
            <p class="sub_title">{{list[3].subtitle}}</p>
          </div>
          <p class="size_p">{{list[3].title}}</p>
          <p class="size_p">{{list[3].price}}</p>
        </van-col>
      </van-row> 
      <div>
        <van-swipe :show-indicators="false" :loop="false" :width="100">
            <van-swipe-item v-for="(item) in data.phones" :key="item.lid">
              <div class="subject">
                <img :src="require('../../../assets/' + item.img)" width="90%" alt="">
                <p class="sub_title">{{item.subtitle}}</p>
              </div>
              <p class="size_p">{{item.title}}</p>
              <p class="size_p">{{item.price}}</p>
            </van-swipe-item>
        </van-swipe>
      </div>
      <p>发现更多手机<van-icon name="arrow"/></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtmoItem',

  props: ['data'],

  data() {
    return {
      list: [
        {lid: '1', title: '华为畅享9s', subtitle: '领劵50+赠耳机', img:"img/428_428_1526973272209mp.jpg", price: '799'},
        {lid: '2', title: '华为畅玩8c', subtitle: '最高优惠300', img: "img/428_428_1504174265912mp.jpg", price: '549'},
        {lid: '3', title: '华为畅享9 Plus', subtitle: '64g领劵减200', img: "img/428_428_1504174265912mp.jpg", price: '1399'},
        {lid: '4', title: '荣耀Note10', subtitle: '最高优惠900元', img: "img/428_428_1504174265912mp.jpg", price: '1899'}
      ],
      news: [
        {nid: '1', title: '荣耀9吧唧吧唧吧唧吧吧唧吧唧吧唧吧唧吧唧吧唧吧吧唧吧唧吧唧吧唧吧唧吧唧吧吧唧吧唧吧唧'},
        {nid: '2', title: '新品众测5343434683215144412342224344324'},
        {nid: '3', title: '华为5g双模s33133s13ds13sd1a3'},
        {nid: '4', title: '快来说说你喜欢的手机213431513513513'}
      ],
      timer: null
    }
  },

  components: {},

  computed: {
  },

  methods: {
    timers() {
      var startTime =Date.parse(new Date());
      var endTime = Date.parse(new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000));
      var end = endTime - startTime;

      var hh = Math.floor(end / 1000 / 60 / 60 % 24);
      var mm = Math.floor(end / 1000 / 60 % 60);
      var ss = Math.floor(end / 1000 % 60);
      hh = checkTime(hh);
      mm = checkTime(mm);
      ss = checkTime(ss);
      function checkTime(i){
        if (i<10) {
          i = "0"+i;
        }
        return i;
      }
      this.timer = hh + ':' + mm + ':' + ss;
      setTimeout(this.timers, 1000);
    },
    go () {
      this.$router.push({name:'product_details', query: {lid: 10}})
    }
  },
  created() {
    this.timers();
  },
  mounted() {
  }
}

</script>
<style scoped>
  .size_p{
    font-size: 12px;
  }
  .seet{
    background-color: rgba(153, 153, 153, .1);
  }
  .subject{
    position: relative;
    border-radius: 5px;
  }
  .sub_title{
    position: absolute;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
    bottom: 0;
    left: 0;
    font-size: 12px;
    overflow: hidden;
  }
  .front{
    width: 100%;
    height: 50px;
  }
  .front p{
    padding-left: 5px;
    line-height: 50px;
    font-weight: hold;
  }
  .small{
    font-size: 16px;
  }
  .s_news{
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .limit{
    width: 100%;
    height: 130px;
    background-color: #f7f7f7;
  }
  .times_limit{
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .times_limit>span{
    font-size: 12px;
    color: #333333;
  }
</style>