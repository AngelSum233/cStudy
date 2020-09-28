<template>
  <div class="icons">
    <img class="icon1" src="../../public/icon_app_calendar_96.png"/>
    <img class="icon1" src="../../public/icon_app_message_96.png"/>
    <img class="icon1" src="../../public/报告.png"/>
    <img class="icon1" src="../../public/通讯录.png"/>
    <img class="icon1" src="../../public/icon_app_calendar_96.png"/>
    <img class="icon1" src="../../public/icon_app_message_96.png"/>
    <img class="icon1" src="../../public/报告.png"/>
    <img class="icon1" src="../../public/通讯录.png"/>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
  .icons .icon1{
    width: 50px;
    height: 45px;
    margin: 15px;
  }
</style>
