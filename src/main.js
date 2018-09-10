import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/style/border.css'
import './assets/style/reset.css'

import {Tabbar, CellSwipe, TabbarItem, Button, Loading, List, NavBar,Tab, Tabs, Dialog, Stepper, Lazyload, Badge, BadgeGroup, Toast, PullRefresh} from 'vant'

Vue.use(Button).use(Loading).use(List)
    .use(NavBar).use(Tab).use(Tabs)
    .use(Dialog).use(Stepper).use(Badge)
    .use(BadgeGroup).use(Toast).use(PullRefresh)
    .use(Tabbar).use(TabbarItem).use(CellSwipe)
    .use(Lazyload, {
        Loading: require('./assets/images/position.png')
    })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
