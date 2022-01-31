import { createApp } from 'vue';
// Import function to make router from vue-router
import { createRouter } from 'vue-router';

import App from './App.vue';

// Call fx- but needs some clarification
const router = createRouter({
    // Register all the routes- ARRAY OF ROUTES
    routes: []
});

const app = createApp(App)

app.mount('#app');
