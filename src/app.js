import Vue from 'vue'
import YButton from './button.vue'
import YIcon from './icon.vue'
Vue.component('y-icon', YIcon)
Vue.component('y-button', YButton)
new Vue ({
    el: '#app'
})