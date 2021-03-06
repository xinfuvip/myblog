import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import view from '@/components/common/view'
import mainx from '@/components/views/mainx'
import firstview from '@/components/views/firstview'
import zhihu from '@/components/views/zhihu'
import zhihuResource from '@/components/views/zhihu-resource'
import notes from '@/components/views/notes'
import articlelist from '@/components/views/articlelist'
import articledetail from '@/components/views/articledetail'
import aboutme from '@/components/views/aboutme'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/view',
      name: '博客',
      component: view
    },
    {
      path: '/articledetail',
      name: '文章详情',
      component: articledetail
    },
    {
      path: '/mainx',
      name: 'mainx',
      component: mainx,
      children:[
        {
          path: '/mainx/firstview',
          name: 'firstview',
          component: firstview,
        },
        {
          path: '/mainx/article',
          name: '文章列表',
          component: articlelist
        },
        {
          path: '/mainx/douban',
          name: 'douban',
          component: zhihu,
        },
        {
          path: "/mainx/zhihu",
          name:"zhihu",
          component: zhihuResource,
        },
        {
          path: "/mainx/notes",
          name:"notes",
          component: notes,
        },
        {
          path: "/mainx/aboutme",
          name:"aboutme",
          component: aboutme,
        }
      ]
    }
  ]
})
