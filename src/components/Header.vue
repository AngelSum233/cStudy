<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont"></span>
      html / python / java /
    </div>
    <div class="header-right arrow-icon">
      <!-- 使用父组件传过来的，子组件接收过了的city -->
      {{this.city}}
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display : flex
    line-height : 3.1rem
    background : $bgColor
    color : #fff
    .header-left
      width : 2rem
      float : left
      .back-icon
        text-align: center
        font-size: 1.5rem
    .header-input
      flex : 1
      margin-top: .25rem
      margin-bottom: .25rem
      margin-left: .5rem
      padding-left .5rem
      margin-right: .5rem
      background : #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 4rem
      float : right
      text-align : center
      .arrow-icon
        font-size: .4rem
</style>
