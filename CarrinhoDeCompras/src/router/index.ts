import { createRouter, createWebHistory } from 'vue-router'
import Corpo from '../components/Corpo.vue'
import Carrinho from '../components/Carrinho.vue'

const routes = [
  { path: '/', component: Corpo },
  { path: '/carrinho', component: Carrinho }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
