<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default{
    name : 'App',
    components:{
        AppHeader,
        AppFooter,
    }
}

</script>

<template>
    <header>
        <AppHeader />
    </header>

    <main>
        <router-view>

        </router-view>
    </main>

    <footer>
        <AppFooter />
    </footer>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import './styles/generals.scss';

//
/*body{
    background-color: black;
    color: azure;
}*/

</style>
