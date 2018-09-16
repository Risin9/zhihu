/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';

Vue.use(ElementUI);

import Master from './components/Master';



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/question/Index'));
Vue.component('master', Master);


//Validate验证插件
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from './i18n/zh_CN/validate';
Validator.localize('zh_CN', zh_CN);
Validator.extend('phone', {
    getMessage: field => field + '必须是11位手机号',
    validate: value => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
    }
});

Vue.use(VeeValidate);

//import Hello from './components/Hello.vue';

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});