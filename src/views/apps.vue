<template>
  <div>
      <div class="headers">
        <van-row>
          <van-col span="20">
            <van-search placeholder="请输入关键字" v-model="value" @search="onSearch"/>
          </van-col>
          <van-col span="3" style="padding-top: 15px">
              <van-icon name="chat-o" info="6" size="25"/>
          </van-col>
        </van-row>
      </div>
      <div class="main">
        <van-row>
          <van-col span="5">
             <!-- 左边导航栏 -->
            <div class="leftSide">
              <van-sidebar v-model="activeKey" >
                <van-sidebar-item 
                  v-for="(item, index) in list"
                  :key="index"
                  :title="item.name"
                  @click="fs(index)"
                />
              </van-sidebar>
            </div>
          </van-col>
          <van-col span="18">
            <cate-class :data="item"></cate-class>
          </van-col> 
        </van-row>
      </div>
  </div>
</template>

<script>
import cateClass from "./pages/components/cateclass"
export default {
  data () {
    return {
      value: '',
      activeKey: 0,
      list: [],
      item: []
    };
  },

  components: {
    cateClass
  },

  computed: {},

  methods: {
    init() {
      this.$axios.get('https://easy-mock.com/mock/5caabe35ce6932053c1c2495/example/cateClass')
      .then(res => {
        this.list = res.data.data;
        this.item = this.list[0];
        // console.log(this.list);
      })
    },
    onSearch () {
      this.$router.push({name: 'search', params: {kw: this.value}});
    },
    fs(i) {
      this.item = this.list[i];
    }
  },
  
  created() {
    this.init();
  }
}

</script>
<style scoped>
  .headers{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: white;
  }
  .main{
    padding-top: 60px;
    height: 100%;
  }
  .leftSide{
    height: 100%;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 60px;
  }
</style>