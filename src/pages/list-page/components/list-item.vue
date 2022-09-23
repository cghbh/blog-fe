<template>
  <div class="list-item" @click="$emit('detail')">
    <div class="list-item-left">
      <el-image
        style="width: 158px; height: 158px"
        :src="itemValue.avatar"
        fit="cover"
      ></el-image>
    </div>
    <div class="list-item-right">
      <h1 class="list-item-right-title">{{ itemValue.title }}</h1>
      <p class="list-item-right-content">{{ itemValue.content }}</p>
      <div class="list-item-right-tags">
        <div class="list-item-right-tags-item">
          <i class="iconfont icon-shijian"></i>
          <span>{{ itemValue.time }}</span>
        </div>
        <div class="list-item-right-tags-item">
          <i class="iconfont icon-31pinglun"></i>
          <span>{{ itemValue.commentNum }}</span>
        </div>
        <div
          class="list-item-right-tags-item"
          @click.stop.prevent="$emit('zan')"
        >
          <i class="iconfont icon-yuedu"></i>
          <span>{{ itemValue.readNum }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    // 列表每一项的数据
    itemValue: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  margin-bottom: 25px;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;

  &-left {
    margin-right: 18px;
  }
  &-right {
    flex: 1;
    /* 解决flex布局溢出的问题 */
    min-width: 0;
    position: relative;

    &-title {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 17px;
      font-weight: 600;
      color: #666;
    }

    &-content {
      font-size: 15px;
      color: #888;
      line-height: 24px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      margin-top: 15px;
    }

    &-tags {
      display: flex;
      width: 100%;
      position: absolute;
      bottom: 0;
      justify-content: space-between;
      font-size: 14px;

      &-item {
        display: flex;
        align-items: center;
        color: #888;

        .iconfont {
          font-size: 18px;
          margin-right: 4px;
        }
      }

      &-item:last-of-type {
        padding: 4px 10px;
      }
    }
  }
}
</style>
