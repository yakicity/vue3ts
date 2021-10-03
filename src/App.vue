<template>
  <div id="nav">
    <!-- ルーター経由のリンクは、aタグではなく、router-linkを利用します（to属性でリンク先を指定）-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/article">Article</router-link>
  </div>
  <!-- ルーター経由で呼び出されたコンポーネントは、router-viewの領域に反映される -->
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
