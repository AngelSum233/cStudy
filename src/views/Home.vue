<template>
  <div>
    <div class="top" ><div style="margin-left:15px;margin-top:19px;">C语言学习</div></div>
    <div class="content">
      <div class="search">
        <input type="text" class="searchContent">
        <button>搜 索</button>
      </div>
      <!-- 轮播图(暂时只放一张图片) -->
      <div>
        <img src="../assets/chome.png" alt="" style="height:110px;width:100%;border-radius: 10px;">
      </div>
      <!-- 分类 -->
      <div style="display: flex;justify-content: space-between;">
        <div v-for="(myimagesUrl, index) in imagesUrl" :key="index" class="contentTop">
          <img v-bind:src="myimagesUrl.url" alt="" />
          <span>{{myimagesUrl.title}}</span>
        </div>
      </div>
      <!-- 推荐课程 -->
      <div>
        <div class="adviseCourse">
          <span style="font-size:20px;color:black;position: relative;margin-left:3px">推荐课程</span>
          <span style="position: absolute;right:15px;color: #7c7a7a; margin-top:3px">更多 ></span>
        </div>
      </div>
      <!-- 课程列表 -->
      <div>
        <div v-for="(course, index) in courseList" :key="index" class="course" @click="courseClick">
          <img v-bind:src="course.url" alt="" class="courseImg"/>
          <div class="courseContent">
            <span style="color:#FF9000;font-size:17px;">{{course.title}}</span>
            <div style="color:#7c7a7a;font-size:15px;margin-top:15px;"><span >{{course.person}}</span></div>
            <div style="font-size:14px;margin-top:20px;" >
              <img src="../assets/wode.png" alt="" style="width:20px;height:20px;font-size:14px;">
              <span>{{course.hot}}</span>
            </div>
          </div>
        </div>
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
      imagesUrl: [
        { url: require('../assets/fenlei.png'), title: '分类' },
        { url: require('../assets/paihang.png'), title: '排行' },
        { url: require('../assets/jingpin.png'), title: '精品' },
        { url: require('../assets/fuli.png'), title: '福利' },
        { url: require('../assets/jiaoyu.png'), title: '教育' }
      ],
      courseList: [
        { url: require('../assets/course1.png'), title: 'C语言编程', person: '西南石油大学  张剑', hot: '1678人参加' },
        { url: require('../assets/course2.png'), title: '数据结构和算法', person: '西南石油大学  杨云', hot: '1890人参加' },
        { url: require('../assets/course3.png'), title: '二级C语言程序设计', person: '西南石油大学  杨力', hot: '789人参加' },
        { url: require('../assets/course4.png'), title: 'C语言程序设计进阶', person: '西南石油大学  王世元', hot: '490人参加' }
      ]
    }
  },
  methods: {
    courseClick () {
      this.$router.push({ path: '/courseView' })
    }
  }
}
</script>
<style scoped>
.top{
  position: fixed;
  top: 0;
  z-index: 9999;
  color: #fff;
  background-color: #16BCFA;
  height: 80px;
  width: 100%;
  font-size:24px;
  font-weight:bold;
}
.content{
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 90px;
  margin-top: 80px;
}
.search{
}
.searchContent{
  position: relative;
  margin-top: 8px;
  margin-bottom: 8px;
  border: none;
  outline: none;
  border-radius: 18px;
  height: 36px;
  width: 100%;
  background-color: #EEF2F5;
}
.search button{
  position: absolute;
  right: 11px;
  margin-top: 10px;
  background-color: #16BCFA;
  color: #fff;
  font-size: 14px;
  height: 32px;
  width: 62px;
  border: none;
  outline: none;
  border-radius: 18px;
}
/* 分类导航开始 */
.contentTop {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #444343;
}
.contentTop img {
  width: 34px;
  height: 34px;
  margin-right: 15px;
  margin-bottom: 5px;
}
/* 分类导航结束 */
/* 推荐课程开始 */
.course{
  display: flex;
  margin-top: 15px;
}
.course .courseImg{
  height: 100px;
  width: 162px;
  border-radius: 10px;
  margin-right: 10px;
}
</style>
