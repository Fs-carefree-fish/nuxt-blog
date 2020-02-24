<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from "~/component/Header";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["mobileFlag", "isNavFixed"])
  },
  methods: {
    scrollEvent() {
      let heightTop =
        // 滚动条隐藏的长度
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(heightTop);
      if (heightTop > 58) {
        this.$store.commit("changeNavFixedFlag", true);
      } else {
        this.$store.commit("changeNavFixedFlag", false);
      }
    }
  },
  components: {
    Header
  },
  // },
  mounted() {
    // 页面滚动事件监听
    window.addEventListener("scroll", this.scrollEvent);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollEvent);
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
