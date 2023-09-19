<template lang="">
    <div>
        <div class="title">
            <h1>
                Restaurant
            </h1>
        </div>

        <h2>
            Crea l'account del tuo Risporante
        </h2>

        <!--NOME-->
        <div>
            <label for="nome-attività">
                Inserisci il nome del tuo Ristorante:
            </label>
            <input type="text">
        </div>

        <!--Indirizzo-->
        <div>
            <label for="indirizzo-attività">
                Inserisci l'indirizzo del tuo Ristorante:
            </label>
            <input type="text">
        </div>

        <!--Telefono-->
        <div>
            <label for="Telefono-attività">
                Inserisci il numero di telefono del tuo Ristorante:
            </label>
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
            apiUrl: 'http://127.0.0.1:800/api/card',
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