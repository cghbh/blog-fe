<template>
  <div class="home-main">
    <div class="home-main-article">
      <slot></slot>
    </div>
    <div class="home-main-sidebar"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home-main {
  width: 80%;
  min-width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 25px;

  &-article {
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 50px;
  }

  &-sidebar {
    width: 240px;
    height: 400px;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
