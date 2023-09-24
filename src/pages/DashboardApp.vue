<template>
    <section class="user-dashboard">
        <div class="side-nav">
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>

                <li>
                    <a href="">
                        Statistiche
                    </a>
                </li>

                <li>
                    <router-link :to="{ name: 'menù' }">
                        Menù
                    </router-link>
                </li>

                <li>
                    <a href="">
                        Opzioni
                    </a>
                </li>
            </ul>
        </div>
        <div class="dashboard-main">
            <div class="esempio">
                <h1>
                    Statistiche etc..
                </h1>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';

    export default{
        name: 'DashboardApp',
        data(){
            return{
                store,
            }
        },
        mounted(){
            store.searchBar = false;
            store.logIn = true;
        }
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *;
    section.user-dashboard{
        display: flex;
        div.side-nav{
            height: calc(100vh - 10vh);
            background-color: $YellowColor;
            ul{
                list-style-type: none;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 5rem 2rem;
                li{
                    background-color: $LightBlueColor;
                    padding: 1rem 2rem;
                    border: 2px solid $BlueColor;
                    border-radius: 1rem;
                    text-align: center;
                    a{
                        text-decoration: none;
                        color: white;
                    }
                }
                li:hover{
                    background-color: $BlueColor;
                    
                }
            }
        }
        div.dashboard-main{
            width: 100%;
            display: flex;
            padding-top: 5rem;
            justify-content: center;
            align-items: center;
            div.esempio{
                background-color: $LightBlueColor;
                width: 70%;
                height: 60vh;
            }
        }
    }
</style>