<template>
  <v-container>
    <!-- <pre :style="{ textAlign: 'left' }">{{ post }}</pre> -->
    <h1>{{ post.data.title }}</h1>
    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    
    <v-divider class="my-5"></v-divider>

    <div v-html="post.data.body"></div>

    <!-- Pagination -->
    <v-tooltip v-if="post.meta.previous_post" bottom>
      <v-btn 
        slot="activator" 
        :to="`/blog/${post.meta.previous_post.slug}`" 
        color="primary" 
        class="button"
      >
        <v-icon>navigate_before</v-icon>
        {{ post.meta.previous_post.title }}
      </v-btn>
      <span>Previous post</span>
    </v-tooltip>

    <v-tooltip v-if="post.meta.next_post" bottom>
      <v-btn 
        slot="activator" 
        :to="`/blog/${post.meta.next_post.slug}`" 
        color="primary" 
        class="button"
      >
        <v-icon>navigate_next</v-icon>
        {{ post.meta.next_post.title }}
      </v-btn>
      <span>Next post</span>
    </v-tooltip>
  </v-container>
</template>

<script>
import { butter } from "@/buttercms";

export default {
  name: "blog-post",
  data() {
    return {
      post: { data: { author: {} }, meta: {} },
      page: 2
    };
  },
  async created() {
    this.post = await this.getPost();
  },
  methods: {
    async getPost() {
      try {
        const { data: post } = await butter.post.retrieve(
          this.$route.params.slug
        );
        return post;
      } catch (e) {
        console.error(e);
      }
    }
  },
  watch: {
    async "$route.params.slug"() {
      this.post = await this.getPost();
    }
  }
};
</script>
