<template>
  <v-app style="overflow-x: hidden;">
    <Header />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: "App",
  components: {
    Header
  }
};
</script>
