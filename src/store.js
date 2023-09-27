import {reactive} from 'vue';

export const store = reactive({
    menuRestaurant: false,
    searchBar : true,
    advancedSearch : false,
    FirstSearch: '',
    FirstselectedType: 0,
    restaurantsList: [],
});

