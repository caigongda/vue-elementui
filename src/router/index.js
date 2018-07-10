import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import List from '@/components/List'
import Spaindex from '@/components/Spaindex'
import Content from '@/components/content/index'
import Nav1 from '@/components/content/Nav1'
import Nav2 from '@/components/content/Nav2'
import Nav3 from '@/components/content/Nav3'
import Nav4 from '@/components/content/Nav4'
import Table1 from '@/components/Table/index'
import Form from '@/components/Form/form'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/table1',
      name: 'table1',
      component: Table1
    },
    {
      path: '/spaindex',
      name: 'spaindex',
      component: Spaindex
    },
    {
      path:'/content',
      name:'content',
      component:Content,
      children:[
        {
          path:'/nav1/:id',
          name:'nav1',
          component:Nav1,
        },
        {
          path:'/nav2/:id',
          name:'Nav2',
          component:Nav2
        },
        {
          path:'/nav3/:id',
          name:'Nav3',
          component:Nav3
        },
        {
          path:'/nav4/:id',
          name:'Nav4',
          component:Nav4
        }
      ],
      redirect:{name:"nav1"}
    },
    {
      path:'/form/:id',
      name:'form',
      component:Form
    }
  ]
})
