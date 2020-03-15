import tableComponent from './table-component'

const components = [
    tableComponent
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    tableComponent
}

export { tableComponent }
