<template>
  <v-container>
    <v-layout row class="pt-3">
      <v-flex
        v-for="(blogs, index) in splitData"
        :key="index"
        xs12
        sm6
      >
        <BlogCard 
          v-for="post in blogs" 
          :key="post.slug"
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
import { butter } from "@/buttercms";
import { chunk as _chunk } from "lodash";
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
    this.blogPosts = await this.fetchPosts();
    console.log(this.blogPosts);
    console.log(this._chunk(this.blogPosts, 2));
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
    },
    _chunk
  },
  computed: {
    splitData() {
      return _chunk(this.blogPosts, this.chunkSize);
    }
  }
};
</script>
