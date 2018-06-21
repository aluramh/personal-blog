<template>
  <div id="app">
    <NavHeader />
    <router-view />
  </div>
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
