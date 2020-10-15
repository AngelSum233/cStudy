<template>
    <div>
      <div>
        <div class="title">
          <span>我的学习成就</span>
        </div>
        <div>
          <div class="box">
            <span class="text">打卡天数</span>
            <span class="num">35天</span>
          </div>
          <div class="box">
            <span class="text">已写程序</span>
            <span class="num">10个</span>
          </div>
          <div class="box">
            <span class="text">已学课程</span>
            <span class="num">2门</span>
          </div>
          <div class="box">
            <span class="text">学习进度</span>
            <span class="num">15%</span>
          </div>
          <el-calendar v-model="value" class="daily"></el-calendar>
        </div>
      </div>
      <bottomNavigation></bottomNavigation>
    </div>
</template>

<script>
import bottomNavigation from '../components/bottomNavigation'

export default {
  components: {
    bottomNavigation
  },
  data () {
    return {
      value: new Date()
    }
  }
}

</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
  }
  .title{
    margin-left: 0px;
    width: 100%;
    height: 60px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .title span{
    float: left;
    margin-top: 26px;
    margin-left: 20px;
    font-family: 微软雅黑;
  }
  .box{
    float: left;
    margin-left: 25px;
    margin-top: 20px;
    width: 40%;
    height: 80px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .text{
    float: left;
    margin-left: 10px;
    padding-top: 50px;
  }
  .num{
    float: left;
    margin-left: 15px;
    font-size: 25px;
    margin-top: 20px;
    color: #444343;
  }
  .daily{
    margin-top: 20px;
    float: left;
  }
</style>
