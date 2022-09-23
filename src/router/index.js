import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";
const routes = [
  {
    path: "/",
    name: "HomePage",
    redirect: "/list/index",
    component: () => import("@/pages/home-page/index.vue"),
    children: [
      {
        path: "list/:type",
        name: "ListPage",
        component: () => import("@/pages/list-page/index.vue"),
      },
      {
        path: "detail",
        name: "DetailPage",
        component: () => import("@/pages/detail-page/index.vue"),
      },
      {
        path: "publish",
        name: "PublishPage",
        component: () => import("@/pages/blog-publish/index.vue"),
      },
      {
        path: "leave-message",
        name: "LeaveMessage",
        component: () => import("@/pages/leave-message/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, "to");
  console.log(from, "from");
  console.log(store.state.loginUser, "store");
  if (store.state.loginUser.username !== "chengang" && to.path === "/publish") {
    next("/");
  } else {
    next();
  }
});

export default router;
