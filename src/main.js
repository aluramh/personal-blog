import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./styles/fonts.scss";

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
