import { createRouter,createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AdvancedSearch from './pages/AdvancedSearch.vue';
// import LoginForm from './pages/LoginForm.vue';
// import RegistrationForm from './pages/RegistrationForm.vue';
// import DashboardApp from './pages/DashboardApp.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home', 
            component: AppHome
        },
        {
            path: '/advancedSearch/:input',
            name: 'AdvancedSearch', 
            component: AdvancedSearch,
            props: true
        },
        // {
        //     path: '/dashboard',
        //     name: 'dashboard', 
        //     component: DashboardApp
        // },
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