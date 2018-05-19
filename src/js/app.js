import Vue from 'vue';
import LoginForm from './components/LoginForm';

new Vue({
    el:'#login-wrapper',
    template: '<LoginForm/>',
    components: { LoginForm }
});
