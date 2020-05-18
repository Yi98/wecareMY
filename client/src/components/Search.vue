<template>
  <v-container class="mt-12">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Filter</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row class="mb-5">
            <v-col class="d-flex" cols="12" sm="4">
              <v-select :items="states" label="State" outlined style="height: 50px;"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-select :items="cities" label="City" outlined style="height: 50px;"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-select :items="parties" label="Party" outlined style="height: 50px;"></v-select>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <v-row class="mb-5">
      <v-col class="d-flex" cols="12" sm="4">
        <v-select :items="states" label="State" outlined style="height: 50px;"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
        <v-select :items="cities" label="City" outlined style="height: 50px;"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
        <v-select :items="parties" label="Party" outlined style="height: 50px;"></v-select>
      </v-col>
    </v-row> -->

    <h1 id="location-title" class="pb-3">Location: Johor Bahru, Kayu Hitam</h1>

    <v-row>
      <Card v-for="(host, i) in hosts" v-bind:key="i" v-bind:host="host" />
    </v-row>
  </v-container>
</template>

<style scoped>
#location-title {
  font-size: 1.5rem;
}
</style>

<script>
import Card from "./Card";

export default {
  components: {
    Card
  },
  data: function() {
    return {
      states: [
        "Johor",
        "Kedah",
        "Kelantan",
        "Perak",
        "Selangor",
        "Malacca",
        "Negeri Sembilan",
        "Pahang",
        "Perlis",
        "Penang",
        "Terengganu",
        "Sabah",
        "Sarawak"
      ],
      cities: ["All"],
      parties: ["Orphanage", "Old folk's home"],
      hosts: [
        {
          name: "Happy Kids Home Sweet Home",
          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Happy Kids Home Sweet Home",
          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Happy Kids Home Sweet Home",
          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Happy Kids Home Sweet Home",
          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Happy Kids Home Sweet Home",
          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Happy Kids Home Sweet Home",
          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        }
      ]
    };
  }
};
</script>