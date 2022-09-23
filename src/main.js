import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
// 内容布局重置
import "@/assets/css/reset.css";
import "element-plus/dist/index.css";
import "@/assets/iconfont/iconfont.css";
// 代码高亮css
import "highlight.js/styles/monokai-sublime.css";

const app = createApp(App);

// 修改ElementPlus的层级问题
app.use(ElementPlus, { zIndex: 9999 }).use(store).use(router).mount("#app");
