<template>
  <div>
    <div>
      <div class="box1">
        <div>
          <i class="el-icon-arrow-left" style="font-size: 20px; margin-top: 15px; margin-left: 5px"></i>
          <span class="title">在线编译1</span>
        </div>
      </div>
      <div class="compileCode">
        <span
          style="color: white; margin-left: 5px; font-size: 20px; border: 1px"
          >main.c</span>
        <i class="el-icon-plus" style="font-size: 10px;margin-left: 15px; color: white"></i>
        <div class="tableLine2"></div>
      </div>
      <i class="el-icon-refresh-right" style="color: grey; margin-left: 20px"
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
  *{
    margin: 0px;
    padding: 0px;
  }
  .box1{
    width: 100%;
    height: 50px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
.title {
  font-family: 微软雅黑;
  font-size: 20px;
  margin-left: 25px;
}
.compileCode {
  width: 90%;
  margin: auto;
  height: 400px;
  background-color: black;
  margin-bottom: 10px;
  margin-top: 10px;
}
.tableLine2 {
  margin-bottom: 10px;
  margin-top: 1px;
  width: 70px;
  height: 1px;
  background-color: #d4d4d4;
  color: rgba(101, 101, 101, 1);
}
.compileResult {
  margin: auto;
  width: 90%;
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
