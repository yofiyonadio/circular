<template>
  <div id="app">
    <fade-transition origin="center" mode="out-in" :duration="250">
      <router-view />
    </fade-transition>
  </div>
</template>

<script>
// import Content from './components/HelloWorld.vue'
import { FadeTransition } from "vue2-transitions";

export default {
  name: "App",
  components: {
    FadeTransition,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
