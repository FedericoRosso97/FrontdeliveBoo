<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default{
    name : 'App',
    components:{
        AppFooter,
        AppHeader,
    }
}

</script>

<template>
    <AppHeader />
    <AppFooter />
</template>

<style lang="scss">
@import './styles/generals.scss';
</style>
