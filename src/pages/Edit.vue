<template>
    <div>
        Restaurant
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'AppHome',
    data() {
        return {
            store,
            cards: [],
            apiUrl: ''
        }
    },

    methods: {
        getCards() {

            axios.get(this.apiUrl, {
                params: {
                    
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },

    created() {
        this.getCards();
    },
}
</script>

<style lang="scss">

</style>