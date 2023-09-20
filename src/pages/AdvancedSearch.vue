<template>
    <form method="GET" class="advanced-searchbar">
        <input type="text" placeholder="Cerca tra centinaia di piatti e ristoranti!" v-model="inputSearch" @keyup.enter="">
        <button @click="">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
    <div class="advanced-sideBar">
        <ul>
            <li v-for="typology in typologies">
                <button>
                    {{ typology.name }}
                </button>
            </li>
        </ul>
    </div>
    <div class="advanced-results">
        <h1>
            AdvancedSearch:
        </h1>
        <span>
            {{ $route.params.input }}
        </span>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name:'AdvancedSearch',
    data(){
        return{
            store,
            typologyApiUrl: 'http://127.0.0.1:8000/api/typology',
            typologies: [],    
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
                    console.log(this.typologies);
                 })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    mounted(){
        // this.input = this.store.inputSearch;
        this.getTypology();
        this.store.searchBar = false;
    }
}
</script>

<style scoped lang="scss">
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
</style>