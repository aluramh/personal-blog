<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import { butter } from "@/buttercms";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    this.fetchHeadline();
    this.fetchPosts();
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
      const { data: { data: [first] } } = await butter.post.list({
        page: 1,
        page_size: 10
      });
      console.log("Content from ButterCMS");
      console.log(first);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
