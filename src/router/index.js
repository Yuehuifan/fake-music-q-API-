import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Recommand from '@/views/Recommand'
import Main from '@/views/Main'
import Singer from '@/views/Singer'
import Rank from '@/views/Rank'
import Search from '@/views/Search'
import RecommandDetail from '@/views/RecommandDetail'
import SingerDetail from '@/views/SingerDetail'
import RankDetail from '@/views/RankDetail'


  const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path:'', component: Recommand },
      { 
        path:'recommand',
        component: Recommand,
        children: [
          {path: ':id', component: RecommandDetail, meta: { recommand: true }}
        ]
      },
      { 
        path:'singer', 
        component: Singer, 
        children: [
          { path: ':singermid', component: SingerDetail, meta: { singer: true } }
        ]
      },
      { 
        path:'rank', 
        component: Rank, 
        children: [ 
          {path: ':id', component: RankDetail, meta: { rank: true }}
        ] 
      },
      { 
        path:'search', 
        component: Search, 
        children: [ 
          {path: ':id', component: RankDetail, meta: { search: true }}
        ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
