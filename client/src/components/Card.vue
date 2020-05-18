<template>
  <v-col md="4">
    <v-card class="mx-auto mb-12">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

      <v-card-title>{{ host.name }}</v-card-title>

      <v-card-subtitle>{{ host.address }} (1.4km away)</v-card-subtitle>

      <v-card-actions>
        <v-btn color="primary" text>Get Direction</v-btn>

        <v-btn color="primary" text>Contact</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Eggs</v-list-item-title>
              <v-list-item-subtitle>5 days ago</v-list-item-subtitle>
              <v-list-item-subtitle>Special Note: Only organice eggs.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Rice</v-list-item-title>
              <v-list-item-subtitle>5 days ago</v-list-item-subtitle>
              <v-list-item-subtitle>Special Note: Only brown rice.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<style scoped></style>

<script>
export default {
  data: () => ({
    show: false
  }),
  props: {
    host: Object
  }
};
</script>