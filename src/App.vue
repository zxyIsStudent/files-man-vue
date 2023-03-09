<template>
  <div class="bage">
    <el-config-provider :locale="locale">
      <RouterView ></RouterView>
    </el-config-provider>

  </div>
  
  </template>
  
  <script>
  import {RouterView} from "vue-router"
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import { ElConfigProvider } from 'element-plus'
  
  
  export default {
    name: "App",
    components:{
      RouterView,
      ElConfigProvider
    },
    setup () {
      return {
          locale: zhCn,
        }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 14px;
  }
  .gesture{
    cursor: pointer;
  }
  
  #nprogress .bar {
    background: #214160 !important;
    height: 3px !important;
  }
  .el-container.is-vertical{
    flex: 1 0;
  }
  </style> 
  