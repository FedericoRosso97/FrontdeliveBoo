<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import LoginForm from './components/LoginForm.vue';
</script>

<template>
  <AppHeader/>
    <LoginForm/>
    <router-view>
    </router-view>
  <AppFooter/>
</template>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
  @import './styles/general.scss';
</style>
