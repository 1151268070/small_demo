<!-- 修改/新增地址 -->
<template>
  <div>
      <van-nav-bar
        :title="sid == 1 ? '新增地址' : '修改地址' " 
        left-arrow
        fixed
        @click-left="onClickLeft"
      />
      <div class="main">
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-set-default
          @save="onSave"
          :address-info= "sid == 2 ? checkAddress : {}"
        />
      </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
        sid: null,
    };
  },

  components: {},

  computed: {
    ...mapState(['myAddress', 'areaList', 'checkAddress'])
  },

  methods: {
    ...mapActions(['onSave']),  
    init(){
      if (this.$route.query.sid) {
        this.sid = this.$route.query.sid;
      } else {
        this.sid = 1;
      }
    },
    onClickLeft() {
        this.$router.back();
    }
  },

  created() {
    this.init();
  }
}

</script>
<style scoped>
    .main{
        padding-top: 50px;
        text-align: left;
    }
</style>