<template>
  <div>
    <!-- <pre :style="{ textAlign: 'left' }">{{ post }}</pre> -->

    <section>
      <component 
        :is="post.data.featured_image ? 'v-parallax' : 'v-container'" 
        :src="post.data.featured_image" height="300"
      >
        <v-layout column align-center justify-center>
          <h1>{{ post.data.title }}</h1>
          <h3>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h3>
        </v-layout>
      </component>
    </section>

    <section>
      <v-container>
        <div v-html="post.data.body" class="text-sm-left mb-3"></div>

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
    </section>
  </div>
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
