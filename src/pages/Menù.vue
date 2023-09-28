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
                <h3 class="restaurant-name">
                    {{ restaurant.name }}
                </h3>
            </li>

            <li class="img-containers">
                <img :src="restaurant.image" alt="restaurant image">
            </li>

            <li>
                <p>
                    <strong>
                        Address: 
                    </strong>
                    {{ restaurant.address }}
                </p>
            </li>

            <li>
                <p>
                    <strong>
                        Email: 
                    </strong>
                    {{ restaurant.email }}
                </p>
            </li>

            <li>
                <p>
                    <strong>
                        Phone: 
                    </strong>
                    {{  restaurant.telephone_number }}
                </p>
            </li>

            <li>
                <p>
                    <strong>
                        Opening: 
                    </strong>
                    {{ restaurant.opening_time }}
                </p>
            </li>

            <li>
                <p>
                    <strong>
                        Vote: 
                    </strong>
                    {{ restaurant.vote }}
                </p>
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

                <button class="btn btn-primary" @click="addToCart(plate)">
                    Aggiungi al carrello - {{ plate.plate_price }}
                </button>
            </div>
        </div>
    </div>
    <div class="shop">
        <div class="shop-container">
            <h3>
                Il tuo ordine:
            </h3>
            <div class="order-container">
                <div class="order-name">
                    <div class="order-item" v-for="order in orders">
                        <p>
                            - {{ order.name }}
                        </p>
                    </div>
                </div>
                <div class="order-price">
                    <div class="order-item" v-for="(order,index) in orders">
                        <p>
                            {{ order.plate_price }}
                        </p>
                        <button class="btn btn-danger" @click="removeItem(index)">
                            X
                        </button>
                    </div>
                </div>
            </div>
            <div class="order-total">
                <h4>
                    Totale: {{ total }} €
                </h4>
                <a class="btn btn-primary" href="http://127.0.0.1:8000/payment">
                    Completa l'ordine
                </a>
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
            orders: [],
            total: 0,
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
        },
        addToCart(plate){
            this.total = parseFloat(this.total);
            this.orders.push(plate);
            let price = plate.plate_price
            price = parseFloat(price.replace(",",".").replace("€",""));
            this.total = this.total + price;
            this.total = parseFloat(this.total).toFixed(2);
        },
        removeItem(item){
            this.total = parseFloat(this.total);
            let platePrice = parseFloat(this.orders[item].plate_price.replace(",",".").replace("€",""));
            this.total = this.total - platePrice;
            this.total = parseFloat(this.total).toFixed(2);
            this.orders.splice(item,1);
        }
    },
    mounted(){
        this.store.searchBar = false;
        this.store.menuRestaurant = true;
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
            width: 30vw;
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
                li.img-containers{
                    width: 90%;
                    img{
                        width: 100%;
                        margin-bottom: 2rem;
                    }
                }
                h3.restaurant-name{
                    margin: 2rem 0;
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
        overflow-y: auto;
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

    div.shop{
        width: 800px;
        // background-color: red;
        div.shop-container{
            background-color: $YellowColor;
            height: 400px;
            // margin-top: 3rem;
            // margin-right: 2rem;
            margin: 3rem 1rem;
            padding: 0 2rem;
            div.order-container{
                height: 300px;
                display: flex;
                justify-content: space-between;
                padding: 0 2rem;
                overflow-y: auto;
            }
            div.order-price{
                button.plate-delete{
                    width: 8px;
                    height: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            div.order-item{
                display: flex;
                justify-content: space-between;
                button{
                    height: 25px;
                    width: 7px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 1rem;
                }
            }
            div.order-total{
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>