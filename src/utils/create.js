//创建组件实例
// this.$create(Notice,{

// })
import Vue from 'vue'
export default function (componentName, props) {
    //0、先创建vue实例
    const vm = new Vue({
        render(h) {
            //渲染传入进来的组件
            return h(componentName, { props })
        }
    }).$mount()
    // 1、vm会创建组件实例
    // 通过$children获取该组件实例
    const comp = vm.$children[0]
    // 追加到body
    document.body.appendChild(vm.$el)
    //清理函数
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    //返回组件实例
    return comp
}