<<<<<<< HEAD
<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <AppHeader/>  
    <router-view>
    </router-view>
  <AppFooter/>
=======
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

>>>>>>> Menù-branch
</template>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
<<<<<<< HEAD
  @import './styles/general.scss';
=======
  @import './styles/generals.scss';
>>>>>>> Menù-branch
</style>
