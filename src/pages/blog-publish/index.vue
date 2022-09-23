<template>
  <div class="publish-blog">
    <div ref="editor"></div>
    <div class="publish-blog-button">
      <el-button type="primary" @click="publishHandle">发布博客</el-button>
    </div>
  </div>
</template>

<script setup>
import WangEditor from "wangeditor";
import { ref, onMounted, onBeforeUnmount } from "vue";
// 代码高亮
import hljs from "highlight.js";
const editor = ref(null);
// 富文本编辑器的实例
let instance;
const publishHandle = () => {
  console.log(instance.txt.html(), "输出的文本");
};
onMounted(() => {
  instance = new WangEditor(editor.value);
  instance.highlight = hljs;
  instance.config.height = "450";
  // 图片上传路径配置
  instance.config.uploadImgServer = "/upload";
  // 视频上传路径配置
  instance.config.uploadVideoServer = "/api/upload-video";
  Object.assign(instance.config, {
    onchange() {
      console.log("change");
    },
  });
  instance.create();
});

// 页面卸载之前的操作
onBeforeUnmount(() => {
  instance.destroy();
  instance = null;
});
</script>

<style lang="less" scoped>
.publish-blog {
  width: 100%;
  margin-bottom: 40px;

  &-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    padding-right: 5px;
  }
}
</style>
