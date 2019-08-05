<!-- tbr标签 -->
<template>
  <div>
    <van-tabbar route fixed>
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/apps">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style scoped>
</style>