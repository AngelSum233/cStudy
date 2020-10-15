<template>
  <div>
    <div>
      <div class="box1">
        <div>
          <i class="el-icon-arrow-left" style="font-size: 20px; margin-top: 15px; margin-left: 5px" @click="back"></i>
          <span class="title">心愿打印机</span>
        </div>
        <p class="content" style="margin-top:30px">
          print（）函数是用来输出的函数，<br>点击运行可以查看效果。<br>你可以修改函数中的内容试试看哦~<br>
        </p>
      </div>
      <div class="compileCode" style="margin-top: 90px">
        <span style="color: white; margin-left: 5px; font-size: 20px; border: 1px"
        >main.c</span>
        <i class="el-icon-plus" style="font-size: 10px;margin-left: 15px; color: white"></i>
        <div class="tableLine2"></div>
        <p style="color: white">
          1.print（'曾经有一份真挚的爱情摆bai在我面前，'）<br>
          2.print（'但我没有珍惜，'）<br>
          3.print（'等到失去了我才后悔莫及，'）<br>
          4.print（'尘世间最痛苦的事莫过于此，'）<br>
          5.print（'如果上天可以给我再来一次的机会，'）<br>
          6.print（'我会对那个女孩说三个字：“我爱你!”'）<br>
          7.print（'如果非要在这份爱前加一个期限的话，'）<br>
          8.print（'我希望是一万年!'）<br>
        </p>
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
        >运行结果</span>
        <div class="tableLine3"></div>
        <p class="content" style="color: white; margin-top: 10px">
          1.曾经有一份真挚的爱情摆bai在我面前,<br>
          2.但我没有珍惜，<br>
          3.等到失去了我才后悔莫及，<br>
          4.尘世间最痛苦的事莫过于此，<br>
          5.如果上天可以给我再来一次的机会，<br>
          6.我会对那个女孩说三个字：“我爱你!”<br>
          7.如果非要在这份爱前加一个期限的话，<br>
          8.我希望是一万年!<br>
        </p>
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
  },
  methods: {
    back () {
      this.$router.push({ path: '/games' })
    }
  }
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
  }
  .box1{
    width: 100%;
    background-color: white;
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)*/
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
  }
  .compileCode p{
    margin-left: 20px;
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
  .content{
    /*float: left;*/
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
