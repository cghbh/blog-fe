<template>
  <div class="home-page">
    <el-affix :offset="0">
      <home-header :is-login="isLogin" />
    </el-affix>
    <!-- 列表/详情展示区域 -->
    <home-main>
      <router-view></router-view>
    </home-main>
    <el-backtop :bottom="80" style="width: 56px; height: 56px">
      <i class="iconfont icon-huidaodingbu"></i>
    </el-backtop>
  </div>
</template>

<script>
import HomeHeader from "./components/home-header.vue";
import HomeMain from "./components/home-main.vue";
import { ref } from "vue";
export default {
  setup() {
    const isLogin = ref(false);
    return {
      isLogin,
    };
  },
  components: {
    HomeHeader,
    HomeMain,
  },
};
</script>

<style lang="less" scoped>
.icon-huidaodingbu {
  font-size: 18px;
  font-weight: bold;
}

.home-page {
  margin-bottom: 50px;
}
</style>
