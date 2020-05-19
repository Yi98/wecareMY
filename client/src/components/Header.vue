<template>
  <v-app-bar app color="white" height="60" dense flat>
    <!-- <v-avatar class="mr-3" color="grey lighten-5" size="70">
        <v-img
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
    </v-avatar>-->

    <v-toolbar-title class="font-weight-black headline"><router-link style="color: #3f51b5; text-decoration: none;" :to="{name: 'Index'}">WecareMY</router-link></v-toolbar-title>
  </v-app-bar>
</template>

<style scoped>
</style>  

<script>
export default {};
</script>