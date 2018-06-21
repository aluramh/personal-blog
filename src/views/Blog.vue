<template>
  <v-container>
    <v-layout row class="pt-3">
      <v-flex xs12 sm6 offset-sm3>
        <BlogCard 
          v-for="post in blogPosts" 
          :key="post.slug"
          :srcImage="post.featured_image"
          :title="post.title"
          :summary="post.summary"
          :slug="post.slug"
          :tags="post.tags"
          :author="post.author"
          class="my-3"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { butter } from "@/buttercms";
import BlogCard from "@/components/BlogCard";

export default {
  name: "Blog",
  components: {
    BlogCard
  },
  data() {
    return {
      blogPosts: []
    };
  },
  props: {
    msg: String
  },
  async created() {
    // this.fetchHeadline();
    this.blogPosts = await this.fetchPosts();
    console.log(this.blogPosts);
  },
  methods: {
    fetchHeadline() {
      butter.content.retrieve(["homepage_headline"]).then(res => {
        console.log("Headline from ButterCMS");
        console.log(res);
      });
    },
    async fetchPosts() {
      // eslint-disable-next-line
      const { data: { data: blogPosts } } = await butter.post.list({
        page: 1,
        page_size: 10
      });
      return blogPosts;
    }
  }
};
</script>
