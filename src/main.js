import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the Commerce object
import Commerce from '@chec/commerce.js';

// Create a new Commerce instance

const commerce = (typeof process.env.VUE_APP_CHEC_PUBLIC_KEY !== 'undefined') ? new Commerce(process.env.VUE_APP_CHEC_PUBLIC_KEY, true) : null;

// Vue.mixin({
//     beforeCreate() {
//         this.$commerce = commerce;
//     },
// });

createApp({
    extends: App,
    mixins: [],
    beforeCreate() {
        this.$commerce = commerce;
    },
}).use(store).use(router).mount('#app')

// createApp(App).use(store).use(router).mount('#app')

