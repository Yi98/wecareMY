<template>
  <v-col md="4">
    <v-card class="mx-auto mb-12">
      <v-img :src="center.photo" height="200px"></v-img>

      <v-card-title>{{ center.name }}</v-card-title>

      <v-card-subtitle>{{ center.address }}</v-card-subtitle>

      <v-card-actions>
        <a style="text-decoration: none;" :href="formattedAdrress" target="_blank">
          <v-btn color="indigo" class="action-btn" text>Get Direction</v-btn>
        </a>

        <div class="text-center">
          <a style="text-decoration: none;" :href="whatsappNo" target="_blank">
            <v-btn color="indigo" class="ml-1" text>Contact</v-btn>
          </a>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="pb-3">1. Shower Water Heater</v-list-item-title>
              <v-list-item-subtitle class="pb-3">Date requested: 13/06/2020</v-list-item-subtitle>
              <v-list-item-subtitle class="pb-3">Special Note: None</v-list-item-subtitle>
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

#important-note {
  font-size: 1.1rem !important;
  line-height: 170%;
}
</style>

<script>
export default {
  data: () => ({
    show: true,
  }),
  props: {
    center: Object
  },
  computed: {
    whatsappNo: function() {
      return `https://wa.me/6${this.center.phoneNo}`;
    },
    formattedAdrress: function() {
      return `https://www.google.com/maps/search/?api=1&query=${this.center.address
        .replace(/\s/g, "%20")
        .replace(/,/g, "%2C")}`;
    }
  }
};
</script>