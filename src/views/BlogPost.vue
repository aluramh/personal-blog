<template>
  <div>
    This is a blog post
    <pre :style="{ textAlign: 'left' }">{{ post }}</pre>
  </div>
</template>

<script>
import { butter } from "@/buttercms";

export default {
  name: "blog-post",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data;
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  created() {
    this.getPost();
  }
};
</script>
