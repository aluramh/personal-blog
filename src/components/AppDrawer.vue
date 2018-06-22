<template>
  <v-navigation-drawer v-model="drawer" absolute>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    
    <!-- Drawer items -->
    <v-list class="pt-0">
      <v-list-tile 
        v-for="item in items" 
        :key="item.title" 
        @click="$router.push(item.link)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <!-- About page -->
      <v-list-tile @click="$router.push('/about')">
        <v-list-tile-action>
          <v-avatar size="24">
            <img :src="require('../assets/df.jpg')">
          </v-avatar>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>El DX</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Blog", icon: "dashboard", link: "/blog" },
        { title: "Archive", icon: "question_answer", link: "/archive" }
      ],
      right: null
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(val) {
        console.log("New Drawer", val);
        this.$store.dispatch("setDrawer", val);
      }
    }
  }
};
</script>
