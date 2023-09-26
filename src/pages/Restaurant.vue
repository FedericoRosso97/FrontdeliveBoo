<template>
    <div class="type-restaurant-title">
        <h2>
            Scegli il tipo di ristorante:
        </h2>
    </div>

    <!--RESTAURANT TYPE-->
    <div class="restourant-types">
        <ul>
            <li v-for="restaurant in restaurants">
                <h3>
                    {{ restaurant.name }}
                </h3>
            </li>
        </ul>
    </div>
</template>


<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'Restaurant',
    data() {
        return {
            store,
            restaurantApiUrl: 'http://127.0.0.1:8000/api/restaurants',
            restaurants: [],
        }
    },

    methods: {
        getRestaurant() {
            axios.get(this.restaurantApiUrl, {
                params: {
                }
            })
                .then((response) => {
                    this.restaurants = response.data.result;
                    console.log(response);
                    console.log(this.restaurants);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    
    mounted(){
        this.store.menuRestaurant = true;
        this.store.searchBar = false;
        this.getRestaurant();
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

div.restourant-types {
    margin: 0 auto;
    width: 85%;

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
}
</style>