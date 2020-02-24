<template>
  <div class="blog">
    <el-row class="blog-container" :gutter="10">
      <!-- 左侧区域 -->
      <el-col :xs="lefthidSize" :sm="leftSize" :md="leftSize" :lg="leftSize" :xl="leftSize">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card" v-for="item of list" :key="item.id">
            <div slot="header" class="clearfix">
              <span>{{item.title}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
            </div>
            <div class="box-card-addTime">{{item.addTime}}</div>
            <!-- <div>{{item.introduce}}</div> -->
            <div class="box-card-articleIntroduce" v-html="compiledMarkdown(item.introduce)"></div>
          </el-card>
        </div>
      </el-col>
      <!-- 左侧区域结束 -->
      <!-- 右侧区域 -->
      <el-col
        :xs="righthidSize"
        :sm="rightSize"
        :md="rightSize"
        :lg="rightSize"
        :xl="rightSize"
        class="fixed"
      >
        <div class="grid-content bg-purple">
          <el-card class="myIntroduce" :body-style="{ padding: '0px' }">
            <img src="~assets/img//page.jpg" class="myIntroduce-image" />

            <el-avatar class="myIntroduce-avatar" :size="avatarSize" :src="circleUrl"></el-avatar>
            <div class="myIntroduce-detail">
              <div>假闲鱼</div>
              <div>热爱前端，喜欢技术,学习交流...</div>
              <div class="myIntroduce-link">
                <el-tooltip effect="dark" content="https://github.com/Fs-carefree-fish/nuxt-blog.git" placement="top-start">
                  <span class="myIntroduce-link-icon">
                    <i class="iconfont icon-github"></i>
                  </span>
                </el-tooltip>
                <el-tooltip effect="dark" content="723136370@qq.com" placement="top-start">
                  <span class="myIntroduce-link-icon line">
                    <i class="iconfont icon-youxiang"></i>
                  </span>
                </el-tooltip>
                <el-tooltip effect="dark" content="723136370" placement="top-start">
                  <span class="myIntroduce-link-icon line">
                    <i class="iconfont icon-qq"></i>
                  </span>
                </el-tooltip>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <!-- 右侧区域结束 -->
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      avatarSize: 50,
      circleUrl: require("~/assets/img/avatar.jpg"),
      lefthidSize: {
        span: 24,
        push: 0
      },
      righthidSize: {
        span: 0,
        offset: 0
      },
      leftSize: {
        span: 15,
        offset: 1
      },
      rightSize: {
        span: 6,
        offset: 1
      }
    };
  },
  methods: {
    compiledMarkdown(str) {
      return this.$compiledMarkdown(str);
    }
  },
  async asyncData({ $axios }) {
    const list = await $axios.$get("/list.json");
    return list;
  }
};
</script>
<style lang='scss' scoped>
.fixed {
  position: fixed;
  right: 80px;
}
.blog {
  .blog-container {
    width: 100%;
    z-index: 1000;
    padding-bottom: 30px;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  margin-top: 30px;
  .box-card-addTime {
    color: gray;
    margin-bottom: 15px;
  }
}
.myIntroduce {
  margin-top: 30px;
  height: 430px;
  width: 100%;
  padding: 30px 0;
  overflow: hidden;
  position: relative;
  .myIntroduce-image {
    width: 100%;
  }
  .myIntroduce-avatar {
    margin-top: 30px;
    margin-left: 30px;
    float: left;
  }
  .myIntroduce-detail {
    margin-top: 30px;
    float: right;
    div:nth-child(1) {
      font-size: 18px;
    }
    div:nth-child(2) {
      margin-right: 30px;
    }
  }
  .myIntroduce-link {
    width: 100%;
    height: 60px;
    background-color: #fafafa;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dcdcdc;

    .myIntroduce-link-icon {
      flex-grow: 1;
      // border: 1px solid gray;
      text-align: center;
      position: relative;
    }
    .line:before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 38px;
      background-color: #dcdcdc;
      position: absolute;
      top: 2px;
      left: 0;
    }
  }
}
</style>
