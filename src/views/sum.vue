<template>
  <div>
    <router-view />
    <van-tabbar route fixed>
        <van-tabbar-item icon="home-o" to="/sum/home">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/sum/apps">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/sum/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/sum/contact">我的</van-tabbar-item>
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

  methods: {}
}

</script>
<style scoped>
</style>