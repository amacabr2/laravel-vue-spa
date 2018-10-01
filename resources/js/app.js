import './bootstrap'
import Vue from 'vue'
import Index from './components/Index'

window.Vue = Vue

Vue.component('index', Index)

const app = new Vue({
    el: '#app'
});