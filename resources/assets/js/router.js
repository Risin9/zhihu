import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            name:"index",
            path:'/',
            component:require('./components/question/Index.vue')
        },
        {
            path:'/question/:id',
            name:'question_show',
            component:require('./components/question/Show')
        },
        {
            path:"/register",
            name:"register_register",
            component:require('./components/register/Register')
        }
    ]
})