import Vue from 'vue'
import Router from 'vue-router'

import Main from '../../src/pages/main'
import Home from '@/pages/home'
import Detail from '@/pages/detail'
import Category from '@/pages/category'
import Cart from '@/pages/cart'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/main',name: 'main',component: Main,
            children: [
                {path: '/home',name: 'home',component: Home},
                {path: '/category',name: 'category',component: Category},
                {path: '/cart',name: 'cart',component: Cart}
            ]
        },
        {path: '/detail/:id',name: 'detail',component: Detail},
    ]
})
