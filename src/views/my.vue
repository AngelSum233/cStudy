<template>
  <div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="contentTop">
        <img src="../assets/headpic.png" alt="头像">
        <div style="display:flex;flex-direction: column;">
          <span style="font-size:28px;color:black">立即登录</span>
          <span style="font-size:16px;color:#c3c3c3;margin-top:11px">每天努力一点点~</span>
        </div>
      </div>
      <div class="contentC" v-for="(myFun,index) in myFunList" :key="index">
        <div style="border: 1px solid #c2c2c2;width:95%;margin-left:10px;margin-right:10px;margin-top:14px"></div>
        <div class="contenttext">
          <img class="myFunImg" v-bind:src="myFun.url"  alt="图片">
          <span>{{myFun.title}}</span>
          <span class="jiantou">></span>
        </div>
      </div>
    </div>
    <bottomNavigation></bottomNavigation>
  </div>
</template>

<script>
import bottomNavigation from '../components/bottomNavigation' // 底部导航栏
export default {
  data () {
    return {
      myFunList: [
        { url: require('../assets/lianxi.png'), title: '我的练习' },
        { url: require('../assets/shoucang.png'), title: '我的收藏' },
        { url: require('../assets/xiaoxi.png'), title: '我的消息' }
      ]
    }
  },
  components: {
    bottomNavigation
  }
}
</script>

<style scoped>
.contentTop{
  display: flex;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
.contentTop img{
  width: 80px;
  height: 80px;
  margin-right: 15px;
}
.myFunImg{
  width: 32px;
  height: 32px;
  margin-right: 13px;
}
.contenttext{
  display:flex;
  align-items: center;
  font-size: 20px;
  color: #444343;
  margin-top: 10px;
  margin-left: 10px;
}
.contenttext .jiantou{
  position: absolute;
  right: 20px;
  font-size: 22px;
}
</style>
