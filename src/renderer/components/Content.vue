<template>
  <div id="content">
    <div class="title">
      <button class="close-button" @click="close">×</button>
    </div>

    <div class="content-body">
      <div class="body-text">
        <!-- 在此可以修改你要提问的内容，或者加上ta的名字 -->
        你喜欢我吗？
        <!-- 你是猪吗？ -->
      </div>
      <div class="body-button">
        <button class="dislike-button" style="margin-right:20px" disabled>不喜欢</button>
        <button class="like-button" @click="like">喜欢</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {ipcRenderer} from 'electron'
  export default {
    name: 'Content',
    data() {
      return({
        msg: "Hello Electron"
      })
    },

    methods: {
      close() {
        ipcRenderer.send('close');
      },
      like() {
        ipcRenderer.send('like');
      }
    },
  }
</script>

<style>
  #content {
    height: 200px;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .title {
    height: 30px;
    width: 100%;
    text-align: right;
    background: #E0E0E0;
  }

  .close-button {
    height: 30px;
    width: 30px;
    font-size: 25px;
    text-align: center;
    vertical-align: middle;
    padding: 0px;
    margin: 0px;
    border: 0px;
    outline: none;
    color: #404040;
  }

  .close-button:hover {
    background: red;
    color: white;
  }

  .content-body {
    height: 170px;
  }

  .body-text {
    height: 50px;
    width: 485px;
    padding-top: 25px;
    padding-left: 15px;
    font-size: 25px;
    font-weight: bold;
    font-family: "楷体";
    color: #ff006b;
  }

  .body-button {
    /* height: 120px; */
    padding-left:250px;
  }

  .dislike-button {
    height: 40px;
    width: 80px;
    border: 1px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    font-family: "楷体";
    opacity:0.5;
    pointer-events:none;
    color: #404040;
  }

  .like-button {
    height: 40px;
    width: 80px;
    border: 1px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    font-family: "楷体";
    color: #ff006b;
  }
  .like-button:hover {
    background: green;
    color: white;
  }

</style>
