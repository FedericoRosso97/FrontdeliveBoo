<template>
    <div>
        <h1>
            Main
        </h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    name: 'AppMain',

    data() {
        return {
            r: [],
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

<style lang="scss">

</style>