<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {Notify} from 'vant';
  export default {
    mounted () {
      this.$router.beforeEach((to, from, next)=>{
        if (to.meta.requireAuth) {
          this.$axios.get('/islogin.php')
          .then(res=>{
            if(res.data.ok == 0){
              Notify({
                message: '请先登录',
                duration: 1000,
                onClose(){
                  next({path: '/login'});
                }
              })
            }else{
              next();
            }
          })
        }else{
          next();
        }
      })
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul{
  list-style:none;
  } 
li{
  list-style:none;
  }
p{
  margin: 0;  
}
body{
  font-size: 12px;
}
</style>
