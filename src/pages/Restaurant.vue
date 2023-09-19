<template lang="">
    <div>
        <h1>
            Restaurant
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus sit. Eaque animi modi assumenda, sunt delectus fugit voluptatum natus eum expedita repellat dolore quam eveniet consectetur aperiam? Aspernatur, itaque!
        </p>
    </div>
</template>

<script>
import axios from 'axios';
//import SingleRestaurant from '..componentiSingleRestaurant.vue';

export default {
    name: 'Restaurent',

    data() {
        return {
            cards: [],
            apiUrl : 'http://127.0.0.1:800/api/card',
        }
    },

    methods: {
        getCards() {

            axios.get(this.apiUrl, {
                params: {
                    
                }
            })
            .then((response) => {
                console.log(response);
                this.cards = response.data.result;
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

<style scoped lang="">
    
</style>