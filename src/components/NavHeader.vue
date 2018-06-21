<template>
  <v-toolbar>
    <v-toolbar-title class="mr-3" @click="go('/')">
      {{ title }}
    </v-toolbar-title>
    <!-- <v-spacer></v-spacer> -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="go('/blog')">Blog</v-btn>
      <v-btn flat @click="go('/archive')">Archive</v-btn>
      <v-btn flat @click="go('/about')">About</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      title: "DFBlog"
    };
  },
  methods: {
    go(page) {
      this.$router.push(page);
    }
  }
};
</script>
