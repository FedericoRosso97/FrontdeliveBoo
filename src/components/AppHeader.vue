<template>
    <header :class="(store.searchBar === true)? 'home-start' : 'home-small'">
        
        <div class="upper-header">

            <!-- LOGO -->
            <a href="http://localhost:5174">
                <img src="../assets/logo_deliveboo.png" alt="DeliveBoo brand image" >            
            </a>

            <!-- LOG IN / REGISTRAZIONE -->
        
            <div class="logIn pe-4">

                <!-- <router-link :to="{ name: 'login' }">
                    Log-in
                </router-link> -->
                <a href="http://127.0.0.1:8000/login">
                    Log-in
                </a>

                <span>
                    |
                </span>

                <!-- <router-link :to="{ name: 'registration' }">
                    Registrati
                </router-link> -->
                <a href="http://127.0.0.1:8000/register">
                    Registrati
                </a>
            </div>
        </div>

        <div class="bottom-header" v-if="store.searchBar === true">


            <!-- SEARCHBAR -->
    
            <div class="searchBar">
                <h1>
                    Cosa vuoi mangiare?
                </h1>
                
                <form method="GET">
                    <input type="text" placeholder="Cerca tra centinaia di piatti e ristoranti!" v-model="inputSearch" @keyup.enter="changeAdvancedSrc(inputSearch)">
                    <button @click="changeAdvancedSrc(inputSearch)">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <!-- <router-link :to="{ name: 'AdvancedSearch' }">
                    Test
                </router-link> -->
            </div>
        </div>

        <div class="return-restaurants" v-if="this.store.menuRestaurant === true">
            <router-link :to="{ name: 'AdvancedSearch'}" class="btn btn-light">
                Ritorna alla lista ristoranti
            </router-link>
        </div>
    </header>
</template>

<script>
import { store } from '../store';

export default {
    name:'AppHeader',
    data(){
        return{
            store,
            links: [
                {
                    route: 'restaurant',
                    name: 'restaurant',
                },
                {
                    route: 'menù',
                    name: 'menù'
                },
            ]
        }        
    },
    methods:{
        changeAdvancedSrc(input){
            this.store.FirstSearch = input;
            this.$router.push({
                name: 'AdvancedSearch',
            });
        }
    },
    mounted(){
        // console.log(store.inputSearch)
    }
}
</script>

<style scoped lang="scss">
    @use '../styles/partials/variables.scss' as *;

    header{
        // background: linear-gradient(-20deg, #FCCF47 60%, #1795A8 60%);
        background: linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://img.freepik.com/free-photo/flat-lay-arrangement-with-salad-box-sauce_23-2148247883.jpg?w=1380&t=st=1695997291~exp=1695997891~hmac=3511ad5c4222fc97e3fc47e4dd4ab7e87dc1da0fd8427fa988455b5432daa3d7');
    }
    header.home-small,
    header.home-start{
        height: 40vh;
        // padding: 2.5rem 12rem;
        // background: linear-gradient(to top,$YellowColor 0%,$YellowColor 50%,$BlueColor 50%,$BlueColor 100%);
        div.upper-header{
            height: 30%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a{
                height: 160px;
                img{
                    height: 100%;
                }
            }
            
            div.logIn-ok,
            div.logIn{
                span,
                a{
                    text-decoration: none;
                    color: white;
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }
        div.bottom-header{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            div.searchBar{
                width: 50%;
                padding: 2.5rem;
                background-color: $LightBlueColor;
                border: 7px solid white;
                border-radius: 2rem;
                position: absolute;
                top: 180px;
                text-align: center;
                h1{
                    color: white;
                    padding-bottom: 1rem;
                }
                form{
                    height: 45px;
                    input{
                        height: 100%;
                        width: 70%;
                        padding: 0.5rem 1rem;
                        border: 1px solid rgb(100, 100, 100);
                        border-bottom-left-radius: 0.7rem;
                        border-top-left-radius: 0.7rem;
                    }
                    button{
                        height: 100%;
                        width: 45px;
                        background-color: white;
                        border: 1px solid rgb(100, 100, 100);
                        border-left: 0px;
                        border-top-right-radius: 0.7rem;
                        border-bottom-right-radius: 0.7rem;
                        i{
                            font-size: 1.3rem;
                            color: rgb(58, 58, 58);
                        }
                    }
                }
            }
        }
    }
    header.home-small{
        height: 10vh;
        background: linear-gradient(to top,$BlueColor 0%,$BlueColor 50%,$BlueColor 50%,$BlueColor 100%);

        div.upper-header{
            a{
                height: 160px;
                img{
                    height: 100%;
                }
            }
        }
    }
.upper-header {
    padding-top: 3rem;
    // background-color: #1695A6;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 200px;
        margin-left: 3rem;
    }
}


nav {
    width: 100%;
    display: flex;
    justify-content: center;
}

ul {
    display: flex;
    font-size: 2rem;
    list-style-type: none;
}

li {
    margin-right: 2rem;

    a {
        text-decoration: none;
        color:white;
    }
}

div.return-restaurants{
    
    position: relative;
    a{
        position: absolute;
        left: 250px;
        bottom: -1.5rem;
    }
}
// .lower-header {
//     background-color: #FDCF48;
//     height: 150px;
//     display: flex;
//     justify-content: center;


//     .choose-box {
//         display: flex;
//         justify-content: center;

//         h1 {
//             color: #F8F8F8;
//         }
//     }
// }
.searchBar {
    width: 50%;
    padding: 2.5rem;
    background-color: #24B0C1;
    border: 7px solid white;
    border-radius: 2rem;
    position: absolute;
    top: 200px;
    text-align: center;
}


</style>