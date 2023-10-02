<template>
    <form method="GET" class="advanced-searchbar">
        <input type="text" placeholder="Cerca tra centinaia di piatti e ristoranti!" v-model="searchInput">
        <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
    <section class="advanced-searchbar">

        <!-- LISTA DI TIPOLOGIE DA CUI SCEGLIERE -->
        <div class="advanced-sidebar">
            <h4>
                Cerca per tipologia:
            </h4>
            <ul>
                <li v-for="typology in typologies">
                    <button @click="typeSelected = typology.id">
                        {{ typology.name }}
                    </button>
                </li>
            </ul>
        </div>

        <!-- LISTA DEI RISTORANTI -->
        <div class="advanced-results">
            <div class="card-container" v-for="restaurant in restaurants">
                <div v-if="searchElement(restaurant) && filterByTypology(restaurant.typologies[0].id)" :class="(searchElement(restaurant) === true)? 'find' : 'no-result' ">
                    <div class="info-restaurant">
                        <h1>
                            {{ restaurant.name }} {{ restaurant.id }}
                        </h1>
                        <p>
                            Tipologia: {{ restaurant.typologies[0].name }}
                        </p>
                        <img :src="restaurant.image" alt="">
                        <p class="mt-3">
                            <strong>Address:</strong> {{ restaurant.address }}
                        </p>
                        <p>
                            <strong>Mail:</strong> {{ restaurant.email }}
                        </p>
                        <p>
                            <i class="fa-solid fa-clock"></i>
                            {{ restaurant.opening_time }}
                        </p>
                        <p>
                            <i class="fa-solid fa-star yellow" v-for="star in dividedNum(restaurant.vote)"></i>
                            <i class="fa-solid fa-star" v-for="star in 5 - dividedNum(restaurant.vote)"></i>
                        </p>
                        <p>
                            <strong>Phone:</strong> {{ restaurant.telephone_number }}
                        </p>
                    </div>
                        <router-link class="btn btn-primary mt-3" :to="{ name: 'menù', params: {restaurantId: restaurant.id } }">
                            Guarda il menù
                        </router-link>
                </div>
            </div>
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
            restaurantApiUrl: 'http://127.0.0.1:8000/api/restaurant',
            typologies: [],
            restaurants: [],
            type_restaurant:[],
            searchInput: '',
            typeSelected: 2,    
        }
    },
    methods:{

        // PRENDE LE TIPOLOGIE VIA API
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

        // PRENDE I RISTORANTI VIA API
        getRestaurant(){
            axios.get(this.restaurantApiUrl, {
                params: {
                }
            })
                .then( (response) => {
                    this.restaurants = response.data.result.data;
                    this.store.restaurantsList = this.restaurants;
                    // console.log(this.restaurants);
                 })
                .catch(function (error) {
                    console.log(error);
                })
        },

        // FILTRA I RISTORANTI PER NOME
        searchElement(element){
            if(this.searchInput === '' || this.searchInput === 'Cerca tra centinaia di piatti e ristoranti'){
                return true;
            }else{
                if(element.name.toLowerCase().includes(this.searchInput.toLowerCase())){
                    return true;
                }
            return false;
            }
        },

        // FILTRA I RISTORANTI PER TIPOLOGIA
        filterByTypology(type){
            if(this.typeSelected === 0){
                return true;
            }
            else if(type === this.typeSelected){
                return true;
            }
            return false;
        },  

        // IMPOSTA LA PRIMA RICERCA, SE PRESENTE
        setFirstSearch(){
            this.searchInput = this.store.FirstSearch;
        },

        // IMPOSTA LA PRIMA TIPOLOGIA, SE PRESENTE
        setFirstType(){
            this.typeSelected = this.store.FirstselectedType; 
        },

        dividedNum(num){
            return Math.ceil(num/2)
        }
    },
    mounted(){
        this.store.searchBar = false;
        this.store.menuRestaurant = false;
        this.setFirstSearch();
        this.setFirstType();
        this.getTypology();
        this.getRestaurant();
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
    div.advanced-results{
        width: 100%;
        height: 90vh;
        overflow-y: auto;
        display: flex;
        // float: left;
        flex-wrap: wrap;
        text-align: center;
        div.card-container{
            // display: inline-block;
            // width: 30%;
            width: auto;
                div.find{
                    width: calc(350px - 3rem);
                    height: 700px;
                    margin: 1.5rem;
                    background-color: $BlueColor;
                    color: white;
                    padding: 1rem;
                    position: relative;
                    border-radius: 10px;
                    transition: all 0.3s;
                    &:hover{
                        transform: scale(1.15);
                    }
                    img{
                        width: 100%;
                    }
                }
                div.no-result{
                    width: 0;
                }
        }
    }

    .fa-star{
        color: grey;
    }

    .fa-star.yellow{
        color: #fccf47;
    }


</style>