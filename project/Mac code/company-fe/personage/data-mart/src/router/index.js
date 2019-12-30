import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OffLine from '@/components/OffLine'
import OnLine from '@/components/OnLine'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        redirect: '/online'
    }, {
        path: '/offline',
        component: OffLine
    }, {
        path: '/online',
        component: OnLine
    }]
})