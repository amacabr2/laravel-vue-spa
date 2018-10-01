import VueRouter from 'vue-router'

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/user/Dashboard'
import AdminDashboard from './components/admin/Dashboard'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        path: '/admin',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: {
            auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
    },
]

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
})