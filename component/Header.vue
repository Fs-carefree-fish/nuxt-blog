<template>
  <div>
    <div class="header">
      <span class="header-name">假闲鱼的博客</span>
      <span v-if="!mobileFlag" class="header-introduce">热爱前端，学习技术，分享笔记 ...</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["mobileFlag"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;

  .header-name {
    margin-left: 40px;
    color: #fff;
    font-size: 30px;
    line-height: 80px;
  }
  .header-introduce {
    margin-left: 30px;
    color: #fff;
    font-size: 15px;
    line-height: 80px;
  }
}
</style>
