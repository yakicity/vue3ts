//アプリケーションの起点となるファイル
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Vueインスタンスにライブラリを組み込むuseメソッドに、
//定義したルーター（router）を渡すことで有効化している
createApp(App).use(store).use(router).mount("#app");
