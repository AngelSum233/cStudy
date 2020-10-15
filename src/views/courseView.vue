<template>
    <div>
      <div class="top" ><div style="margin-left:8px;margin-top:19px;">
        <i class="el-icon-arrow-left" style="font-size: 20px; margin-top: 15px; margin-left: 5px" @click="back"></i>
        课程详情</div></div>
      <div class="content">
          <img src="../assets/course1.png" alt="" class="img1">
          <div class="title">
            <span style="color:#07cf07">详情</span>
            <span>目录</span>
          </div>
          <div class="line"></div>
          <div>
            <span style="font-size:20px">C语言编程</span>
            <div style="font-size:16px;color:#7c7a7a;margin-top:10px;margin-bottom:15px;">
                <span>西南石油大学  张剑</span>
                <span>1678人参加</span>
            </div>
          </div>
          <!-- 简介 -->
          <div>
            <span style="font-size:20px;">简介</span>
            <div class="line"></div>
            <p style="font-size:16px;color:#7c7a7a;margin-bottom:10px;" >
                C语言程序设计课程是理工科专业的核心课程，是计算机程序语言的基础，主要以面向过程的程序设计语言(C)为基础，讲授高级程序设计语言的基本知识和程序设计的方法与技术，C语言是一门结构化程序设计语言，兼有高级语言和低级语言的功能<span style="font-size:18px;color:#07cf07">...更多</span>
            </p>
          </div>
          <!-- 授课学校 -->
          <div>
            <span style="font-size:20px;">授课老师</span>
            <div class="line"></div>
            <span>张剑</span>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  methods: {
    back () {
      this.$router.replace('/Home')
    }
  }
}

</script>

<style scoped>
.top{
  position: fixed;
  top: 0;
  z-index: 9999;
  color: black;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(19, 18, 18, 0.418);
  height: 80px;
  width: 100%;
  font-size:24px;
}
.content{
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 90px;
  margin-top: 90px;
}
.content .img1{
    height: 200px;
    width: 100%;
    border-radius: 8px;
}
.title{
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  margin: 10px 100px 10px 100px;
}
.line{
  height: 1px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgba(101, 101, 101, 1);
}
</style>
