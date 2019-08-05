<!-- 收货地址 -->
<template>
  <div>
    <van-nav-bar
      title="收货地址"
      left-arrow
      fixed
      @click-left="onClickLeft" 
    /> 
    <div class="main">
        <div v-if="myAddress.length">
            <van-cell-group>
                <van-swipe-cell v-for="(item, i) in myAddress" :key="i">
                    <van-cell
                        @click="choice(i)"
                        :title="item.name + ', '+ item.tel"
                        :label="item.province + item.city + (item.county ? item.county : '') + item.addressDetail"
                    >
                        <van-icon
                        slot="right-icon"
                        name="edit"
                        style="line-height: inherit;"
                        @click.stop="add({type: 2, key: i})"
                        />
                    </van-cell>
                    <template slot="right">
                        <van-button square type="danger" text="删除" @click.stop="del({id: i})" />
                    </template>
                </van-swipe-cell>
            </van-cell-group>
        </div>
        <div v-else>
            <h3>暂时没有地址</h3>
        </div>
    </div>
    <div class="footer">
        <van-button type="primary" size="large" @click="add({type: 1, key: ''})">添加地址</van-button>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      
    };
  },

  components: {},

  computed: {
    ...mapState(['myAddress'])
  },

  methods: {
    ...mapActions(['add', 'del']),
    onClickLeft () {
        this.$router.back();
    },
    choice(i) {
      if(this.$route.query.sm == 1) {
        this.$router.push({name: 'confim', query: {key: i} });
      }
      
    } 
  }
}

</script>
<style scoped>
    .main{
        padding-top: 60px;
        text-align: left;
    }
    .footer{
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>