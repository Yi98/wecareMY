<template>
  <v-col md="4">
    <v-card class="mx-auto mb-12">
      <v-img :src="host.image" height="200px"></v-img>

      <v-card-title>{{ host.name }}</v-card-title>

      <v-card-subtitle>{{ host.address }} (1.4km away)</v-card-subtitle>

      <v-card-actions>
        <a
          style="text-decoration: none;"
          href="https://www.google.com/maps/search/?api=1&query=Saradise%20Kuching%2C%20Jalan%20Stutong%2C%20Kuching%2C%20Sarawak"
          target="_blank"
        >
          <v-btn color="indigo" class="action-btn" text>Get Direction</v-btn>
        </a>
        <a style="text-decoration: none;" href="https://wa.me/60123456789" target="_blank">
          <v-btn color="indigo" class="ml-1" text>Contact</v-btn>
        </a>

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
              <v-list-item-subtitle>3 days ago</v-list-item-subtitle>
              <v-list-item-subtitle>Special Note: 2 dozens eggs needed.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>Brown Rice</v-list-item-title>
              <v-list-item-subtitle>5 days ago</v-list-item-subtitle>
              <v-list-item-subtitle>Special Note: Small packet is enough.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<style scoped>
.action-btn {
  padding-left: 4% !important;
}
</style>

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