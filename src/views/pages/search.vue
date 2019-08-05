<!-- 搜索页 -->
<template>
  <div>
    <div class="headers">
      <van-row class="sao">
          <van-col class="col" span="3">
              <van-icon name="arrow-left" size="25" @click="back"/>
            </van-col>
            <van-col span="18">
              <van-search placeholder="请输入关键字" v-model="kw" @search="onSearch"/>
            </van-col>
            <van-col class="col" span="3">
              <div @click="diagram = !diagram">
                <van-icon v-show="diagram" name="bars" size="25"/>
                <van-icon v-show="!diagram" name="apps-o" size="25"/>
              </div>
            </van-col>
      </van-row>
    </div>
    <div class="main" v-if="list.count > 0">
      <van-list v-show="diagram"
        v-model="loading"
        :finished="finished" 
        finished-text="没有更多了"
        @load="onload"
      >
        <van-card 
          class="card_s"
          v-for="(item, index) in list.products"
          :key="index"
          :title="item.title"
          :thumb="require('../../assets/'+ item.img)"
          :desc="item.subtitle"
          :price="item.price"
        />
      </van-list>
      <van-list v-show="!diagram"
        v-model="loading"
        :finished="finished" 
        finished-text="没有更多了"
        @load="onload"
      >
        <van-grid :column-num="2">      
          <van-grid-item v-for="(item, index) in list.products" :key="index">
            <div>
              <img :src="require('../../assets/'+ item.img)" width="50%" alt="">
            </div>
            <p>{{item.title}}</p>
            <p>{{item.price}}</p>
          </van-grid-item>
        </van-grid>
      </van-list>
    </div>
    <div class="main" v-else>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kw: this.$route.params.kw,
      pno : 0,
      list: {},
      loading: false,
      finished: false,
      diagram: true
    };
  },

  components: {},

  computed: {},

  methods: {
    back() {
      this.$router.go(-1);
    },
    onSearch() {
      this.$router.push({name: 'search', params: {kw: this.kw}});
    },
    init() {
      this.$axios.get('/getproductBykw.php',{ params: { kw: this.kw, pno: this.pno}})
      .then(res => {
        this.list = res.data;
        console.log(this.list);
      })
    },
    onload() {
      setTimeout( ()=>{
        this.pno++;
        this.$axios.get('/getproductBykw.php',{ params: { kw: this.kw, pno: this.pno}})
        .then(res => {
          this.list.products = this.list.products.concat(res.data.products);
        })
        this.loading = false;
        if(this.pno>= this.list.pageCount-1){
          this.finished = true;
        }
      },500)
    }
  },
  created () {
    this.init();
  },
  mounted() {
    
  }
}

</script>
<style scoped>
  .card_s{
    height: 150px;
  }
  .headers{
    width: 100%;
    /* height: 50px; */
    /* background-color: red; */
    position: fixed;
    height: 100px;
    top: 0;
    z-index: 99;
  }
  .col {
    padding: 10px;
  }
  .sao{
    background-color: white;
  }
  .main{
    padding-top: 60px;
  }
</style>