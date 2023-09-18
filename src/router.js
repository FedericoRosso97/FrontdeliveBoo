import { createRouter, createWebHistory } from "vue-router";

//importo pagine
import Restaurant from './pages/Restaurant.vue';
import Edit from './pages/Edit.vue';


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'restaurant', 
            component: Restaurant
        },
        {
            path: '/edit',
            name: 'edit', 
            component: Edit
        },
    ]
});

export { router };