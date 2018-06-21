<template>
  <v-app id="app" :dark="$store.getters.darkTheme">
    <NavHeader /> 
    <router-view />
  </v-app>
</template>

<script>
import NavHeader from "@/components/NavHeader";

export default {
  components: {
    NavHeader
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
