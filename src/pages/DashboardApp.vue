<template>
    <section class="user-dashboard">
        <h1>
            Dashboard
        </h1>
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
        }
    }
</script>

<style scoped lang="scss">
    
</style>