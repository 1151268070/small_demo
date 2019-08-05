<!-- 分类页面 -->
<template>
  <div style="padding: 5px 10px; width: 100%;">
    <div v-for="(cate, index) in data.level" :key="index" style="margin-bottom: 40px;">
        <h3>{{cate.levelname}}</h3>
        <!-- <span>{{cate.leveldata}}</span> -->
        <van-grid :column-num="3">
            <van-grid-item
                v-for="(cats, i) in cate.leveldata"
                :key="i"
                :icon="cats.image"
                :text="cats.productName"
            /> 
        </van-grid>
    </div>
        <!-- <div for="(cate, index) in item.level" :key="index">
            <h3>{{cate.levelname}}</h3>
                <van-grid :column-num="3">
                <van-grid-item
                    v-for="(cats, i) in cate.leveldata"
                    :key="i"
                    :icon="cats.image"
                    :text="cats.productName"
                />
            </van-grid> 
        </div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props: ['data'],

  components: {},

  computed: {},

  methods: {
    offsetTop(e) {
        console.log(e)
    }
  }
}

</script>
<style scoped>
</style>