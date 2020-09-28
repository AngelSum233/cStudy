<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swipe :list="swiperList"></home-swipe>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <bottomNavigation></bottomNavigation>
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwipe from '../components/Swipe'
import HomeIcons from '../components/Icons'
import HomeRecommend from '../components/Recommend'
import bottomNavigation from '../components/bottomNavigation' //
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwipe: HomeSwipe,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    bottomNavigation
  },
  data: function () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommenList: []
    }
  },
  getHomeInfoSucc: function (res) {
    res = res.data
    if (res.ret && res.data) {
      this.city = res.data.city
      this.swiperList = res.data.swiperList
      this.iconList = res.data.iconList
      this.recommendList = res.data.recommendList
    }
  }
}
</script>
