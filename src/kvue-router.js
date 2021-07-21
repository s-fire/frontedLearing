let Vue
class VueRouter {
    constructor(options) {
        this.$options = options
        this.routeMap = {}
        this.app = new Vue({
            data() {
                return {
                    currentHash: '/',
                };
            },
        })
    }

    init() {
        //绑定浏览器hashchange、load事件,这里需要改变this指向，在onHashChange事件里需要访问当前实例
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
        //渲染rouer-view、router-link组件
        this.initComponent()
    }
    onHashChange() {
        //hash改变，需要重新渲染视图
        //获取当前路由的hash
        this.app.currentHash = window.location.hash.slice(1) || '/'
    }
    initComponent() {
        Vue.component('router-link', {
            props: {
                to: {
                    type: String
                }
            },
            render(h) {
                return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
            }
        })
        //创建视图组件
        Vue.component('router-view', {
            render: (h) => {
                //找到路由配置中与当前hash相匹配的组件
                let comp = this.$options.routes.find(item => item.path == this.app.currentHash).component
                return h(comp)
            }
        })
    }
}
//把VueRouter变成一个插件

// 执行混入任务
// 在根组件的prototype挂载$router
// 执行路由初始化(创建init方法（绑定浏览器事件，执行onHashChange事件，改变current）)
VueRouter.install = function (_Vue) {
    //install方法会传入vue对象，获取传进来的vue对象,执行混入
    Vue = _Vue
    Vue.mixin({
        //在实例初始化的时候在vue的prototype上挂载$router
        //注意此时只需要在根组件上挂载
        beforeCreate() {
            //只有根组件上在new Vue()时会传入router
            if (this.$options.router) {
                //这里的router来自于main.js new Vue()时挂载的router
                Vue.prototype.$router = this.$options.router
                //路由初始化
                this.$options.router.init()
            }

        },

    });
}
export default VueRouter