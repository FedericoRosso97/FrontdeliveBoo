<template>
    <!-- <div class="type-restaurant-title">
        <h2>
            Scegli dal menù:
        </h2>
    </div>

    CHOOSE FROM THE MENù
    <div class="restourant-types">
        <ul>
            <li v-for="(plate,index) in plates">
                <h3>
                    {{ plate.name}}
                </h3>
            </li>
        </ul>
    </div> -->

<section class="menu-searchbar">

    <!-- DATI DEL RISTORANTE -->
    <div class="menu-sidebar">
        <h4>
            Dati Ristorante:
        </h4>
        <ul>
            <li>
                <h5>
                    Nome: {{ restaurant.name }}
                </h5>
            </li>

            <li>
                <img :src="restaurant.image" alt="restaurant image">
            </li>

            <li>
                <p>
                    {{ restaurant.address }}
                </p>
            </li>

            <li>
                <p>
                    Email: {{ restaurant.email }}
                </p>
            </li>

            <li>
                Phone: {{  restaurant.telephone_number }}
            </li>

            <li>
                Opening: {{ restaurant.opening_time }}
            </li>

            <li>
                Vote: {{ restaurant.vote }}
            </li>
        </ul>
    </div>

    <!-- LISTA DEI PIATTI DISPONIBILI -->
    <div class="menu-results">
        <div class="plate-container">
            <div class="plate" v-for="plate in plates">

                <img :src="plate.image" alt="">
                <h3>
                    {{ plate.name }}
                </h3>
                <p>
                    {{ plate.description }}
                </p>

                <button class="btn btn-primary">
                    Aggiungi al carrello - {{ plate.plate_price }}
                </button>
            </div>
        </div>
    </div>
</section>
</template>


<script>
import { store } from '../store';

export default {
    name: 'Menù',

    data() {
        return {
            store,
            restaurantApiUrl: 'http://127.0.0.1:8000/api/restaurant',
            plates: [],
            restaurant: '',
        }
    },

    methods: {
        getSelectedRestourant(id){
            this.store.restaurantsList.forEach((restaurant) => {
                if(restaurant.id == id){
                    this.restaurant = restaurant;
                    this.plates = restaurant.plates;
                    console.log(this.plates);
                }
            })
        }
    },
    mounted(){
        this.store.searchBar = false;
        // this.store.menuRestaurant = true;
        // this.selectedId = this.$route.params.restaurantId;
        this.getSelectedRestourant(this.$route.params.restaurantId);
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

// ul {
//     list-style-type: none;
//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;

//     li {
//         text-align: center;
//         width: 30%;
//         background-color: $BlueColor;
//         margin-top: 2rem;
//         padding: 1rem 0;
//         border-radius: 1rem;
//         border: 2px solid $LightBlueColor;
//         color: white;

//         h3 {
//             color: white;
//         }
//     }
// }
section.menu-searchbar{
        width: 100%;
        height: calc(100vh - 10vh);
        display: flex;
        div.menu-sidebar{
            width: 25vw;
            background-color: $YellowColor;
            h4{
                text-align: center;
                margin-top: 1.5rem;
                padding: 1rem 1rem;
                color: white;
                border-top: 3px solid white;
                border-bottom: 3px solid white;
                background-color: $LightBlueColor;
            }
            ul{
                list-style-type: none;
                width: 100%;
                padding-left: 1.5rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                img{
                    height: 250px;
                }
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

    div.menu-results{
        
        width: 100%;
        div.plate-container{
            width: 80%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            div.plate{
                width: 30%;
                height: 500px;
                padding: 1rem;
                margin: 1rem;
                background-color: $BlueColor;
                border-radius: 0.5rem;
                color: white;
                position: relative;
                img{
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-radius: 0.5rem;
                    margin-bottom: 1.5rem;
                }
                button{
                    position: absolute;
                    bottom: 1.5rem;
                }
            }
        }
    }
</style>