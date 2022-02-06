import { createApp } from 'vue';

//import app.vue to be our main app
import App from './App.vue'
//import router
import router from './router.js';

const app = createApp(App)

app.use(router);

app.mount('#app');
