import Vue from "vue"
import VueRouter from "vue-router"
import {nanoid} from 'nanoid'

Vue.use(VueRouter);
// const {$bus:_bus} = Vue.prototype;

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
          meta: {
            name: "系统首页",
          },
        },
        {
          name: "table",
          path: "/table",
          component: () => import("../pages/Table.vue"),
          meta: {
            name: "基础表格",
          },
        },
        {
          name: "tabs",
          path: "/tabs",
          component: () => import("../pages/Tabs.vue"),
          meta: {
            name: "tab选项卡",
          },
        },
        {
          name: "form",
          path: "/form",
          component: () => import("../pages/Form.vue"),
          meta: {
            name: "基本表单",
          },
        },
        {
          name: "editor",
          path: "/editor",
          component: () => import("../pages/Editor.vue"),
          meta: {
            name: "富文本编辑器",
          },
        },
        {
          name: "markdown",
          path: "/markdown",
          component: () => import("../pages/Markdown.vue"),
          meta: {
            name: "markdown编辑器",
          },
        },
        {
          name: "upload",
          path: "/upload",
          component: () => import("../pages/Upload.vue"),
          meta: {
            name: "文件上传",
          },
        },
        {
          name: "icon",
          path: "/icon",
          component: () => import("../pages/Icon.vue"),
          meta: {
            name: "自定义图标",
          },
        },
        {
          name: "charts",
          path: "/charts",
          component: () => import("../pages/Charts.vue"),
          meta: {
            name: "图表",
          },
        },
        {
          name: "drag",
          path: "/drag",
          component: () => import("../pages/Drag.vue"),
          meta: {
            name: "拖拽列表",
          },
        },
        {
          name: "dialog",
          path: "/dialog",
          component: () => import("../pages/Dialog.vue"),
          meta: {
            name: "拖拽弹框",
          },
        },
        {
          name: "i18n",
          path: "/i18n",
          component: () => import("../pages/I18n.vue"),
          meta: {
            name: "国际化",
          },
        },
        {
          name: "404",
          path: "/404",
          component: () => import("../pages/_404.vue"),
          meta: {
            name: "404页面",
          },
        },
        {
          name: "permission",
          path: "/permission",
          component: () => import("../pages/Permission.vue"),
          meta: {
            name: "权限测试",
          },
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

router.beforeEach((to, from, next) => {
  next();
});
/* 利用后置路由守卫添加标签 */
router.afterEach((to, from) => {
  if (to.name == from.name) {
    return;
  }
  //console.log("to:", to, "from", from);
  Vue.prototype.$bus.$emit('addTag', {
    id: nanoid(),
    title: to.meta.name,
    isActive: true,
    name:to.name
  });
});

export default router;
