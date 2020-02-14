<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-learn'
  }
</script>

<style>
  html, body {
    height: 200px;
    width: 500px;
    margin: 0;
    padding: 0;
  }


  #app {
    height: 200px;
    width: 500px;
    background: white;
    border: 1px, solid, white;
    border-radius: 5px;
  }
</style>
