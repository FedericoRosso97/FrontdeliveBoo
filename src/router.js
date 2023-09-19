import { createRouter, createWebHistory } from "vue-router";

//importo pagine
import Restaurant from './pages/Restaurant.vue';
import Menù from './pages/Menù.vue';
import EditFood from './pages/EditFood.vue';

//import Add from './pages/Add.vue';


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
            component: Menù
        },
    ]
});

export { router };