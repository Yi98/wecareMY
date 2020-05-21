<template>
  <v-col md="4">
    <v-card class="mx-auto mb-12">
      <v-img :src="center.photo" height="200px"></v-img>

      <v-card-title>{{ center.name }}</v-card-title>

      <v-card-subtitle>{{ center.address }} (1.4km away)</v-card-subtitle>

      <v-card-actions>
        <a
          style="text-decoration: none;"
          :href="formattedAdrress"
          target="_blank"
        >
          <v-btn color="indigo" class="action-btn" text>Get Direction</v-btn>
        </a>
        <a style="text-decoration: none;" :href="whatsappNo" target="_blank">
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
    show: false,
  }),
  props: {
    center: Object
  },
  computed: {
    whatsappNo: function() {
      return `https://wa.me/6${this.center.phoneNo}`;
    },
    formattedAdrress: function() {
      return `https://www.google.com/maps/search/?api=1&query=${this.center.address.replace(/\s/g, "%20").replace(/,/g, "%2C")}`;
    }
  }
};
</script>