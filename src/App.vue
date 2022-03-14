<template>
  <div id="nav">
    <!-- ルーター経由のリンクは、aタグではなく、router-linkを利用します
    （to属性でリンク先を指定）-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/userdetails">UserDetails</router-link> |
    <router-link to="/calender">Calender</router-link> |
    <router-link to="/sysadtest">Sysadtest</router-link> |
    <router-link to="/todo">Todo</router-link>
  </div>
  <!-- ここの部分に <router-link> から router.js を経由して呼び出された
    コンポーネントの内容が描画される。これが無いと コンポーネントを呼び出している
    の描画されない ということになるので注意 -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
