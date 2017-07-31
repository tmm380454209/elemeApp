
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
import './common/stylus/index.styl'


Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	mode:'history',
	linkActiveClass:'active',
	routes:[
		{
			path:'/',
			redirect:'/goods'
		},
		{
			path:'/goods',
			component:goods
		},
		{
			path:'/ratings',
			component:ratings
		},
		{
			path:'/seller',
			component:seller
		}
	]
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
