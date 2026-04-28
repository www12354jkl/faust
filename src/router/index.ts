import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import {Article} from "@/model/Article.ts";
import ArticleDetail from "@/views/ArticleDetail.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/article/:id',
      component: ArticleDetail,
    }
  ],
  scrollBehavior(){
    return { top:0 }
  }
})

export default router
