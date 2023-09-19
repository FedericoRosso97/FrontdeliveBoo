<template lang="">
    <div>
        <div class="title">
            <h1>
                Restaurant
            </h1>
        </div>

        <h2 class="ms-4 mt-4 mb-4">
            Crea l'account del tuo Ristorante
        </h2>

        <div class="ms-5">
            <!--NOME-->
            <div class="mb-5">
                <div class="mb-3">
                    <label for="nome-attività">
                        Inserisci il nome del tuo Ristorante:
                    </label>
                </div>
                <input type="text">
            </div>
    
            <!--Indirizzo-->
            <div class="mb-5">
                <div class="mb-3">
                    <label for="indirizzo-attività">
                        Inserisci l'indirizzo del tuo Ristorante:
                    </label>
                </div>
                <input type="text">

            </div>
    
            <!--Telefono-->
            <div>
                <label for="Telefono-attività">
                    Inserisci il numero di telefono del tuo Ristorante:
                </label>
            </div>
            <input type="text">

        </div>


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
            apiUrl: 'http://127.0.0.1:800/api/restaurant',
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