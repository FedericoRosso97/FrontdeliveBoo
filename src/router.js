import { createRouter,createWebHistory} from 'vue-router';

//importo componenti
import Restaurant from './pages/Restaurant.vue';
import Menù from './pages/Menù.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
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