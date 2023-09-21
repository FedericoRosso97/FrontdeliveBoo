import { createRouter,createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AdvancedSearch from './pages/AdvancedSearch.vue';
//importo componenti
import Restaurant from './pages/Restaurant.vue';
import Menù from './pages/Menù.vue';

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
        {
            path: '/restaurant',
            name: 'restaurant', 
            component: Restaurant
        },
        {
            path: '/menù',
            name: 'menù', 
            component: Menù,
        },   
    ]
});

export { router };