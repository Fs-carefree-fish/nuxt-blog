<!--带id的详情页，即动态路由-->
<template>
  <div class="me">
    <el-row class="me-container">
      <!-- 左侧区域 -->
      <el-col :xs="ydSize" :sm="size" :md="size" :lg="size" :xl="size">
        <div>
          <el-card class="box-card" v-for="item of data" :key="item.id">
            <div slot="header" class="clearfix">
              <span class="box-card-title">{{item.title}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">{{item.view_count}}</el-button>
            </div>
            <div class="box-card-addTime">{{item.addTime}}</div>
            <div class="box-card-articleIntroduce" v-html="compiledMarkdown(item.article_content)"></div>
          </el-card>
        </div>
      </el-col>
      <!-- 左侧区域结束 -->
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: {
        span: 16,
        offset: 4
      },
      ydSize: {
        span: 20,
        offset: 2
      },
      list: []
    };
  },
  methods: {
    compiledMarkdown(str) {
      return this.$compiledMarkdown(str);
    }
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get("/detail.json");
    return data;
  },
  mounted() {
    console.log("data", this.data);
  }
};
</script>
<style lang='scss' scoped>
.me-container {
  padding-bottom: 30px;
}
.box-card {
  width: 100%;
  margin-top: 30px;
  padding-bottom: 20px;
  .box-card-title {
    font-weight: bold;
    font-size: 20px;
  }
  .box-card-addTime {
    color: gray;
    margin-bottom: 15px;
  }
}
</style>
