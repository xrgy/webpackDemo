/**
 * Created by gy on 2018/6/13.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// const menu = r=>require.ensure([],()=>r(require("")),'menu');//下面的注意路径
const menu = r => require.ensure([],()=>r(require('../components/menu')),'menu');
const contentList = r => require.ensure([],()=>r(require('../components/contentList')),'contentList');
const testContentList = r => require.ensure([],()=>r(require('../components/testContentList')),'testContentList');

const routes = [
  {
    path:'/',
    component: menu,
    children: [
      {
        path:'',
        component:contentList,
      },
      {
      path:'/network',
      component:contentList,
    },
      {
        path:'/database',
        component:contentList,
      },
      {
        path:'/middleware',
        component:contentList,
      },
      {
        path:'/virtual',
        component:contentList,
      },
      {
        path:'/container',
        component:contentList,
      }]
  }
];

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
