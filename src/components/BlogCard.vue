<template>
  <v-card :style="{ position: 'relative'} ">
    <lol></lol>
    <v-card-media v-if="srcImage" :src="srcImage" height="100px" />
    <!-- <v-avatar
      size="48" 
      :style="{ 
        transform: srcImage
          ? 'translateY(-24px)'
          : 'translateY(-1px)'
      }"
      class="teal post__avatar mx-2"
      :class="{ 'mt-2': !srcImage }"
    >
      <img :src="author.profile_image">
    </v-avatar> -->
    
    <v-card-title primary-title>
      <div :style="{ width: '100%' }">
        <div class="headline" :style="{ cursor: 'pointer' }">{{ title }}</div>
        <span class="grey--text">{{ summary }}</span>
      </div>
    </v-card-title>

    <!-- Actions -->
    <v-card-actions>
      <v-btn 
        color="purple"
        dark
        text-color="white" 
        :to="`/blog/${slug}`"
      >
        Leer post
      </v-btn>
      <v-btn flat>Compartir</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>

    <!-- Blog tags -->
    <div class="text-xs-center text-sm-left pa-2">
      <v-chip v-for="(tag, i) in tags" :key="i" 
        outline
        small
        dark
        color="teal" 
        text-color="teal"
      >
        <!-- <v-icon left>label</v-icon> -->
        {{ tag.name }}
      </v-chip>
    </div>
  </v-card>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "blog-card",
  props: {
    srcImage: String,
    title: String,
    summary: String,
    slug: String,
    tags: Array,
    author: Object
  }
});
</script>

<style lang="scss">
.post__avatar {
  position: absolute !important;
  left: 0px;
}
</style>
