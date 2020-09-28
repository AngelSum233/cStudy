<template>
  <div class="wrapper">
    <swiper>
      <!-- slides -->
      <swiper-slide>
        <img src="../../public/IMG_2.png" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwipe',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwipe () {
      return this.list.length
    }
  }
}
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 32%;
    background: #eee
  }
</style>
