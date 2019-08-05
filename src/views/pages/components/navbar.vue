<template>
  <div>
      <van-nav-bar
        :title="data"
        left-arrow
        fixed
        @click-left="onClickLeft"  
      />
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
      onClickLeft() {
          this.$router.back();
      }
  }
}

</script>
<style scoped>
</style>