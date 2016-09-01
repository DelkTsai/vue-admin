import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from './components/modules/Home'
import User from './components/modules/sys/User'
import Role from './components/modules/sys/Role'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

//路由map
router.map({
    '/home': {
        component: Home
    },
    '/sys/user': {
        component: User
    },
    '/sys/role': {
        component: Role
    }
})

//
router.redirect({
    '*': '/home'
})

router.start(App, '#app')
