import Vue from 'vue'
import Router from 'vue-router'
import News from '@/pages/news/index'
import Tool from '@/pages/tool/index'
import Weather from '@/pages/weather/index'
import Rests from '@/pages/rests/index'
import Hot from '@/pages/news/hot'
import Yl from '@/pages/news/yl'
import Jx from '@/pages/news/jx'
import Car from '@/pages/news/car'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: News
    },{
      path: '/news',
      name: 'news',
      component: News,
    },{
      path: '/tool',
      name: 'tool',
      component: Tool,
    },{
      path: '/weather',
      name: 'weather',
      component: Weather,
    },{
      path: '/rests',
      name: 'rests',
      component: Rests,
    },{
      path: '/hot',
      name: 'hot',
      component: Hot,
    },{
      path: '/yl',
      name: 'yl',
      component: Yl,
    },{
      path: '/jx',
      name: 'jx',
      component: Jx,
    }
    ,{
      path: '/car',
      name: 'car',
      component: Car,
    }
  ]
})
