import { createRouter,createWebHistory} from 'vue-router';

<<<<<<< HEAD
import AppHome from './pages/AppHome.vue';
import AdvancedSearch from './pages/AdvancedSearch.vue';
// import LoginForm from './pages/LoginForm.vue';
// import RegistrationForm from './pages/RegistrationForm.vue';
// import DashboardApp from './pages/DashboardApp.vue';
=======
//importo componenti
import Restaurant from './pages/Restaurant.vue';
import Menù from './pages/Menù.vue';
>>>>>>> Menù-branch

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
<<<<<<< HEAD
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
=======
            path: '/restaurant',
            name: 'restaurant', 
            component: Restaurant
        },
        {
            path: '/menù',
            name: 'menù', 
            component: Menù,
        },
>>>>>>> Menù-branch
    ]
});

export { router };