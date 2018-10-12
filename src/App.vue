<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li>Flex布局（1）</li>
      <li>Flex布局（2）</li>
      <li>Gird布局</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid red;
  ul{
    list-style: none;
  }
}
</style>
