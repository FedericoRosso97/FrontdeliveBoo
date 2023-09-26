<template>
    <form method="GET" class="advanced-searchbar">
        <input type="text" placeholder="Cerca tra centinaia di piatti e ristoranti!" v-model="inputSearch" @keyup.enter="">
        <button @click="">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
    <section class="advanced-searchbar">
        <div class="advanced-sidebar">
            <h4>
                Cerca per tipologia:
            </h4>
            <ul>
                <li v-for="typology in typologies">
                    <button>
                        {{ typology.name }}
                    </button>
                </li>
            </ul>
        </div>
        <div class="advanced-results">
            <ul>
                <li v-for="restaurant in restaurants">
                    <div v-if="searchElement(restaurant)">
                        <h1>
                            {{ restaurant.name }}
                        </h1>
                        <p>
                            {{ restaurant.address }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name:'AdvancedSearch',
    data(){
        return{
            store,
            typologyApiUrl: 'http://127.0.0.1:8000/api/typologies',
            restaurantApiUrl: 'http://127.0.0.1:8000/api/restaurants',

            //Api ai menù dello specifico ristorante

            typologies: [],
            restaurants: [],

            //Array vuoto
            searchInput: '',    
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
        getRestaurant(){
            axios.get(this.restaurantApiUrl, {
                params: {
                }
            })
                .then( (response) => {
                    this.restaurants = response.data.result;
                    // console.log(this.restaurants);
                 })
                .catch(function (error) {
                    console.log(error);
                })
        },
        searchElement(element){
            console.log(this.searchInput);
            if(this.searchInput === '' ){
                return true;
            }else{
                if(element.name.toLowerCase().includes(this.searchInput.toLowerCase())){
                return true;
                }
            return false;
            }
        },  
        setFirstSearch(){
            this.searchInput = this.$route.params.input;
        }
    },
    mounted(){
        // this.input = this.store.inputSearch;
        this.setFirstSearch();
        this.getTypology();
        this.getRestaurant();
        this.store.searchBar = false;
    }
}
</script>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
    form.advanced-searchbar{
        z-index: 1;
        position: absolute;
        top: 2rem;
        left: calc(100vw / 2);
        transform: translate(-50%);
        input{
            width: 500px;
            padding: 0.3rem 1rem;
            border: 1px solid rgb(100, 100, 100);
            border-bottom-left-radius: 0.4rem;
            border-top-left-radius: 0.4rem;
        }
        button{
            width: 45px;
            padding: 0.3rem 1rem;
            border: 1px solid rgb(100, 100, 100);
            background-color: white;
            border-top-right-radius: 0.4rem;
            border-bottom-right-radius: 0.4rem;
        }
    }
    section.advanced-searchbar{
        width: 100%;
        height: calc(100vh - 10vh);
        display: flex;
        div.advanced-sidebar{
            width: 13vw;
            background-color: $YellowColor;
            h4{
                text-align: center;
                margin-top: 1.5rem;
            }
            ul{
                list-style-type: none;
                width: 100%;
                padding-left: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                button{
                    background-color: $LightBlueColor;
                    color: white;
                    margin-top: 1rem;
                    width: 150px;
                    padding: 0.3rem 0;
                    border: 1px solid $BlueColor;
                    border-radius: 0.3rem;
                }
            }
        }
    }
</style>