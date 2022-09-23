<template>
  <div class="detai-page">
    <div v-html="newHtml"></div>
  </div>
</template>

<script>
export default {
  setup() {
    const html = `<h3>Vue3</h3><h3>Javascript+Typescript</h3><h3>微信小程序-----x</h3><h3>Node.js</h3><p>今年的学习目标整理与分析</p><ul><li><p>Vue3+ElementPlus+Koa2 全栈开发后台</p></li><li></li></ul><ul><li><p>晋级TypeScript高手，成为抢手的前端开发人才</p></li></ul><p>Vite 从入门到精通，玩转新时代前端构建法则</p><p>基于Vue3最新标准，实现后台前端综合解决方案</p><ul><li><p>从零打造微前端框架：实战“汽车资讯平台”项目</p></li></ul><ul><li><p>CSS架构系统精讲 理论+实战玩转蘑菇街</p></li></ul><p>React+React Hook+Egg 造轮子 全栈开发旅游电商应用</p><ul><li><p>前端性能优化，掌握行业实用、专业、前沿的解决方案</p></li></ul><p>Node.js-Koa2框架生态实战－从零模拟新浪微博</p><p>Node.js仿知乎服务端-深入理解RESTful API</p><p>没有Node之前的前端，就像是工地上负责装修的，后端盖好高楼大厦后，我们负责内部的硬装软装，提高用户体验，Node就像装修队学会了开后端的挖掘机，除了运送装修物料的速度变快了，我们前端装修队也可以用挖机去盖小楼了，虽然高楼大厦还是需要后端搞，但是四五层小楼和别墅（创业公司）的场景，前端自己就从盖楼到装修包圆了 这也是前端这几年工资高的原因</p><p>Node.js部分</p><ul><li><p>小马哥Node.js</p></li><li><p>珠峰Node.js</p></li><li><p>拉钩Node.js</p></li><li><p>慕课网Node.js知乎</p></li><li><p>开课吧Node.js大文件断点上传</p></li></ul><p>Vue部分</p><ul><li><p>why的Vue3</p></li><li><p>珠峰Vue3源码</p></li><li><p>慕课网koa+vue3'][]</p></li></ul><p>//JS部分</p><ul><li><p>why的JS高级</p></li><li><p>慕课网typescript</p></li><li><p>李南江typescript</p></li></ul><p>Koa2中间件</p><ul><li><p>koa-router路由</p></li><li><p>koa-body文件上传</p></li><li><p>jsonwebtoken生产token</p></li><li><p>koa-jwt鉴权解析</p></li><li><p>@koa/cors 跨域问题解决</p></li><li><p>koa-session 权限</p></li><li><p>koa-views渲染+ejs</p></li><li><p>koa-static静态资源托管</p></li><li><p>koa-helmet</p><p>网络安全得到越来越多的重视，<code>helmet</code> 通过增加如<code>Strict-Transport-Security</code>, <code>X-Frame-Options</code>, <code>X-Frame-Options</code>等<code>HTTP</code>头提高<code>Express</code>应用程序的安全性，<code>koa-helmet</code>为<code>koa</code>程序提供了类似的功能，参考<code>Node.js</code>安全清单。</p></li><li><p>koa-logger日志中间件</p></li></ul><ul><li><p>1月24日商务管理系统预算分配和报销月报页面开发</p></li></ul><ul><li><p>1月25日 商务管理系统报销月报页面开发（商务管理系统UI部分开发完毕，整体进度50%，等待年后接口年调）</p></li><li><p>1月26日Koa2源码学习</p></li><li><p>1月27日休假  </p></li><li><p>1月28日休假</p></li><li><p>1月29日休假</p></li><li><p>1月30日 休假</p></li><br/></ul>`;

    // 富文本处理
    const showHtml = (str) => {
      return str
        .replace(str ? /&(?!#?\w+;)/g : /&/g, "&amp;")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;nbsp;/g, "\u3000");
    };

    const newHtml = showHtml(html);
    console.log(newHtml, "html");

    return {
      html,
      showHtml,
      newHtml,
    };
  },
};
</script>

<style lang="less" scoped>
.detai-page {
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;

  ::v-deep p {
    line-height: 28px !important;
  }

  ::v-deep code {
    margin: 10px 0;
  }
}
</style>
