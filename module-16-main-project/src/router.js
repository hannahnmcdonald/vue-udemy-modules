import { createRouter, createWebHistory } from 'vue-router';
//import page components
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachReg from './pages/coaches/CoachRegistration.vue';
import ReqRecieved from './pages/requests/RequestRecieved.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        { path: '/coaches/:id', 
            component: CoachDetail, 
            children: [
                { path: '/contact', component: ContactCoach } // nested route to contact coach via coach id
        ] },
        { path: '/register', component: CoachReg },
        { path: '/requests', component: ReqRecieved },
        // error page
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;