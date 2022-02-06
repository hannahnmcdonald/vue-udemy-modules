import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: null },
        { path: '/coaches/:id', component: null, children: [
            { path: '/contact', component: null } // nested route to contact coach via coach id
        ] },
        { path: '/register', component: null },
        { path: '/requests', component: null },
        // error page
        { path: '/:notFound(.*)', component: null },
    ],
});

export default router;