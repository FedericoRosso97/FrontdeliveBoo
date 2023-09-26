<template>
    <div class="type-restaurant-title">
        <h2>
            Scegli il tipo di ristorante:
        </h2>
    </div>
    <div class="restourant-types">
        <ul>
            <li v-for="typology in typologies">
                <button @click="changeAdvancedSrcType(typology.id)">
                    {{ typology.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

    export default{
        name: 'AppHome',
        data(){
            return{
                store,
                typologyApiUrl: 'http://127.0.0.1:8000/api/typologies',
                typologies: [],
                emptyimput: 'Cerca tra centinaia di piatti e ristoranti',
            }
        },
        methods:{
            getTypology(){
                axios.get(this.typologyApiUrl, {
                    params: {
                    }
                })
                    .then( (response) => {
                        this.typologies = response.data.result;
                        // console.log(this.typologies);
                     })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            changeAdvancedSrcType(type){
                this.store.FirstselectedType = type;
                this.$router.push({
                    name: 'AdvancedSearch',
                    params:{
                        input: this.emptyimput
                    }
            });
        }
        },
        mounted(){
            store.searchBar = true;
            this.getTypology();
        }
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
    div.type-restaurant-title{
        margin-top: 10rem;
        h2{
            text-align: center;
        }
    }

    div.restourant-types{
        margin: 0 auto;
        width: 85%;
        ul{
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li{
                text-align: center;
                width: 30%;
                background-color: $BlueColor;
                margin-top: 2rem;
                padding: 1rem 0;
                border-radius: 1rem;
                border: 2px solid $LightBlueColor;
                h3{
                    color: white;
                }
            }
        }
    }
</style>