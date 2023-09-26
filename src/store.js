import {reactive} from 'vue';

export const store = reactive({
    searchBar : true,
    advancedSearch : false,
    selectedType: 0,
});
