<template>
  <div>
    <div>
      <div>
        <i class="el-icon-arrow-left"></i>
        <span class="title">在线编译( c 语言)</span>
      </div>
      <div class="tableLine1"></div>
      <div class="compileCode">
        <span
          style="color: white; margin-left: 5px; font-size: 20px; border: 1px"
          >main</span
        >
        <div class="tableLine2"></div>
      </div>
      <i class="el-icon-refresh-right" style="color: grey; margin-left: 10px"
        >清空</i
      >
      <el-button
        type="primary"
        icon="el-icon-caret-right"
        size="small"
        style="font-size: 16px; border-radius: 30px; margin-left: 225px"
        class="runBtn"
        >运行</el-button
      >
      <div class="compileResult">
        <span
          style="
            color: grey;
            margin-left: 5px;
            font-size: 18px;
            border: 1px;
            padding-top: 10px;
          "
          >运行结果</span
        >
        <div class="tableLine3"></div>
      </div>
    </div>
    <bottomNavigation></bottomNavigation>
  </div>
</template>

<script>
import bottomNavigation from '../components/bottomNavigation' // 底部导航栏
export default {
  components: {
    bottomNavigation
  }
}
</script>

<style>
.title {
  font-family: 华文行楷;
  font-size: 25px;
}
.tableLine1 {
  margin-bottom: 10px;
  margin-top: 1px;
  width: 100%;
  height: 1px;
  background-color: #d4d4d4;
  color: rgba(101, 101, 101, 1);
}
.compileCode {
  width: 100%;
  height: 400px;
  background-color: black;
  margin-bottom: 10px;
}
.tableLine2 {
  margin-bottom: 10px;
  margin-top: 1px;
  width: 60px;
  height: 1px;
  background-color: #d4d4d4;
  color: rgba(101, 101, 101, 1);
}
.compileResult {
  width: 100%;
  height: 400px;
  background-color: black;
  margin-top: 10px;
}
.tableLine3 {
  margin-bottom: 10px;
  margin-top: 2px;
  width: 80px;
  height: 1px;
  background-color: #d4d4d4;
  color: rgba(101, 101, 101, 1);
}
</style>
