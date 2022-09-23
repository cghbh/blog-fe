<template>
  <div class="home-header">
    <div class="home-container">
      <el-tabs v-model="activeTabsName" @tab-click="handleTabsClick">
        <el-tab-pane label="首页" name="index">首页</el-tab-pane>
        <el-tab-pane label="前端" name="front-end">前端</el-tab-pane>
        <el-tab-pane label="后端" name="back-end">后端</el-tab-pane>
        <el-tab-pane label="测试" name="soft-test">测试</el-tab-pane>
        <el-tab-pane label="随笔" name="article">随笔</el-tab-pane>
        <el-tab-pane label="留言" name="leave-message">留言</el-tab-pane>
      </el-tabs>
      <div class="home-header-user">
        <div class="home-header-user-search">
          <el-input
            v-model="inputValue"
            placeholder="搜索博客"
            style="width: 120px; transition: width 0.75s"
            clearable
            ref="inputRef"
            @focus="inputFocusHandle"
            @blur="inputBlurHandle"
          >
            <template #suffix>
              <i class="iconfont icon-sousuo"></i>
            </template>
          </el-input>
        </div>
        <el-button type="primary" v-if="!isLogin" @click="loginHandle"
          >登录
        </el-button>
        <el-button type="primary" v-if="!isLogin" @click="registerHandle"
          >注册
        </el-button>
        <el-button
          type="primary"
          @click="writeBlog"
          v-if="$store.state.loginUser.username === 'chengang'"
        >
          <i class="iconfont icon-bianjishuru"></i>写博客
        </el-button>
        <div class="login-user" v-if="isLogin">这是用户信息区域</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
export default {
  setup() {
    const inputValue = ref("");
    const inputRef = ref(null);
    const router = useRouter();
    const activeTabsName = ref("index");
    // 输入框获取焦点的时候
    const inputFocusHandle = () => {
      inputRef.value.$el.style.width = "200px";
    };
    // 输入框失去焦点的时候
    const inputBlurHandle = () => {
      inputRef.value.$el.style.width = "120px";
    };
    const handleTabsClick = () => {
      if (activeTabsName.value !== "leave-message") {
        router.push("/list/" + activeTabsName.value);
      } else {
        router.push("/" + activeTabsName.value);
      }
    };
    // 登陆操作
    const loginHandle = () => {
      ElMessage({
        message: "正在登录中，请稍后",
        type: "success",
      });
    };
    // 注册操作
    const registerHandle = () => {
      ElMessage({
        message: "正在注册中，请稍后",
        type: "success",
      });
    };
    // 写博客
    const writeBlog = () => {
      router.push("/publish");
      console.log("写博客");
    };
    return {
      inputValue,
      inputRef,
      activeTabsName,
      inputFocusHandle,
      inputBlurHandle,
      loginHandle,
      registerHandle,
      writeBlog,
      handleTabsClick,
    };
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.home-header {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  min-width: 1000px;
  background-color: rgb(205, 230, 239);
  background-color: #fff;

  &-user {
    display: flex;
    align-items: center;
    &-search {
      display: flex;
      align-items: center;
      margin-right: 20px;

      button {
        height: 32px;
        border: none;
        width: 56px;
        background-color: #409fea;
        color: #fff;
        cursor: pointer;
        border-radius: 0 4px 4px 0;
        outline: none;
      }
    }

    .login-user {
      font-size: 14px;
      color: red;
      margin-left: 20px;
      user-select: none;
    }
  }
}

.home-container {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 1000px;
  margin: 0 auto;

  ::v-deep .el-tabs__content {
    display: none !important;
  }

  ::v-deep .el-tabs__nav-wrap::after {
    height: 0;
  }

  ::v-deep .el-tabs__header {
    margin: 0;
  }

  ::v-deep .el-tabs__item {
    font-size: 20px;
  }
}

.icon-bianjishuru {
  margin-right: 4px;
}
</style>
