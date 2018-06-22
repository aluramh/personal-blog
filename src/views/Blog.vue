<template>
  <v-container>
    <v-layout v-bind="binding" class="pt-3">
      <v-flex
        v-for="post in blogPosts"
        :key="post.slug"
        sm4
        xs12
      >
        <BlogCard 
          :srcImage="post.featured_image"
          :title="post.title"
          :summary="post.summary"
          :slug="post.slug"
          :tags="post.tags"
          :author="post.author"
          class="ma-3"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { fetchPosts } from "@/buttercms";
import BlogCard from "@/components/BlogCard";

export default {
  name: "Blog",
  components: {
    BlogCard
  },
  data() {
    return {
      blogPosts: [],
      chunkSize: 2
    };
  },
  props: {
    msg: String
  },
  async created() {
    // this.fetchHeadline();
    this.blogPosts = await fetchPosts();
    console.log(this.blogPosts);
  },
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) {
        binding.row = true;
        binding.wrap = true;
      }

      return binding;
    }
  }
};
</script>
