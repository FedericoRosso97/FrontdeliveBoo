<template>
    <div>
        <h1>
            AppHome
        </h1>
    </div>
</template>

<script>
import { store } from '../store';

    export default{
        name: 'AppHome',
        data(){
            return{
                store,
            }
        },
        mounted(){
            store.searchBar = true;
        }
    }
</script>

<style scoped lang="scss">
    
</style>