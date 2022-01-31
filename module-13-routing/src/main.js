import { createApp } from 'vue';
// Import function to make router from vue-router
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
// import component
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/teams/UsersList.vue';

// Call fx- but needs some clarification
const router = createRouter({
    // Pull from hx
    history: createWebHistory(),
    // Register all the routes- ARRAY OF ROUTES
    routes: [
        { path: '/teams', component: TeamsList }, // set the path per component url/teams
        { path: '/users', component: UsersList }
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)

// use router w/use method
app.use(router);

app.mount('#app');
