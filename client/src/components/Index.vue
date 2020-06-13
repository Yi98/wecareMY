<template>
  <div>
    <v-content>
      <section id="hero">
        <v-row no-gutters>
          <v-img id="hero-background" height="55vh" src="../assets/hero.jpg">
            <v-theme-provider dark>
              <v-container>
                <v-row align="center" id="hero-row" class="white--text mx-auto" justify="center">
                  <v-col class="white--text text-center" cols="12" tag="h1" style="z-index: 999;">
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >WELCOME TO</span>
                    <br />

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >WecareMY</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <v-form id="index-form" ref="indexForm">
        <v-container>
          <h1 class="pt-4" id="hero2-text">Find orphanages / old folks' homes around you</h1>
          <v-row>
            <v-col cols="12" md="5" class="text-center hero-select">
              <v-select
                :items="states"
                label="State"
                v-model="selectedState"
                :rules="[v => !!v || 'State is required']"
                required
                @change="onSelectState()"
              ></v-select>
            </v-col>

            <v-col cols="12" md="5" class="text-center">
              <v-select
                :items="cities"
                label="City"
                v-model="selectedCity"
                :rules="[v => !!v || 'City is required']"
                required
                @change="onSelectCity()"
              ></v-select>
            </v-col>

            <v-col cols="12" md="2" class="text-center">
              <v-btn
                x-large
                elevation="0"
                color="indigo"
                id="search-btn"
                @click="onSearchLocation()"
              >Search</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <section id="about-me">
        <div class="about-container"></div>

        <v-container class="text-center">
          <h2 class="font-weight-bold">ABOUT WecareMY</h2>
          <div class="inner-border">&nbsp;</div>
          <div class="mb-12"></div>

          <v-responsive
            class="mx-auto title font-weight-light mb-11"
            max-width="720"
          >Established on year 2020, WecareMY is a Non-Profit Organisation(NPO) in Malaysia that aims to connect people who are in needs to people who are willing to help. We provide a platform to connect both parties. We care about you!</v-responsive>
        </v-container>

        <div class="about-container-btn"></div>
      </section>

      <section id="features" class="grey lighten-4">
        <v-container id="work-container" class="text-center py-12">
          <h2 class="font-weight-bold mt-12">HOW IT WORKS?</h2>
          <div class="inner-border">&nbsp;</div>
          <div class="pb-12 mb-12"></div>

          <v-row>
            <v-col class="mb-10" v-for="({title, text }, i) in features" :key="i" cols="12" md="4">
              <v-card class="py-12 px-4 step-cards" color="white" flat>
                <v-theme-provider dark>
                  <div>
                    <v-avatar class="step-avatar" color="indigo" size="65">
                      <h1 style="color: white;">{{i + 1}}</h1>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text class="subtitle-1" v-text="text"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div id="work-container-btm" class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
          id="stats-parallax"
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          src="../assets/stats.jpg"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col v-for="[value, title] of stats" :key="title" cols="12" md="4">
                <div class="text-center">
                  <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                  <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section id="blog">
        <div id="mission-container" class="py-12"></div>

        <v-container>
          <h2 class="font-weight-bold text-uppercase text-center">Our Missions</h2>
          <div class="inner-border">&nbsp;</div>
          <div class="pb-5 mb-12"></div>

          <v-row>
            <v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" md="4">
              <v-img :src="src" class="mb-4" height="275" max-width="100%"></v-img>

              <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

              <div class="title font-weight-light mb-5" v-text="text"></div>

              <!-- <v-btn class="ml-n4 font-weight-black" text>Continue Reading</v-btn> -->
            </v-col>
          </v-row>
        </v-container>

        <div id="mission-container-btm" class="py-12"></div>
      </section>

      <v-sheet id="contact" dark tag="section" tile>
        <div id="contact-padding" class="py-12"></div>

        <v-container>
          <h2 class="font-weight-bold mb-12 text-center">Contact Us</h2>

          <v-theme-provider light id="contact-form">
            <v-row>
              <v-col cols="12" class="py-0">
                <v-text-field flat label="Name*" solo></v-text-field>
              </v-col>

              <v-col cols="12" class="py-0">
                <v-text-field flat label="Email address*" solo></v-text-field>
              </v-col>

              <v-col cols="12" class="py-0">
                <v-text-field flat label="Subject*" solo></v-text-field>
              </v-col>

              <v-col cols="12" class="py-0">
                <v-textarea flat label="Message*" solo></v-textarea>
              </v-col>

              <v-col class="mx-auto" cols="12">
                <v-btn id="submit-btn" x-large color="indigo" style="color: #fff;">Submit</v-btn>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div id="contact-padding-btm" class="py-12"></div>
      </v-sheet>
    </v-content>

    <v-footer id="footer" class="justify-center grey lighten-4" height="60">
      <div class="title font-weight-light text--lighten-1 text-center">
        <span
          style="font-size: 1.1rem;"
        >&copy; {{ (new Date()).getFullYear() }} WecareMY | All right reserved.</span>
      </div>
    </v-footer>
  </div>
</template>

<style>
.v-content {
  padding: 0 !important;
}
</style>

<style scoped>
#index-form {
  position: absolute;
  width: 70%;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -70%);
  padding: 10px 50px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 4px 5px #e4e4e4;
  border-radius: 4px;
}

#search-btn {
  width: 100%;
  color: #fff;
  text-decoration: none;
}

.about-container {
  padding: 7% 0;
}

.about-container-btn {
  padding: 4% 0;
}

#hero-background::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #000000, #000000);
  opacity: 0.3;
}

#stats-parallax:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #000000, #000000);
  opacity: 0.5;
}

.step-cards {
  height: 100%;
  box-shadow: 2px 4px 5px 1px #e4e4e4;
  border-radius: 4px;
}

.step-avatar {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

#hero-row {
  padding-top: 9%;
}

#hero2-text {
  font-size: 1.4rem;
}

#contact-form {
  margin: 0 auto;
  width: 50%;
}

#submit-btn {
  width: 100%;
}

h2 {
  font-size: 2.5rem;
}

.inner-border {
  width: 7%;
  height: 20px;
  margin: 0px auto;
  border-bottom: 3px solid #070707;
}

@media only screen and (max-width: 767px) {
  .inner-border {
    width: 20%;
    height: 20px;
    margin: 0px auto;
    border-bottom: 3px solid #070707;
  }

  h2 {
    font-size: 2.2rem;
  }

  #contact-form {
    width: 100%;
  }

  #hero-background {
    height: 100vh !important;
  }

  #hero-row {
    padding-top: 22%;
  }

  #index-form {
    position: absolute;
    width: 95%;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -60%);
    padding: 0 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: none;
    border-radius: 4px;
  }

  .hero-select {
    padding-bottom: 0;
  }

  #work-container {
    padding: 5% 0 !important;
  }

  #work-container-btm {
    padding: 0 !important;
  }

  #contact-padding,
  #mission-container,
  #contact-padding-btm,
  #mission-container-btm {
    padding: 7% 0 !important;
  }
}
</style>

<script>
export default {
  name: "Index",
  data() {
    return {
      selectedState: this.$store.state.currentState,
      selectedCity: this.$store.state.currentCity,
      states: [
        // "All states",
        "Selangor",
      ],
      cities: [
        // "All cities",
        "Cheras",
      ],
      articles: [
        {
          src:
            "https://images.unsplash.com/photo-1531498001693-66235ecacf14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
          title: "Connect people in needs and people who can help",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        },
        {
          src:
            "https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
          title: "Make orphanages and old folks' home fully community driven",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        },
        {
          src:
            "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          title: "Avoid abuse of funding and donation",
          text:
            "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
        }
      ],
      features: [
        {
          title: "Request",
          text:
            "People in charged of orphanages or old folk's homes request their daily needs on the platform. Community is able to view the items that they need."
        },
        {
          title: "Contact",
          text:
            "People who are interested to help can contact the orphanages and old folks' home to further discuss the details such as date and time with phone number provided."
        },
        {
          title: "Resolve",
          text:
            "The items are sent to the destination on promised date and time. Whole process is carried out among sender and receiver, no middleman in between."
        }
      ],
      stats: [
        ["0", "Helping hands"],
        ["1", "Organizations helped"],
        ["0", "requests fulfilled"]
      ]
    };
  },
  methods: {
    onSearchLocation: function() {
      if (this.$refs.indexForm.validate()) {
        this.$router.push({
          name: "Search",
          params: { state: this.selectedState, city: this.selectedCity }
        });
      }
    },
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
