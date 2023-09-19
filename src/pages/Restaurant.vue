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
export default {
    name: 'AppMain',

    data() {
        return {
            cards: [],
            apiUrl : ''
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

<style scoped lang="">
    
</style>