<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components:{
      AppHeader,
      AppMain,
      AppFooter
    }
    
}
</script>

<template>

 <AppHeader />
 <AppMain />
 <AppFooter />
   
</template>

<style lang="scss">
  @import './styles/general.scss';
  @import '../node_modules/bootstrap/scss/bootstrap';
  
  
</style>
