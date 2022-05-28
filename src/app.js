import Vue from 'vue'
import YButton from './button.vue'
import YIcon from './icon.vue'
import YButtonGroup from './buttonGroup.vue'
import YInput from './input.vue'
import YRow from './row.vue'
import YCol from './col.vue'
import YLayout from './layout.vue'
import YHeader from './header.vue'
import YContent from './content.vue'
import YSider from './sider.vue'
import YFooter from './footer.vue'
Vue.component('y-icon', YIcon)
Vue.component('y-button', YButton)
Vue.component('y-button-group',YButtonGroup)
Vue.component('y-input', YInput)
Vue.component('y-row', YRow)
Vue.component('y-col', YCol)
Vue.component('y-layout', YLayout)
Vue.component('y-header', YHeader)
Vue.component('y-content', YContent)
Vue.component('y-sider', YSider)
Vue.component('y-footer', YFooter)
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

