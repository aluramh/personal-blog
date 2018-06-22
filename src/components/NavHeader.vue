<template>
  <v-toolbar>
    <v-toolbar-side-icon 
      @click="$store.dispatch('toggleDrawer')"
      class="hidden-md-and-up"
    />

    <v-btn flat to="/">
      <v-toolbar-title class="mr-3">
        {{ title }}
      </v-toolbar-title>
    </v-btn>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/blog">Blog</v-btn>
      <v-btn flat to="/archive">Archive</v-btn>
      <v-btn flat to="/about">About</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <!-- Switch theme -->
    <div class="text-center">
      <v-btn icon flat color="primary" @click="$store.dispatch('toggleDarkTheme')">
        <v-icon>{{ $store.getters.darkTheme ? 'flash_on' : 'flash_off' }}</v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      title: "DFBlog"
    };
  }
};
</script>
