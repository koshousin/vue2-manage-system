import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/",
      component: () => import("../pages/Home.vue"),
      children: [
        {
          name: "dashboard",
          path: "/dashboard",
          component: () => import("../pages/Dashboard.vue"),
        },
        {
          name: "table",
          path: "/table",
          component: () => import("../pages/Table.vue"),
        },
        {
          name: "tabs",
          path: "/tabs",
          component: () => import("../pages/Tabs.vue"),
        },
        {
          name: "form",
          path: "/form",
          component: () => import("../pages/Form.vue"),
        },
        {
          name: "editor",
          path: "/editor",
          component: () => import("../pages/Editor.vue"),
        },
        {
          name: "markdown",
          path: "/markdown",
          component: () => import("../pages/Markdown.vue"),
        },
        {
          name: "upload",
          path: "/upload",
          component: () => import("../pages/Upload.vue"),
        },
        {
          name: "icon",
          path: "/icon",
          component: () => import("../pages/Icon.vue"),
        },
        {
          name: "charts",
          path: "/charts",
          component: () => import("../pages/Charts.vue"),
        },
        {
          name: "drag",
          path: "/drag",
          component: () => import("../pages/Drag.vue"),
        },
        {
          name: "dialog",
          path: "/dialog",
          component: () => import("../pages/Dialog.vue"),
        },
        {
          name: "i18n",
          path: "/i18n",
          component: () => import("../pages/I18n.vue"),
        },
        {
          name: "404",
          path: "/404",
          component: () => import("../pages/404.vue"),
        },
        {
          name: "permission",
          path: "/permission",
          component: () => import("../pages/Permission.vue"),
        },
      ],
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../pages/Login.vue"),
    },
  ],
});

export default router;
