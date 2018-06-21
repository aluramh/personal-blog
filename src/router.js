import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";
import Archive from "./views/Archive";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/archive",
      name: "Archive",
      component: Archive
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
