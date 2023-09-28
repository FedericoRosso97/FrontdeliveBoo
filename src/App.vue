<script setup>
import AppHeader from './components/AppHeader.vue';
import AppChart from './components/AppChart.vue';
import AppFooter from './components/AppFooter.vue';


</script>

<template>
  <AppHeader/>  
  <AppChart />
    <router-view>
    </router-view>
  <AppFooter/>
</template>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
  @import './styles/general.scss';
</style>
