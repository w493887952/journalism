<template>
    <div class="nav">
      <swiper :options="swiperOption">
        <swiper-slide>
           <router-link :to="{ name: 'hot' }">头条</router-link>   
        </swiper-slide>
        <swiper-slide>  
            <router-link :to="{ name: 'yl' }">娱乐</router-link>  
        </swiper-slide>
        <swiper-slide>
            <router-link :to="{ name: 'jx' }">精选</router-link> 

            </swiper-slide>
        <swiper-slide>
             <router-link :to="{ name: 'car' }">汽车</router-link> 
        </swiper-slide>
        <swiper-slide>运动</swiper-slide>
        <swiper-slide>视频</swiper-slide>
        <swiper-slide>段子</swiper-slide>
        <swiper-slide>分类</swiper-slide>
        <swiper-slide>漫画</swiper-slide>
        <swiper-slide>直播</swiper-slide>
      </swiper>
      





    </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 30,
          freeMode: true,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.nav{
   padding: 10px;
}
a {
    color: #000;
}
.router-link-active{
    color: red;
}

</style>
