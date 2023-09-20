<template>
    <div class="type-restaurant-title">
        <h2>
            Scegli dal menù:
        </h2>
    </div>

    <!--CHOOSE FROM THE MENù-->
    <div class="restourant-types">
        <ul>
            <li v-for="(plate,index) in plates">
                <h3>
                    {{ plate.name}}
                </h3>
            </li>
        </ul>
    </div>
</template>


<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'Menù',

    data() {
        return {
            store,
            platesApiUrl: 'http://127.0.0.1:8000/api/plates',
            plates: [],
        }
    },

    methods: {
        getPlates() {
            axios.get(this.platesApiUrl, {
                params: {
                }
            })
                .then((response) => {
                    console.log(response)
                    this.plates = response.data.results.data;
                    console.log(this.plates);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },

    mounted(){
            store.searchBar = true;
            this.getPlates();
        }
}
</script>


<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;

div.type-restaurant-title {
    margin-top: 10rem;

    h2 {
        text-align: center;
    }
}

.restourant-types {
    margin: 0 auto;
    width: 85%;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    li {
        text-align: center;
        width: 30%;
        background-color: $BlueColor;
        margin-top: 2rem;
        padding: 1rem 0;
        border-radius: 1rem;
        border: 2px solid $LightBlueColor;
        color: white;

        h3 {
            color: white;
        }
    }
}
</style>