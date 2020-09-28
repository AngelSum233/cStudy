<template>
  <div>
    <div class="title">推荐课程</div>
    <ul style="list-style-type: none">
      <li style="margin-right: 20px;float: left">
        <img src="../../public/IMG_1.png" style="width: 130px;height: 70px"/>
        <p>python3 入门</p>
        <button>查看详情</button>
      </li>
      <li style="float: left">
        <img src="../../public/2.png" style="width: 130px;height: 70px"/>
        <div>
          <p>HTML 微课</p>
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    title: []
  }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height : 2.5rem
    background: #eee
    text-indent: .9rem

  .item
    overflow hidden
    display: flex
    height : 5.0rem

    .item-img
      width : 6.5rem
      height : 4.5rem
      padding :.3rem
    .item-info
      flex : 1
      padding: .2rem
      .item-title
        line-height : 1.5rem
        font-size: .6rem
      .item-desc
        line-height : 1.5rem
        color : #ccc
      .item-button
        background: #ff9300
        padding : 0 .5rem
        border-radius: .1rem
</style>
