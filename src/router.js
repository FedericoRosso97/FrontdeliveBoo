import { createRouter,createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import LoginForm from './pages/LoginForm.vue';
import RegistrationForm from './pages/RegistrationForm.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home', 
            component: AppHome
        },
        // {
        //     path: '/login',
        //     name: 'login', 
        //     component: LoginForm
        // },
        // {
        //     path: '/registration',
        //     name: 'registration', 
        //     component: RegistrationForm
        // },
    ]
});

export { router };