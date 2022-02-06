import { createRouter, createWebHistory } from 'vue-router';
//import page components
import CoachDetail from './pages/coaches/CoachDetails.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachReg from './pages/coaches/CoachesRegistration.vue';
import ReqRecieved from './pages/requests/RequestsRecieved.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        { path: '/coaches/:id', 
            component: CoachDetail, 
            props: true, 
            children: [
                { path: '/contact', component: ContactCoach } // nested route to contact coach via coach id // coaches/c1/contact
        ] },
        { path: '/register', component: CoachReg },
        { path: '/requests', component: ReqRecieved },
        // error page
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;