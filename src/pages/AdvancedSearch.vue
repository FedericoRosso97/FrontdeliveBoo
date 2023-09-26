<template>
    <form method="GET" class="advanced-searchbar">
        <input type="text" placeholder="Cerca tra centinaia di piatti e ristoranti!" v-model="searchInput">
        <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
    <section class="advanced-searchbar">
        <div class="advanced-sidebar">
            <h4>
                Cerca per tipologia:
            </h4>
            <ul>
                <li v-for="(typology,index) in typologies">
                    <button @click="filterByTypology(index)">
                        {{ typology.name }}
                    </button>
                </li>
            </ul>
        </div>
        <div class="advanced-results">
            <div class="card-container" v-for="(restaurant,index) in restaurants">
                <div v-if="searchElement(restaurant)" :class="(searchElement(restaurant) === true)? 'find' : '' ">
                    <div class="info-restaurant">
                        <h1>
                            {{ restaurant.name }} {{ index = index + 1 }}
                        </h1>
                        <img :src="restaurant.image" alt="">
                        <p>
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
                            <strong>Phone:</strong> {{ restaurant.telephone_number }}
                        </p>
                    </div>
                    <div class="buttons">
                        <a class="btn btn-primary" href="">
                            Guarda il menù
                        </a>
                    </div>
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
            restaurantTypologyUrl: 'http://127.0.0.1:8000/api/type_restaurant',
            typologies: [],
            restaurants: [],
            type_restaurant:[],
            searchInput: '',
            typeId: 0,    
        }
    },
    methods:{
        getTypology(){
            axios.get(this.typologyApiUrl, {
                params: {
                }
            })
                .then( (response) => {
                    console.log(response);
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
        getRestourantType(){
            axios.get(this.restaurantTypologyUrl, {
                params: {
                }
            })
                .then( (response) => {
                    this.type_restaurant = response.data.result;
                    console.log(this.type_restaurant);
                 })
                .catch(function (error) {
                    console.log(error);
                })
        },
        searchElement(element){
            console.log(this.searchInput);
            if(this.searchInput === '' || this.searchInput === 'Cerca tra centinaia di piatti e ristoranti'){
                return true;
            }else{
                if(element.name.toLowerCase().includes(this.searchInput.toLowerCase())){
                    return true;
                }
            return false;
            }
        },

        filterByTypology(type){
            console.log('helo');
            console.log(this.restaurants);
            this.type_restaurant.forEach((element) => {
                console.log(restaurant.name + ' : ' + restaurant.id)
                if(type === 0){
    
                }
            });
            
        },  
        setFirstSearch(){
            this.searchInput = this.$route.params.input;
        }
    },
    mounted(){
        // console.log(this.store.selectedType);
        this.store.searchBar = false;
        this.setFirstSearch();
        this.getTypology();
        this.getRestaurant();
        this.getRestourantType();
        // this.filterByTypology(this.store.selectedType);
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
        flex-wrap: wrap;
        div.card-container{
                div.find{
                    width: calc(100% - 3rem);
                    margin: 1.5rem;
                    background-color: $BlueColor;
                    color: white;
                    padding: 1rem;
                    position: relative;
                    div.buttons{
                        a{
                            position: absolute;
                            right: 40px;
                            bottom: 70px;
                        }
                    }
                    img{
                        width: 100%;
                    }
                }
        }
    }
</style>