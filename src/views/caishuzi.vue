<template>
  <div>
    <div>
      <div class="box1">
        <div>
          <i class="el-icon-arrow-left" style="font-size: 20px; margin-top: 15px; margin-left: 5px" @click="back"></i>
          <span class="title">猜数字小游戏</span>
          <p class="content" style="margin-top: 30px">
            C语言通过input（）函数从外界获取输入的信息<br>从而完成人机交互<br>现在先来看看运行效果把~<br>
          </p>
        </div>
      </div>
      <div class="compileCode" style="margin-top: 90px">
        <span style="color: white; margin-left: 5px; font-size: 20px; border: 1px"
        >main.c</span>
        <i class="el-icon-plus" style="font-size: 10px;margin-left: 15px; color: white"></i>
        <div class="tableLine2"></div>
        <p style="color: white">
          1.num = 414//23<br>
          2.number = input('猜一猜414//23运行结果吧')<br>
          3.times = 1<br>
          4.while True<br>
          5.if times > 2：<br>
          6.break<br>
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
          1.输入数字：1<br>
          2.猜错了，再试一次吧<br>
          3.输入数字：20<br>
          4.又错了，还有一次机会哦<br>
          5.输入数字：15<br>
          6.恭喜你，猜对啦！<br>
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
      this.$router.replace('/games')
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
    margin-top: 80px;
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
    float: left;
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
