<template>
  <v-app id="app" :dark="$store.getters.darkTheme">
    <NavHeader />
    <v-content>
      <router-view />
    </v-content>
    <AppDrawer />
  </v-app>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import AppDrawer from "@/components/AppDrawer";

export default {
  components: {
    NavHeader,
    AppDrawer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Product Sans", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
