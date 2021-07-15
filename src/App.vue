<template>
  <div id="app">
    <headerNav></headerNav>
    <headerTab></headerTab>

    <keep-alive>
      <transition name="fade-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
    
    <myFooter></myFooter>
    <div id="back-to-top" class="btn-back-to-top">
      <i class="ion ion-ios-arrow-thin-up"></i>
    </div>
  </div>
</template>

<script>
import myFooter from './components/global/footer';
import headerNav from './components/global/headerNav';
import headerTab from './components/global/headerTab';

export default {
    name: 'App',
    components: {
        myFooter,
        headerNav,
        headerTab,
    }
}
</script>

<style lang="css">
@import './assets/index.css';
</style>
