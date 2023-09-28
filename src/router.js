import { createRouter,createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AdvancedSearch from './pages/AdvancedSearch.vue';
//importo componenti
import Restaurant from './pages/Restaurant.vue';
import Menù from './pages/Menù.vue';

//import AppChart from './pages/AppChart.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home', 
            component: AppHome
        },
        {
            path: '/advancedSearch',
            name: 'AdvancedSearch', 
            component: AdvancedSearch,
        },
        {
            path: '/restaurant',
            name: 'restaurant', 
            component: Restaurant
        },
        {
            path: '/menù/:restaurantId',
            name: 'menù', 
            component: Menù,
            props: true
        },   
        //
        /*{
            path: '/appchart',
            name: 'AppChart', 
            component: AppChart,
        },
        */
    ]
});

export { router };