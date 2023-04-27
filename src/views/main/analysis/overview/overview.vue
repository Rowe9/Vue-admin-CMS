<template>
  <div class="overview">
    <el-card class="box-card1" :header="header1">
      <div class="content">
        Vue3Admin基于Vue3、Pinia、VueRouter、Vite、ElementPlus、Typescript、Echart5等后台系统解决方案
      </div>
    </el-card>
    <el-card class="box-card2" :header="header2">
      <ul>
        <li>开发工具：<span>Visual Studio Code</span></li>
        <li>编程语言：<span>TypeScript 4.x + JavaScript</span></li>
        <li>构建工具：<span>Vite2.x / Webpack5.x</span></li>
        <li>前端框架：<span>Vue3.x</span></li>
        <li>路由工具：<span>Vue Router 4.x</span></li>
        <li>状态管理：<span>Pinia</span></li>
        <li>UI框架：<span>Element Plus</span></li>
        <li>可视化：<span>Echarts 5.x</span></li>
        <li>工具库：<span>@vueuse/core + dayjs + countup.js</span></li>
        <li>CSS预编译：<span>Sass / Less</span></li>
        <li>HTTP工具：<span>Axios</span></li>
        <li>代码规范：<span>EditorConfig + Prettier + ESLint</span></li>
      </ul>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header1?: string
  header2?: string
}

withDefaults(defineProps<IProps>(), {
  header1: '关于',
  header2: '技术栈'
})
</script>

<style lang="less" scoped>
.overview {
  .box-card1 {
    margin-bottom: 18px;
  }
  .box-card2 {
    ul {
      padding: 10px;
    }
    ul li {
      list-style: disc;
      padding: 5px;
    }
    span {
      color: rgba(10, 96, 189);
      padding-left: 8px;
    }
    span:hover {
      text-decoration: underline;
    }
  }
}
</style>
