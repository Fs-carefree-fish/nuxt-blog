<template>
  <div class="index">
    <div class="index-bg"></div>
    <div class="index-nav" :class="{ fixed: isNavFixed }">
      <el-menu
        v-if="!mobileFlag"
        class="index-nav-menu"
        default-active="/blog"
        :router="isRouter"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/blog" class="index-nav-menu-item">
          <i class="el-icon-house"></i>
          <span slot="title">博客首页</span>
        </el-menu-item>
        <el-menu-item index="/myLife" class="index-nav-menu-item">
          <i class="el-icon-cold-drink"></i>
          <span slot="title">个人生活</span>
        </el-menu-item>
        <el-menu-item index="/notes" class="index-nav-menu-item">
          <i class="el-icon-edit"></i>
          <span slot="title">笔记总结</span>
        </el-menu-item>
        <el-menu-item index="/tutorial" class="index-nav-menu-item">
          <i class="el-icon-present"></i>
          <span slot="title">优秀教程</span>
        </el-menu-item>
        <el-menu-item index="/me" class="index-nav-menu-item">
          <i class="el-icon-coordinate"></i>
          <span slot="title">关于我</span>
        </el-menu-item>
      </el-menu>

      <el-menu
        v-if="mobileFlag"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="isRouter"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>文章分类</span>
          </template>
          <el-menu-item index="/myLife">
            <i class="el-icon-cold-drink"></i>
            <span slot="title">个人生活</span>
          </el-menu-item>
          <el-menu-item index="/notes">
            <i class="el-icon-edit"></i>
            <span slot="title">笔记总结</span>
          </el-menu-item>
          <el-menu-item index="/tutorial">
            <i class="el-icon-present"></i>
            <span slot="title">优秀教程</span>
          </el-menu-item>
          <el-menu-item index="/me">
            <i class="el-icon-coordinate"></i>
            <span slot="title">关于我</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="index-container">
      <!-- 子路由展示区域 -->
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware: "device",
  computed: {
    ...mapState(["isNavFixed", "mobileFlag"])
  },
  data() {
    return {
      isRouter: true //是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    };
  },
  asyncData(context) {
    // console.log("asyncData");
  }
};
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 80px;
}
.index {
  .index-bg {
    width: 100%;
    height: 140px;
    background: url("~static/bgImg.png");
    background-size: 100% 100%;
  }
  .index-nav {
    width: 100%;
    z-index: 2000;
    .index-nav-menu {
      display: flex;
      justify-content: center;
      text-align: center;
      .index-nav-menu-item {
        font-size: 18px;
      }
    }
  }
  .index-container {
    width: 100%;
    height: 1000px;
  }
}
</style>
