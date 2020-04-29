<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <div class="copyright">© 2020 Shota Sugiura</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
a, a:link, a:visited, a:hover, a:active {
  text-decoration: none;
  color: #2962ff;
}
.copyright {
  color: #8a8a8a;
  font-size: 12px;
}
</style>
