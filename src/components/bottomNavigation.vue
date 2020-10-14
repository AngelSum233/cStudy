<template>
  <div id="bottomNavigationFullScreen">
    <div class="bottomNavigation_content">
      <div class="bottomNavigation_li_content">
          <!-- 首页 -->
        <div class="bottomNavigation_li_public_content" @click="clickChang('/')">
          <img v-bind:src="imagesUrl.homeIcon" alt="" />
          <div :class=" imagesUrl.editIcon.indexOf('shouye1') === -1 ? 'no_select' : 'select' ">
            首页
          </div>
        </div>
        <!-- 编程 -->
        <div class="bottomNavigation_li_public_content" @click="clickChang('/edit')">
          <img :src="imagesUrl.editIcon" alt="" />
          <div :class=" imagesUrl.editIcon.indexOf('bianxie1') === -1 ? 'no_select' : 'select' ">
            编程
          </div>
        </div>
        <!-- 成就 -->
        <div class="bottomNavigation_li_public_content" @click="clickChang('/achieve')">
          <img :src="imagesUrl.achieveIcon" alt="" />
          <div :class=" imagesUrl.achieveIcon.indexOf('achieve1') === -1 ? 'no_select' : 'select' ">
            成就
          </div>
        </div>
        <!-- 我的 -->
        <div class="bottomNavigation_li_public_content" @click="clickChang('/my')">
          <img :src="imagesUrl.myIcon" alt="" />
          <div :class=" imagesUrl.myIcon.indexOf('wode1') === -1 ? 'no_select' : 'select' ">
            我的
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottomNavigation',
  data () {
    return {
      imagesUrl: {
        // 排版图片使用懒加载
        homeIcon: require('../assets/shouye.png'), // 首页
        editIcon: require('../assets/bianxie.png'), // 编程
        myIcon: require('../assets/wode.png'), // 我的
        achieveIcon: require('../assets/wode.png') // 成就
      }
    }
  },
  created () {
    if (typeof this.$route.path === 'string') {
      const val1 = this.$route.path
      switch (val1) {
        case '/':
          this.imagesUrl.homeIcon = require('../assets/shouye_select.png') // 首页
          this.imagesUrl.editIcon = require('../assets/bianxie.png') // 编写
          this.imagesUrl.myIcon = require('../assets/wode.png') // 我的
          this.imagesUrl.achieveIcon = require('../assets/achieve.png') // 成就
          break
        case '/edit':
          this.imagesUrl.homeIcon = require('../assets/shouye.png') // 首页
          this.imagesUrl.editIcon = require('../assets/bianxie1.png') // 编写
          this.imagesUrl.myIcon = require('../assets/wode.png') // 我的
          this.imagesUrl.achieveIcon = require('../assets/achieve.png') // 成就
          break
        case '/my':
          this.imagesUrl.homeIcon = require('../assets/shouye.png') // 首页
          this.imagesUrl.editIcon = require('../assets/bianxie.png') // 编写
          this.imagesUrl.myIcon = require('../assets/wode1.png') // 我的
          this.imagesUrl.achieveIcon = require('../assets/achieve.png') // 成就
          break
        case '/achieve':
          this.imagesUrl.homeIcon = require('../assets/shouye.png') // 首页
          this.imagesUrl.editIcon = require('../assets/bianxie.png') // 编写
          this.imagesUrl.myIcon = require('../assets/wode.png') // 我的
          this.imagesUrl.achieveIcon = require('../assets/achieve1.png') // 成就
          break
      }
    } else {
      console.log('不合法参数')
    }
  },
  methods: {
    // 点击切换函数
    clickChang (val) {
      if (typeof val === 'string') {
        switch (val) {
          case '/':
            this.imagesUrl.homeIcon = require('../assets/shouye_select.png') // 首页
            this.imagesUrl.editIcon = require('../assets/bianxie.png') // 编写
            this.imagesUrl.myIcon = require('../assets/wode.png') // 我的
            this.imagesUrl.achieveIcon = require('../assets/achieve.png') // 成就
            this.$router.push({ path: '/' })
            break
          case '/edit':
            this.imagesUrl.homeIcon = require('../assets/shouye.png') // 首页
            this.imagesUrl.editIcon = require('../assets/bianxie1.png') // 编写
            this.imagesUrl.myIcon = require('../assets/wode.png') // 我的
            this.imagesUrl.achieveIcon = require('../assets/achieve.png') // 成就
            this.$router.push({ path: '/edit' })
            break
          case '/my':
            this.imagesUrl.homeIcon = require('../assets/shouye.png') // 首页
            this.imagesUrl.editIcon = require('../assets/bianxie.png') // 编写
            this.imagesUrl.myIcon = require('../assets/wode1.png') // 我的
            this.imagesUrl.achieveIcon = require('../assets/achieve.png') // 成就
            this.$router.push({ path: '/my' })
            break
          case '/achieve':
            this.imagesUrl.homeIcon = require('../assets/shouye.png') // 首页
            this.imagesUrl.editIcon = require('../assets/bianxie.png') // 编写
            this.imagesUrl.myIcon = require('../assets/wode.png') // 我的
            this.imagesUrl.achieveIcon = require('../assets/achieve1.png') // 成就
            this.$router.push({ path: '/achieve' })
            break
        }
      } else {
        console.log('不合法的传值')
      }
    }
  }
}
</script>

<style>
#bottomNavigationFullScreen {
  position: fixed;
  bottom: 0;
  z-index: 9999;
  height: 60px;
  width: 100%;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647),
    0 1px 4px rgba(0, 0, 0, 0.117647);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647),
    0 1px 4px rgba(0, 0, 0, 0.117647);
  background-color: #fff;
}
.bottomNavigation_li_content {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bottomNavigation_li_public_content {
  flex: 1;
  height: 54px;
}
.bottomNavigation_li_public_content img {
  height: 28px;
  width: 28px;
}
.bottomNavigation_li_public_content div {
  position: relative;
  bottom: 3px;
}

.no_select {
  font-size: 16px;
  color: #222;
}

@keyframes select {
  0% {
    font-size: 14px;
  }
  50% {
    font-size: 15px;
  }
  100% {
    font-size: 16px;
  }
}
.select {
  animation: select 0.6s;
  font-size: 16px;
  color: #2196f3;
}
</style>
