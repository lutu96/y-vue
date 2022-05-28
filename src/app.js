import Vue from 'vue'
import YButton from './button.vue'
import YIcon from './icon.vue'
import YButtonGroup from './buttonGroup.vue'
import YInput from './input.vue'
import YRow from './row.vue'
import YCol from './col.vue'
Vue.component('y-icon', YIcon)
Vue.component('y-button', YButton)
Vue.component('y-button-group',YButtonGroup)
Vue.component('y-input', YInput)
Vue.component('y-row', YRow)
Vue.component('y-col', YCol)
new Vue ({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
        message: 'hi'
    },
    methods: {
        onInputChange (val) {
            console.log(val)
        },
        onClick () {
            this.message = this.message += 1
        }
    }
})

