<template>
  <v-container class="mt-12">
    <v-row>
      <v-col cols="10">
        <h1 id="location-title" class="pb-3">Location: {{selectedCity}}, {{selectedState}}</h1>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="300" offset-y left>
          <template v-slot:activator="{ on }">
            <v-icon
              id="search-icon"
              color="indigo"
              right
              class="text-center"
              dark
              v-on="on"
            >fa-search</v-icon>
          </template>

          <v-card class="pt-5">
            <h3 class="pl-7">Search location</h3>
            <v-list>
              <v-list-item>
                <v-col class="d-flex" cols="12">
                  <v-select
                    :items="states"
                    label="State"
                    v-model="selectedState"
                    outlined
                    @change="onSelectState()"
                    style="height: 45px;"
                  ></v-select>
                </v-col>
              </v-list-item>

              <v-list-item>
                <v-col class="d-flex" cols="12">
                  <v-select
                    :items="cities"
                    label="City"
                    v-model="selectedCity"
                    outlined
                    @change="onSelectCity()"
                    style="height: 45px;"
                  ></v-select>
                </v-col>
              </v-list-item>
            </v-list>

            <v-card-actions class="pr-6">
              <v-spacer></v-spacer>
              <v-btn text @click="menu = false">Close</v-btn>
              <v-btn color="indigo" text @click="menu = false">Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>

    <v-row>
      <Card v-for="(center, i) in centers" v-bind:key="i" v-bind:center="center" />
    </v-row>
  </v-container>
</template>

<style scoped>
#location-title {
  font-size: 1.5rem;
}

#search-icon {
  padding-top: 2%;
  padding-right: 5%;
}

@media only screen and (max-width: 767px) {
  #search-icon {
    padding-top: 13%;
  }
}
</style>

<script>
import axios from "axios";
import Card from "./Card";

export default {
  components: {
    Card
  },
  mounted: function() {
    axios
      .get(`${this.domain}/api/centers`)
      .then(response => {
        this.centers = response.data.centers;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  },
  created: function() {
    this.selectedState = this.$store.state.currentState;
    this.selectedCity = this.$store.state.currentCity;
  },
  data: function() {
    return {
      selectedState: null,
      selectedCity: null,
      centers: [],
      menu: false,
      states: [
        // "All states",
        "Selangor",
      ],
      cities: [
        // "All cities",
        "Cheras"
      ],
      parties: ["Orphanage", "Old folk's home"]
    };
  },
  methods: {
    onSelectState: function() {
      this.$store.commit("changeState", {
        newState: this.selectedState
      });
    },
    onSelectCity: function() {
      this.$store.commit("changeCity", {
        newCity: this.selectedCity
      });
    }
  }
};
</script>