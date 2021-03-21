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

<style lang='scss'>
html {
  font-size: 62.5%;
}
a, a:link, a:visited, a:hover, a:active {
  text-decoration: none;
  color: #2962ff;
}
footer {
  margin-top: 2.4rem;
}
li {
  padding-bottom: 1.2rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2.0rem 0;
}
.copyright {
  color: #8a8a8a;
  font-size: 1.2rem;
}
</style>
