import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

//http://localhost:8080にアクセスするとHomeコンポーネントが呼び出される
//そして、/aboutを追加すると、Aboutコンポーネントが呼び出されることになります
const routes: Array<RouteRecordRaw> = [
  {
    //リクエストパス
    path: "/",
    //ルートの名前
    name: "Home",
    //ルーティングによって呼び出されるコンポーネント
    //<router-view /> が配置された箇所でレンダリングされる
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/userdetails/:id",
    name: "UserDetails",
    component: () => import("../views/UserDetails.vue"),
  },
  {
    path: "/calender",
    name: "Calender",
    component: () => import("../views/Calender.vue"),
  },
  {
    path: "/sysadtest",
    name: "Sysadtest",
    component: () => import("../views/Sysadtest.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("../views/Todo.vue"),
  },
];

//createRouterメソッドによって、ルーティング情報を扱うルーターが生成
const router = createRouter({
  //historyモードの基本情報(ほぼ定型)
  history: createWebHistory(process.env.BASE_URL),
  //routes変数の値が割り当てられている
  //実際のルートが定義されているのは、routes変数(上)
  routes,
});

export default router;

//ルーターは/src/main.jsで有効化されている
