<template>
    <div>
      <div class="title" style="font-size: 26px">
        代码小游戏
      </div>
      <div>
        <div class="gameBox">
          <div @click="goGame1">
            <span class="text" style="float: left; margin-top: 15px; margin-left: 30px; margin-right: -30px">心愿打印机</span>
            <img src="../assets/dayinji.png" alt="头像" class="img1"/>
            <h6>难度：简单</h6>
          </div>
        </div>
        <div class="gameBox">
          <div @click="goGame2">
            <span class="text" style="float: left; margin-top: 15px; margin-left: 30px; margin-right: -30px">猜数字小游戏</span>
            <img src="../assets/number.png" alt="头像" class="img1"/>
            <h6>难度：中等</h6>
          </div>
        </div>
        <div class="gameBox">
          <div @click="goGame3">
            <span class="text" style="float: left; margin-top: 15px; margin-left: 30px; margin-right: -30px">绘制圣诞树</span>
            <img src="../assets/tree.png" alt="头像" class="img1"/>
            <h6>难度：困难</h6>
          </div>
        </div>
        <div class="gameBox">
          <div @click="goGame4">
            <span class="text" style="float: left; margin-top: 15px; margin-left: 30px; margin-right: -30px">拯救小哪吒</span>
            <img src="../assets/toy.png" alt="头像" class="img1"/>
            <h6>难度：地狱</h6>
          </div>
        </div>
      </div>
      <bottomNavigation></bottomNavigation>
    </div>
</template>

<script>
import bottomNavigation from '../components/bottomNavigation'
export default {
  name: 'games',
  components: { bottomNavigation },
  methods: {
    goGame1 () {
      this.$router.push('/xinyuandayin')
    },
    goGame2 () {
      this.$router.replace('/caishuzi')
    },
    goGame3 () {
      this.$router.replace('/huizhishengdanshu')
    },
    goGame4 () {
      this.$router.replace('/zhengjiunezha')
    }
  }
}

</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .title{
    width: 100%;
    margin-left: 0px;
    height: 45px;
    padding-top: 8px;
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .gameBox{
    margin-top: 30px;
    margin-left: 70px;
    width: 260px;
    height: 100px;
    border-radius: 18px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    font-family: 华文中宋;
    font-size: 20px;
    text-align: center;
    background-color: bisque;
  }
  .img1{
    margin-left: 50px;
    margin-top: 15px;
  }
  .gameBox h6{
    margin-left: -130px;
    margin-top: -30px;
  }
</style>
