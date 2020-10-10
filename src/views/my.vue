<template>
  <div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="contentTop">
        <img src="../assets/headpic.png" alt="头像" />
        <div style="display: flex; flex-direction: column">
          <span style="font-size: 28px; color: black" @click="loading">{{loadingMes}}</span>
          <span style="font-size: 16px; color: #c3c3c3; margin-top: 11px"
            >每天努力一点点~</span
          >
        </div>
      </div>
      <div class="contentC" v-for="(myFun, index) in myFunList" :key="index">
        <div class="contenttext">
          <img class="myFunImg" v-bind:src="myFun.url" alt="图片" />
          <span>{{ myFun.title }}</span>
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
      ],
      loadingMes: '立即登录'
    }
  },
  components: {
    bottomNavigation
  },
  methods: {
    loading () {
      this.$router.push({ path: '/login' })
      /* this.loadingMes = window.sessionStorage.getItem('name') */
      console.log(window.sessionStorage.getItem('name'))
    }
  }
}
</script>

<style scoped>
.content {
  margin-left: 10px;
}
.contentTop {
  display: flex;
  margin-top: 20px;
  margin-right: 10px;
  margin-top: 10px;
}
.contentTop img {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}
.myFunImg {
  width: 32px;
  height: 32px;
  margin-right: 13px;
  margin-left: 5px;
}
.contenttext {
  display: flex;
  align-items: center;
  font-size: 19px;
  color: #444343;
  height: 62px;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5%;
  box-shadow: 0px 0px 10px rgb(230, 227, 227);
}
.contenttext .jiantou {
  position: absolute;
  right: 20px;
  font-size: 22px;
}
</style>
