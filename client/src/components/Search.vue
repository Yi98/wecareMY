<template>
  <v-container class="mt-12">
    <v-row>
      <v-col cols="10">
        <h1 id="location-title" class="pb-3">Location: {{selectedState}}, {{selectedCity}}</h1>
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
        console.log(this.centers);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  },
  created: function() {
    this.selectedState = this.$route.params.state;
    this.selectedCity = this.$route.params.city;
  },
  data: function() {
    return {
      selectedState: null,
      selectedCity: null,
      centers: [],
      menu: false,
      states: [
        "All",
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
      cities: [
        "All",
        "Ayer Baloi",
        "Ayer Hitam",
        "Bandar Penawar",
        "Bandar Tenggara",
        "Batu Anam",
        "Batu Pahat",
        "Bekok",
        "Benut",
        "Bukit Gambir",
        "Bukit Pasir",
        "Chaah",
        "Endau",
        "Gelang Patah",
        "Gerisek"
      ],
      parties: ["Orphanage", "Old folk's home"],
      hosts: [
        {
          name: "Happy Kids Home Sweet Home",
          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          image:
            "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2286&q=80",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "快乐成长之家",
          address:
            "25 Jln Limau Besar Taman Bangsar, 59000 Wilayah Persekutuan, Kuala Lumpur.",
          image:
            "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Green Tree Old Folks' Home",
          image:
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",

          address:
            "Lot9A Kawasan Miel Sama Jaya Industrial Zone, 93450 Kuching, Sarawak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "欢乐儿童之家",
          image:
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",

          address:
            "Pusat Professional, Jalan Syed Mohd Mufti, 93100 Tulur Hitam, Johor.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Happy Family Home",
          image:
            "https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",

          address: "47 Hla Perusahaan Kledang Utara, 31452 Ipoh, Perak.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        },
        {
          name: "Ruman Seri Kenangan",
          image:
            "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",

          address:
            "No. 14 Jln Harilela, Taman Harilela, 31350 Perak, Malaysia.",
          contact: "012-3456789",
          items: ["Shirts", "2 bags of rice", "Potatoes", "Carrots"]
        }
      ]
    };
  }
};
</script>