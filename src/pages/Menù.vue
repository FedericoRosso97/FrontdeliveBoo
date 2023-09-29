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
                <div class="order-quantity">
                    <div v-for="(orderTot,index) in ordersQuantity">
                        <button class="btn btn-light" @click="removeQuantity(index)">
                            -
                        </button>
                        <p>
                            {{ orderTot }}
                        </p>
                        <button class="btn btn-light" @click="addQuantity(index)">
                            +
                        </button>
                    </div>
                </div>
                <div class="order-name">
                    <div class="order-item" v-for="order in orders">
                        <p>
                            {{ order.name }}
                        </p>
                    </div>
                </div>
                <div class="order-price">
                    <div class="order-item" v-for="(order,index) in orders">
                        <p>
                            {{ order.plate_price }}
                        </p>
                        <button class="btn btn-danger btn-sm" @click="removeItem(index)">
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
            ordersQuantity: [],
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
                    // console.log(this.plates);
                }
            })
        },
        addToCart(plate){
            this.total = parseFloat(this.total);
            let yetInList = false;
            if(this.orders.length === 0){
                this.ordersQuantity.push(1);
                this.orders.push(plate);
                // console.log('added first');
            }else{
                for(let i = 0; i < this.orders.length; i++){
                    // console.log('hello');
                    if(this.orders[i] === plate){
                        this.ordersQuantity[i]++;
                        // console.log('added quantity');
                        yetInList = true;
                        // break;
                    }
                }
                // console.log(yetInList);
                if(yetInList === false){
                    this.ordersQuantity.push(1);
                    this.orders.push(plate);
                    // console.log('added plate');
                }
            }
            let price = plate.plate_price
            price = parseFloat(price.replace(",",".").replace("€",""));
            this.total = this.total + price;
            this.total = parseFloat(this.total).toFixed(2);
            // console.log(this.orders);
        },
        removeItem(item){
            this.total = parseFloat(this.total);
            let platePrice = parseFloat(this.orders[item].plate_price.replace(",",".").replace("€",""));
            this.total = this.total - (platePrice * this.ordersQuantity[item]);
            this.total = parseFloat(this.total).toFixed(2);
            this.orders.splice(item,1);
            this.ordersQuantity.splice(item,1);
        },
        addQuantity(i){
            this.ordersQuantity[i]++;
            this.total = parseFloat(this.total);
            let platePrice = parseFloat(this.orders[i].plate_price.replace(",",".").replace("€",""));
            this.total = this.total + platePrice;
            this.total = parseFloat(this.total).toFixed(2);
        },
        removeQuantity(i){
            this.ordersQuantity[i]--;
            this.total = parseFloat(this.total);
            let platePrice = parseFloat(this.orders[i].plate_price.replace(",",".").replace("€",""));
            this.total = this.total - platePrice;
            this.total = parseFloat(this.total).toFixed(2);
            if(this.ordersQuantity[i] < 1){
                this.removeItem(i);
            }
        },
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
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 0.5rem;
            height: 400px;
            // margin-top: 3rem;
            // margin-right: 2rem;
            margin: 3rem 1rem;
            padding: 0 2rem;
            position: relative;
            h3{
                padding: 0.5rem 0;
            }
            div.order-container{
                background-color: $WhiteColor;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                border-radius: 0.5rem;
                height: 250px;
                display: flex;
                justify-content: space-between;
                padding: 0.7rem 1rem;
                overflow-y: auto;
                div.order-quantity{
                    div{
                        display: flex;
                        button{
                            height: 25px;
                            width: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            // credits: Material
                            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
                        }
                        p{
                            margin-left: 0.3rem;
                            margin-right: 0.3rem;
                        }
                    }
                }
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
                    margin-left: 0.3rem;
                }
            }
            div.order-total{
                width: 370px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                bottom: 1rem;
                h4{
                    background-color: $BlueColor;
                    border-radius: 0.3rem;
                    color: white;
                    padding: 0.5rem;
                }
                
            }
        }
    }
</style>