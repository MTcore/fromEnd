import Vue from 'vue';
//  导入第三方库

//  导入根组件
import AppComponent from './component/App.vue';


// 挂载根组件, 启动应用
new Vue({
    el: '#app',
    // 渲染根组件
    render: c => c(AppComponent)
});