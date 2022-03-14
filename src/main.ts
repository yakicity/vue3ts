//アプリケーションの起点となるファイル
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";

//import "element-plus/lib/theme-chalk/index.css";
//Vueインスタンスにライブラリを組み込むuseメソッドに、
//定義したルーター（router）を渡すことで有効化している
createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
