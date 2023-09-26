import {reactive} from 'vue';

export const store = reactive({
    menuRestaurant: false,
    searchBar : true,
    advancedSearch : false,
    selectedType: 0,
});

