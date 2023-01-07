import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from "vuejs-paginate-next";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
    .use(router)
    .use(store)
    .use(VueSweetalert2)
    .component('Paginate', Paginate)
    .mount('#app')
