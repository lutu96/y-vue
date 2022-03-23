import Vue from 'vue'
import YButton from './button.vue'
import YIcon from './icon.vue'
import YButtonGroup from './buttonGroup.vue'
Vue.component('y-icon', YIcon)
Vue.component('y-button', YButton)
Vue.component('y-button-group',YButtonGroup)
new Vue ({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
    let Button  = Vue.extend(YButton)
    const vm = new Button({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    const property = vm.$el.querySelector('use').getAttribute('xlink:href')
    expect(property).to.eq('#y-setting')
    vm.$destroy()
}

{
    let Button  = Vue.extend(YButton)
    const vm = new Button({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    const property = vm.$el.querySelector('use').getAttribute('xlink:href')
    expect(property).to.eq('#y-loading')
    vm.$destroy()
}

{   
    const div = document.createElement('div')
    document.body.appendChild(div)
    let Button  = Vue.extend(YButton)
    const vm = new Button({
        propsData: {
            icon: 'setting',
            iconPosition: 'left'
        }
    })
    vm.$mount(div)
    const svgElement = vm.$el.querySelector('svg')
    const  { order } = window.getComputedStyle(svgElement)
    expect(order).to.eq('1')
    div.remove()
    vm.$el.remove()
    vm.$destroy()
}

{   
    const div = document.createElement('div')
    document.body.appendChild(div)
    let Button  = Vue.extend(YButton)
    const vm = new Button({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    const svgElement = vm.$el.querySelector('svg')
    const  { order } = window.getComputedStyle(svgElement)
    expect(order).to.eq('2')
    div.remove()
    vm.$el.remove()
    vm.$destroy()
}
{
    let Button  = Vue.extend(YButton)
    const vm = new Button({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    const spy = chai.spy(function () {})
    vm.$on('click', spy)
    vm.$el.click()
    expect(spy).to.have.been.called()
    vm.$destroy()
}