<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import LoginForm from './components/LoginForm.vue';
import RegistrationForm from './components/RegistrationForm.vue';
</script>

<template>
  <AppHeader/>

    <!-- !!!!!!!!!!!! DA FAR COMPARIRE/SPARIRE !!!!!!!!!!!! -->

    <LoginForm/>
    <RegistrationForm/>

    <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
  
    <router-view>
    </router-view>
  <AppFooter/>
</template>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
  @import './styles/general.scss';
</style>
