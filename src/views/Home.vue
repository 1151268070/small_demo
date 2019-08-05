<template>
  <div>
    <div class="headers">
      <van-row class="sao">
        <van-col class="col" span="3">
          <van-icon name="scan" size="25"/>
        </van-col>
        <van-col span="18">
          <van-search placeholder="请输入关键字" v-model="value" @search="onSearch"/>
        </van-col>
        <van-col class="col" span="3">
          <van-icon name="chat-o" info="6" size="25"/>
        </van-col>
      </van-row>
      <van-tabs v-model="active" @click="onClick">
        <van-tab title="推荐"></van-tab>
        <van-tab title="华为"></van-tab>
        <van-tab title="荣耀"></van-tab>
        <van-tab title="新品"></van-tab>
        <van-tab title="数码惠"></van-tab>
      </van-tabs>
    </div>
    <div class="main">
       <Atmo-Item :data="datas"></Atmo-Item>
    </div>
  </div>
</template>

<script>
  import AtmoItem from './pages/components/Atmoitem';
export default {
  data () {
    return {
        active: 0,
        value: '',
        datas: {},
        banner: null,
        titles: ['推荐', '华为', '荣耀', '新品', '数码惠']
    };
  },

  components: {
     AtmoItem
  },

  computed: {},
  methods: {
    onSearch () {
      this.$router.push({name: 'search', params: {kw: this.value}});
    },
    onClick(index) {
      console.log(index);
    },
    init() {
      this.$axios.get('/get_banner.php')
        .then(res =>{
          this.datas.banner = res.data; 
        });
      this.$axios.get('/get_hwphone.php')
        .then( res => {
          this.datas.phones = res.data;
        })
    }
  },
  mounted() {
    this.init();
  }
}

</script>
<style scoped>
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
  .main{
    width: 100%;
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .sao{
    background-color: white;
  }
</style>
