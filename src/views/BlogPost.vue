<template>
  <v-container>
    <pre :style="{ textAlign: 'left' }">{{ post }}</pre>
    <h1>{{ post.data.title }}</h1>
    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    
    <v-divider class="my-5"></v-divider>

    <div v-html="post.data.body"></div>

    <!-- Pagination -->
    <BlogNavigation
      v-if="post.meta.previous_post"
      :title="post.meta.previous_post.title"
      :slug="post.meta.previous_post.slug"
      type="prev"
    />

    <BlogNavigation
      v-if="post.meta.next_post"
      :title="post.meta.next_post.title"
      :slug="post.meta.next_post.slug"
      type="next"
    />
  </v-container>
</template>

<script>
import { getPost } from "@/buttercms";
import BlogNavigation from "./../components/BlogNavigation";

export default {
  name: "blog-post",
  components: { BlogNavigation },
  data() {
    return {
      post: { data: { author: {} }, meta: {} },
      page: 2
    };
  },
  async created() {
    this.post = await getPost(this.$route.params.slug);
  },
  watch: {
    async "$route.params.slug"(newVal) {
      this.post = await getPost(newVal);
    }
  }
};
</script>
