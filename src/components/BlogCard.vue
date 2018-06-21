<template>
  <v-card class="m-3">
    <v-card-media
      :src="srcImage"
      height="100px"
    >
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ title }}</div>
        <span class="grey--text">{{ summary }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="purple">Leer post</v-btn>
      <v-btn flat>Compartir</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    srcImage: String,
    title: String,
    summary: String
  }
};
</script>
