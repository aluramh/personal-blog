import Vue from "vue";

const BlogNavigation = Vue.extend({
  name: "navigation-button",
  props: ["title", "slug", "type"],
  // eslint-disable-next-line
  render(h) {
    const { title, slug } = this;
    const type = this.type === "prev" ? "Previous" : "Next";
    const navIcon = (
      <v-icon>
        {this.type === "prev" ? "navigate_before" : "navigate_next"}
      </v-icon>
    );
    // <v-icon>navigate_next</v-icon>
    const prev = this.type === "prev";

    return (
      <v-tooltip bottom>
        <v-btn
          slot="activator"
          to={`/blog/${slug}`}
          color="primary"
          class="button"
        >
          {prev && navIcon}
          {title}
          {!prev && navIcon}
        </v-btn>
        <span>{type} post</span>
      </v-tooltip>
    );
  }
});

export default BlogNavigation;
